import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";

describe("Dashboard Controller Integration Tests", () => {
  let validToken: string;

  const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";

  beforeAll(() => {
    // 1. Seed database once for all attendance tests
    validToken = jwt.sign(
      { userId: "mock-user-id", role: "HR_ADMIN" },
      secret,
      { expiresIn: "1h" },
    );
  });

  afterAll(async () => {
    // 2. Clean up test database records once
    await db.$disconnect();
  });

  // ==========================================
  // CONTROLLER 1: getAttendanceLogs
  // ==========================================
  describe("GET /api/dashboard/stats", () => {
    it("should return 401 Unauthorized if no token is provided", async () => {
      const response = await request(app).get("/api/dashboard/stats");

      expect(response.status).toBe(401);
    });

    it("should return 403 Frobidden if user role is EMPLOYEE", async () => {
      const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";
      const employeeToken = jwt.sign(
        {
          userId: "mock-emp-id",
          role: "EMPLOYEE",
        },
        secret,
        { expiresIn: "1h" },
      );

      const response = await request(app)
        .get("/api/dashboard/stats")
        .set("Authorization", `Bearer ${employeeToken}`);

      expect(response.status).toBe(403);
    });

    it("should return 200 OK with analytics payload when authorized as HR_ADMIN", async () => {
      const response = await request(app)
        .get("/api/dashboard/stats")
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("analytics");

      const { headcount, leave, attendanceToday, performance } =
        response.body.analytics;

      // Verify Headcount Types
      expect(typeof headcount.totalEmployees).toBe("number");
      expect(Array.isArray(headcount.byDepartment)).toBe(true);

      // Verfiy Leave Types
      expect(typeof leave.pendingRequests).toBe("number");
      expect(typeof leave.onLeaveToday).toBe("number");

      // Verify Attendance Types
      expect(typeof attendanceToday.present).toBe("number");
      expect(typeof attendanceToday.late).toBe("number");
      expect(typeof attendanceToday.halfDay).toBe("number");
      expect(typeof attendanceToday.absent).toBe("number");
      expect(typeof attendanceToday.totalClockedIn).toBe("number");

      // Verify Performance Types
      expect(typeof performance.companyAverageRating).toBe("number");
      expect(typeof performance.totalReviewsEvaluated).toBe("number");
    });
  });
});
