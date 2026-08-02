import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";

describe("Dashboard API Integration Tests", () => {
  let validToken: string;

  beforeAll(() => {
    const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";
    validToken = jwt.sign(
      { userId: "mock-user-id", role: "HR_ADMIN" },
      secret,
      { expiresIn: "1h" },
    );
  });

  afterAll(async () => {
    await db.$disconnect();
  });

  describe("GET /api/dashboard/stats", () => {
    it("should return 401 Unauthorized if no token is provided", async () => {
      const response = await request(app).get("/api/dashboard/stats");

      expect(response.status).toBe(401);
    });

    it("should return 200 OK with analytics payload when authorized as HR_ADMIN", async () => {
      const response = await request(app)
        .get("/api/dashboard/stats")
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("analytics");
      expect(response.body.analytics).toHaveProperty("headcount");
      expect(response.body.analytics).toHaveProperty("attendanceToday");
    });
  });
});
