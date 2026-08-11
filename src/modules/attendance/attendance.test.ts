import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";

describe("Attendance Controller Integration Tests", () => {
  /* 
    Shared Test State & Credentials
  */
  const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";
  let adminToken: string;
  let employeetoken: string;
  let orphanToken: string;

  let testUser: any;
  let testEmployee: any;
  let orphanUser: any;

  /* 
    Global Setup (Runs Once Before All Endpoint Suites)
  */
  beforeAll(async () => {
    // 1. Seed HR Admin Token
    adminToken = jwt.sign(
      {
        userId: "mock-admin-id",
        role: "HR_ADMIN",
      },
      secret,
      { expiresIn: "1h" },
    );

    // 2. Seed a Regular Employee + User record in hris_test_db
    testUser = await db.user.create({
      data: {
        email: "john.attendance.test@example.com",
        password: "hashedpassword123",
        role: "EMPLOYEE",
        employee: {
          create: {
            firstName: "John",
            lastName: "Doe",
          },
        },
      },
      include: { employee: true },
    });

    testEmployee = testUser.employee;

    employeetoken = jwt.sign(
      {
        userId: testUser.id,
        role: "EMPLOYEE",
      },
      secret,
      { expiresIn: "1h" },
    );

    // 3. Seed an Orphan User (User without an associated Employee Record)
    orphanUser = await db.user.create({
      data: {
        email: "orphan.attendance.test@example.com",
        password: "hashedpassword123",
        role: "EMPLOYEE",
      },
    });

    orphanToken = jwt.sign(
      {
        userId: orphanUser.id,
        role: "EMPLOYEE",
      },
      secret,
      { expiresIn: "1h" },
    );
  });

  /* 
    Global Teardown (Runs Once After All Endpoint Suites Complete)
  */
  afterAll(async () => {
    // Delete seeded attendance records first to respect foreign key constraints
    await db.attendance.deleteMany({
      where: { employeeId: testEmployee?.id },
    });

    // Delete seeded users
    await db.user.deleteMany({
      where: {
        email: {
          in: [
            "john.attendance.test@example.com",
            "orphan.attendance.test@example.com",
          ],
        },
      },
    });

    await db.$disconnect();
  });

  // ==========================================
  // CONTROLLER 1: getAttendanceLogs
  // ==========================================
  describe("GET /api/attendance", () => {
    beforeAll(async () => {
      // Seed a sample attendance log specifically for testing GET queries
      await db.attendance.create({
        data: {
          employeeId: testEmployee.id,
          date: new Date(),
          clockIn: new Date(),
          status: "PRESENT",
        },
      });
    });

    it("should return 401 Unauthorized if no Bearer token is provided", async () => {
      const response = await request(app).get("/api/attendance");

      expect(response.status).toBe(401);
    });

    it("should return 404 if logged-in user lacks an associated employee record", async () => {
      const response = await request(app)
        .get("/api/attendance")
        .set("Authorization", `Bearer ${orphanToken}`);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Employee profile not found.");
    });

    it("should return 200 OK and restrict a regular EMPLOYEE to their own logs", async () => {
      const response = await request(app)
        .get("/api/attendance")
        .set("Authorization", `Bearer ${employeetoken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("attendanceLogs");
      expect(Array.isArray(response.body.attendanceLogs)).toBe(true);

      // Verify row-level isolation
      response.body.attendanceLogs.forEach((log: any) => {
        expect(log.employeeId).toBe(testEmployee.id);
      });
    });

    it("should allow HR_ADMIN to filter attendance by employeeId and status", async () => {
      const response = await request(app)
        .get(`/api/attendance?employeeId=${testEmployee.id}&status=PRESENT`)
        .set("Authorization", `Bearer ${adminToken}`);

      expect(response.status).toBe(200);
      expect(typeof response.body.meta.totalItems).toBe("number");
      expect(response.body.attendanceLogs[0].status).toBe("PRESENT");
    });
  });

  // ==========================================
  // CONTROLLER 2: clockIn
  // ==========================================
  describe("POST /api/attendance/clock-in", () => {
    // Clear attendance logs for this employee so clockIn can succeed
    beforeAll(async () => {
      await db.attendance.deleteMany({
        where: { employeeId: testEmployee.id },
      });
    });

    it("should allow an authenticated employee to clock in successfully", async () => {
      const response = await request(app)
        .post("/api/attendance/clock-in")
        .set("Authorization", `Bearer ${employeetoken}`)
        .send({ location: "Office HQ" });

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty("attendance");
      expect(response.body.attendance.employeeId).toBe(testEmployee.id);
    });

    it("should return 400 Bad Request if employee attempts to clock in twice on the same day", async () => {
      // First clock-in
      await request(app)
        .post("/api/attendance/clock-in")
        .set("Authorization", `Bearer ${employeetoken}`);

      // Duplicate clock-in on same day
      const response = await request(app)
        .post("/api/attendance/clock-in")
        .set("Authorization", `Bearer ${employeetoken}`);

      expect(response.status).toBe(400);
    });
  });

  // ==========================================
  // CONTROLLER 3: clockOut
  // ==========================================
  describe("PATCH /api/attendance/clock-out", () => {
    it("should return 400 Bad Request if trying to clock out without clocking in first", async () => {
      // Wipe logs to ensure no clock-in exists
      await db.attendance.deleteMany({
        where: { employeeId: testEmployee.id },
      });

      const response = await request(app)
        .patch("/api/attendance/clock-out")
        .set("Authorization", `Bearer ${employeetoken}`);

      expect(response.status).toBe(400);
    });

    it("should update clockOut timestamp when an active clock-in exists", async () => {
      // 1. Normalize today's date EXACTLY like the controller does
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // 2. Clear old records for this employee
      await db.attendance.deleteMany({
        where: { employeeId: testEmployee.id },
      });

      // 3. Seed an active clock-in record using normalized `today`
      await db.attendance.create({
        data: {
          employeeId: testEmployee.id,
          date: today, // Must match setHours(0, 0, 0, 0)
          clockIn: new Date(),
          status: "PRESENT",
        },
      });

      // 4. Perform the PATCH request using your variable `employeetoken`
      const response = await request(app)
        .patch("/api/attendance/clock-out")
        .set("Authorization", `Bearer ${employeetoken}`);

      expect(response.status).toBe(201);
      expect(response.body.attendance).toHaveProperty("clockOut");
      expect(response.body.attendance.clockOut).not.toBeNull();
    });
  });
});
