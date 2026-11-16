import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";

describe("Leave Controller Integration Tests", () => {
  let testAdminToken: string;

  const nonExistentId: string = "00000000-0000-0000-0000-000000000000";

  const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";

  beforeAll(async () => {
    testAdminToken = jwt.sign(
      {
        userId: "mock-test-admin-id",
        role: "HR_ADMIN",
      },
      secret,
      { expiresIn: "1h" },
    );
  });

  afterAll(async () => {
    await db.performanceReview.deleteMany({});

    await db.$disconnect();
  });

  // ==========================================
  // CONTROLLER 1: createReview
  // ==========================================
  describe("POST /api/performance", () => {
    const ratingScenarios = [
      { testCase: "is missing", payload: {} },
      { testCase: "is null", payload: { rating: null } },
      { testCase: "is not a number", payload: { rating: "5" } },
      { testCase: "is negative", payload: { rating: -1 } },
      { testCase: "is less than 1", payload: { rating: 0 } },
      { testCase: "is greater than 5", payload: { rating: 6 } },
    ] as const;

    it.each(ratingScenarios)(
      "should return 400 if Rating \$testCase",
      async ({ payload }) => {
        const response = await request(app)
          .post("/api/performance")
          .set("Authorization", `Bearer ${testAdminToken}`)
          .send(payload);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          "Rating must be a number and must be between 1 to 5",
        );
      },
    );

    const yearScenarios = [
      { testCase: "is missing", payload: { rating: 1 } },
      { testCase: "is null", payload: { year: null, rating: 1 } },
      { testCase: "is not a number", payload: { year: "2026", rating: 1 } },
      {
        testCase: "is greater than the current Year",
        payload: { year: 2027, rating: 1 },
      },
    ];

    it.each(yearScenarios)(
      "should return 400 if Year \$testCase",
      async ({ payload }) => {
        const response = await request(app)
          .post("/api/performance")
          .set("Authorization", `Bearer ${testAdminToken}`)
          .send(payload);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          "Year must be a number and maximum year should be the upto the current year",
        );
      },
    );
  });

  // ==========================================
  // CONTROLLER 2: getEmployeeReviews
  // ==========================================
  describe("GET /api/performance", () => {});

  // ==========================================
  // CONTROLLER 3: getPerformanceSummary
  // ==========================================
  describe("GET /api/performance", () => {});
});
