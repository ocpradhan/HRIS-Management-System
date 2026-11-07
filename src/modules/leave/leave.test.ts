import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";

describe("Leave Controller Integration Tests", () => {
  let nonEmployeeToken: string;
  let testEmployee: any;
  let testEmployeeToken: string;

  const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";

  beforeAll(async () => {
    testEmployee = await db.user.create({
      data: {
        email: "testEmployee@test.com",
        password: "testEmployeePassword",
        role: "EMPLOYEE",
        employee: {
          create: {
            firstName: "Test",
            lastName: "Employee",
          },
        },
      },
      include: {
        employee: true,
      },
    });

    nonEmployeeToken = jwt.sign(
      { userId: "mock-employee-id", role: "EMPLOYEE" },
      secret,
      { expiresIn: "1h" },
    );

    testEmployeeToken = jwt.sign(
      {
        userId: testEmployee?.id,
        role: testEmployee?.role,
      },
      secret,
      {
        expiresIn: "1h",
      },
    );
  });

  afterAll(async () => {
    await db.leaveRequest.deleteMany({});
    await db.user.deleteMany({});

    await db.$disconnect();
  });

  // ==========================================
  // CONTROLLER 1: requestLeave
  // ==========================================
  describe("POST /api/leave", () => {
    it("should return 400 employee profile is not found", async () => {
      const response = await request(app)
        .post("/api/leave")
        .set("Authorization", `Bearer ${nonEmployeeToken}`)
        .send({
          leaveType: "sick-leave",
        });

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Employee profile not found.");
    });

    const validBasePayload = {
      startDate: "2026-08-01",
      endDate: "2026-08-05",
    };

    const payloadScenarios = [
      {
        testCase: "startDate",
        payload: { ...validBasePayload, startDate: "not-a-date" },
      },
      {
        testCase: "endDate",
        payload: { ...validBasePayload, endDate: "not-a-date" },
      },
    ];

    it.each(payloadScenarios)(
      "should return 400 if Invalid \$testCase format.",
      async ({ payload }) => {
        const response = await request(app)
          .post("/api/leave")
          .set("Authorization", `Bearer ${testEmployeeToken}`)
          .send(payload);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          "Invalid startDate or endDate format.",
        );
      },
    );
  });

  // ==========================================
  // CONTROLLER 2: reviewLeaveRequest
  // ==========================================
  /*
  describe("PATCH /api/leave/:id/review", () => {});

  // ==========================================
  // CONTROLLER 3: getLeaveRequests
  // ==========================================
  describe("GET /api/leave", () => {});
  */
});
