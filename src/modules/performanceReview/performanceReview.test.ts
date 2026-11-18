import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";

describe("Leave Controller Integration Tests", () => {
  let testDBAdmin: any;
  let testDBDirectManager: any;
  let testDBNotDirectManager: any;
  let testDBEmployee: any;
  let testDBReviewingEmployee: any;

  let testAdminToken: string;
  let testDBAdminToken: string;
  let testDBDirectManagerToken: string;
  let testDBNotDirectManagerToken: string;
  let testDBEmployeeToken: string;
  let testDBReviewingEmployeeToken: string;

  let existingReview: any;

  const nonExistentId: string = "00000000-0000-0000-0000-000000000000";

  const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";

  beforeAll(async () => {
    testDBAdmin = await db.user.create({
      data: {
        email: "testDBAdmin@test.com",
        password: "testDBAdmin",
        role: "HR_ADMIN",
        employee: {
          create: {
            firstName: "Test",
            lastName: "DBAdmin",
          },
        },
      },
      include: {
        employee: true,
      },
    });

    testDBAdminToken = jwt.sign(
      {
        userId: testDBAdmin?.id,
        role: testDBAdmin?.role,
      },
      secret,
      { expiresIn: "1h" },
    );

    testDBDirectManager = await db.user.create({
      data: {
        email: "testDBDirectManager@test.com",
        password: "testDBDirectManager",
        role: "MANAGER",
        employee: {
          create: {
            firstName: "TestDB",
            lastName: "Direct Manager",
          },
        },
      },
      include: {
        employee: true,
      },
    });

    testDBDirectManagerToken = jwt.sign(
      {
        userId: testDBDirectManager?.id,
        role: testDBDirectManager?.role,
      },
      secret,
      { expiresIn: "1h" },
    );

    testDBNotDirectManager = await db.user.create({
      data: {
        email: "testDBNotDirectManager@test.com",
        password: "testDBNotDirectManager",
        role: "MANAGER",
        employee: {
          create: {
            firstName: "TestDB",
            lastName: "Not Direct Manager",
          },
        },
      },
      include: {
        employee: true,
      },
    });

    testDBNotDirectManagerToken = jwt.sign(
      {
        userId: testDBNotDirectManager?.id,
        role: testDBNotDirectManager?.role,
      },
      secret,
      { expiresIn: "1h" },
    );

    testDBEmployee = await db.user.create({
      data: {
        email: "testDBEmployee@test.com",
        password: "testDBEmployee",
        role: "EMPLOYEE",
        employee: {
          create: {
            firstName: "TestDB",
            lastName: "Employee",
            manager: {
              connect: { id: testDBDirectManager?.employee?.id },
            },
          },
        },
      },
      include: {
        employee: true,
      },
    });

    testDBEmployeeToken = jwt.sign(
      { userId: testDBEmployee?.id, role: testDBEmployee?.role },
      secret,
      { expiresIn: "1h" },
    );

    testDBReviewingEmployee = await db.user.create({
      data: {
        email: "testDBReviewingEmployee@test.com",
        password: "testDBReviewingEmployee",
        role: "EMPLOYEE",
        employee: {
          create: {
            firstName: "TestDB",
            lastName: "Reviewing Employee",
          },
        },
      },
      include: {
        employee: true,
      },
    });

    testDBReviewingEmployeeToken = jwt.sign(
      {
        userId: testDBReviewingEmployee?.id,
        role: testDBReviewingEmployee?.role,
      },
      secret,
      { expiresIn: "1h" },
    );

    existingReview = await db.performanceReview.create({
      data: {
        rating: 2,
        year: 2026,
        period: "Q2",
        strengths: "Strong technical execution",
        improvements: "More cross-team communication",
        comments: "Great quarter overall",
        reviewerId: testDBDirectManager?.employee?.id,
        employeeId: testDBEmployee?.employee?.id,
      },
    });

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
    await db.user.deleteMany({});

    await db.$disconnect();
  });

  // ==========================================
  // CONTROLLER 1: createReview
  // ==========================================
  describe("POST /api/performance", () => {
    const validBasePayload = {
      rating: 2,
      year: 2026,
      period: "Q2",
      strengths: "Strong technical execution",
      improvements: "More cross-team communication",
      comments: "Great quarter overall",
    };

    const ratingScenarios = [
      {
        testCase: "is missing",
        payload: { ...validBasePayload, rating: undefined },
      },
      { testCase: "is null", payload: { ...validBasePayload, rating: null } },
      {
        testCase: "is not a number",
        payload: { ...validBasePayload, rating: "5" },
      },
      { testCase: "is negative", payload: { ...validBasePayload, rating: -1 } },
      {
        testCase: "is less than 1",
        payload: { ...validBasePayload, rating: 0 },
      },
      {
        testCase: "is greater than 5",
        payload: { ...validBasePayload, rating: 6 },
      },
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
      {
        testCase: "is missing",
        payload: { ...validBasePayload, year: undefined },
      },
      { testCase: "is null", payload: { ...validBasePayload, year: null } },
      {
        testCase: "is not a number",
        payload: { ...validBasePayload, year: "2026" },
      },
      {
        testCase: "is greater than the current Year",
        payload: { ...validBasePayload, year: 2027 },
      },
    ] as const;

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

    const periodScenarios = [
      {
        testCase: "is missing",
        payload: {
          ...validBasePayload,
          period: undefined,
        },
      },
      {
        testCase: "is not a string",
        payload: {
          ...validBasePayload,
          period: 100,
        },
      },
      {
        testCase: "is not valid",
        payload: {
          ...validBasePayload,
          period: "Q5",
        },
      },
    ] as const;

    it.each(periodScenarios)(
      "should return 400 if Period \$testCase",
      async ({ payload }) => {
        const response = await request(app)
          .post("/api/performance")
          .set("Authorization", `Bearer ${testAdminToken}`)
          .send(payload);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Invalid period specified.");
      },
    );

    const remainingFieldScenarios = [
      {
        fieldName: "Strengths",
        testCase: "is missing",
        payload: { ...validBasePayload, strengths: undefined },
      },
      {
        fieldName: "Strengths",
        testCase: "is not a string",
        payload: { ...validBasePayload, strengths: 6 },
      },
      {
        fieldName: "Improvements",
        testCase: "is missing",
        payload: { ...validBasePayload, improvements: undefined },
      },
      {
        fieldName: "Improvements",
        testCase: "is not a string",
        payload: { ...validBasePayload, improvements: 6 },
      },
      {
        fieldName: "Comments",
        testCase: "is missing",
        payload: { ...validBasePayload, comments: undefined },
      },
      {
        fieldName: "Comments",
        testCase: "is not a string",
        payload: { ...validBasePayload, comments: 6 },
      },
    ] as const;

    it.each(remainingFieldScenarios)(
      "should return 400 if \$fieldName \$testCase",
      async ({ fieldName, payload }) => {
        const response = await request(app)
          .post("/api/performance")
          .set("Authorization", `Bearer ${testAdminToken}`)
          .send(payload);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe(`${fieldName} must be a string`);
      },
    );

    it("should return 404 Reviewer profile not found", async () => {
      const response = await request(app)
        .post("/api/performance")
        .set("Authorization", `Bearer ${testAdminToken}`)
        .send(validBasePayload);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Reviewer profile not found");
    });

    it("should return 404 Target employee doesn't exist", async () => {
      const response = await request(app)
        .post("/api/performance")
        .set("Authorization", `Bearer ${testDBAdminToken}`)
        .send({ ...validBasePayload, employeeId: nonExistentId });

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Target Employee doesn't exist");
    });

    const disAllowedUsers = [
      { role: "EMPLOYEE", getToken: () => testDBReviewingEmployeeToken },
      {
        role: "NOT DIRECT MANAGER",
        getToken: () => testDBNotDirectManagerToken,
      },
    ];

    it.each(disAllowedUsers)(
      "should return 403 Forbidden if \$role tries to submit reviews",
      async ({ getToken }) => {
        const response = await request(app)
          .post("/api/performance")
          .set("Authorization", `Bearer ${getToken()}`)
          .send({
            ...validBasePayload,
            employeeId: testDBEmployee?.employee?.id,
          });

        expect(response.status).toBe(403);
        expect(response.body.message).toBe(
          "Forbidden. Only HR Admins or the direct manager can submit reviews.",
        );
      },
    );

    it("should return 400 if a user is trying to review himself", async () => {
      const response = await request(app)
        .post("/api/performance")
        .set("Authorization", `Bearer ${testDBAdminToken}`)
        .send({
          ...validBasePayload,
          employeeId: testDBAdmin?.employee?.id,
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "You cannot submit a performance review for yourself.",
      );
    });

    const existingReviewScenarios = [
      {
        role: "HR_ADMIN",
        getToken: () => testDBAdminToken,
      },
      { role: "DIRECT MANAGER", getToken: () => testDBDirectManagerToken },
    ] as const;

    it.each(existingReviewScenarios)(
      "should return 409 if Review for the employee already exists if been submitted by \$role.",
      async ({ getToken }) => {
        const response = await request(app)
          .post("/api/performance")
          .set("Authorization", `Bearer ${getToken()}`)
          .send({
            ...validBasePayload,
            employeeId: testDBEmployee?.employee?.id,
          });

        expect(response.status).toBe(409);
        expect(response.body.message).toBe(
          "Review for the employee already exists",
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
