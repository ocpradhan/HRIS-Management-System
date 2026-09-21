import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";

describe("Job Title Controller Integration Tests", () => {
  let employeetoken: string;
  let adminToken: string;
  let existingJobTitle: any;
  let orphanUserToken: string;

  let testUser: any;
  let testEmployee: any;

  const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";

  beforeAll(async () => {
    // 1. Seed database once for all tests
    adminToken = jwt.sign(
      {
        userId: "mock-admin-id",
        role: "HR_ADMIN",
      },
      secret,
      { expiresIn: "1h" },
    );

    employeetoken = jwt.sign(
      {
        userId: "mock-employee-id",
        role: "EMPLOYEE",
      },
      secret,
      { expiresIn: "1h" },
    );

    existingJobTitle = await db.jobTitle.create({
      data: {
        title: "Existing Job Title",
        salaryGrade: "Existing Job Title Salary Grade",
      },
    });
  });

  afterAll(async () => {
    // 2. Clean up test database records once
    await db.jobTitle.deleteMany({});

    await db.$disconnect();
  });

  // ==========================================
  // CONTROLLER 1: getAllJobTitles
  // ==========================================
  describe("GET /api/jobtitle", () => {});

  // ==========================================
  // CONTROLLER 2: createJobTitle
  // ==========================================
  describe("GET /api/jobtitle", () => {
    it("should return 403 if an employee tries to add a job title", async () => {
      const response = await request(app)
        .post("/api/job-titles")
        .set("Authorization", `Bearer ${employeetoken}`)
        .send({ title: "testTitle" });
    });

    it("should return 400 if the Job Title is not sent in the payload", async () => {
      const response = await request(app)
        .post("/api/job-titles")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({ salaryGrade: "test-salary-grade" });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Job title is mandatory string property.",
      );
    });

    const testScenariosCreate = [
      {
        testCase:
          "should return 201 if both job title and salary Grade is sent in the payload",
        payload: { title: "Test Job Title", salaryGrade: "Test salary grade" },
      },
      {
        testCase: "should return 201 if only job title is sent in the payload",
        payload: { title: "Test Job Title 2" },
      },
    ];

    testScenariosCreate.forEach(({ testCase, payload }) => {
      it(testCase, async () => {
        const response = await request(app)
          .post("/api/job-titles")
          .set("Authorization", `Bearer ${adminToken}`)
          .send(payload);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Job title registered successfully");

        expect(response.body.jobtitle).toMatchObject({
          id: expect.any(String),
          title: payload.title,
          salaryGrade: "salaryGrade" in payload ? payload.salaryGrade : null,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        });
      });
    });

    it("should return 409 if the job title already exists", async () => {
      const response = await request(app)
        .post("/api/job-titles")
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          title: existingJobTitle?.title,
          salaryGrade: existingJobTitle?.salaryGrade,
        });

      expect(response.status).toBe(409);
      expect(response.body.message).toBe(
        "A job title with this designation already exists.",
      );
    });
  });

  // // ==========================================
  // // CONTROLLER 3: updateJobTitle
  // // ==========================================
  // describe("PATCH /api/jobtitle/:id", () => {});

  // // ==========================================
  // // CONTROLLER 4: deleteJobTitle
  // // ==========================================
  // describe("DELETE /api/jobtitle/:id", () => {});
});
