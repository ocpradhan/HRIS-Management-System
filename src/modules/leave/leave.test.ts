import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";

describe("Leave Controller Integration Tests", () => {
  let nonEmployeeToken: string;

  const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";

  beforeAll(async () => {
    nonEmployeeToken = jwt.sign(
      { userId: "mock-employee-id", role: "EMPLOYEE" },
      secret,
      { expiresIn: "1h" },
    );
  });

  afterAll(async () => {
    await db.leaveRequest.deleteMany({});

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
