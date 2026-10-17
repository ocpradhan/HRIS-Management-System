import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";

describe("Job Title Controller Integration Tests", () => {
  let employeetoken: string;
  let managerToken: string;
  let adminToken: string;
  let superAdminToken: string;
  let existingJobTitle: any;
  let anotherExistingJobTitle: any;
  const nonExistentId: string = "00000000-0000-0000-0000-000000000000";

  const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";

  beforeAll(async () => {
    await db.jobTitle.deleteMany({});
    await db.user.deleteMany({});

    // 1. Seed database once for all tests
    adminToken = jwt.sign(
      {
        userId: "mock-admin-id",
        role: "HR_ADMIN",
      },
      secret,
      { expiresIn: "1h" },
    );

    superAdminToken = jwt.sign(
      {
        userId: "mock-super-admin-id",
        role: "SUPER_ADMIN",
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

    managerToken = jwt.sign(
      { userId: "mock-manager-id", role: "MANAGER" },
      secret,
      { expiresIn: "1h" },
    );

    existingJobTitle = await db.jobTitle.create({
      data: {
        title: "Existing Job Title",
        salaryGrade: "Existing Job Title Salary Grade",
      },
    });
    anotherExistingJobTitle = await db.jobTitle.create({
      data: {
        title: "Another Existing Job Title",
        salaryGrade: "Another Existing Job Title Salary Grade",
      },
    });
  });

  afterAll(async () => {
    // 2. Clean up test database records once
    await db.jobTitle.deleteMany({});
    await db.user.deleteMany({});

    await db.$disconnect();
  });

  // ==========================================
  // CONTROLLER 1: getAllJobTitles
  // ==========================================
  describe("GET /api/jobtitle", () => {});

  // ==========================================
  // CONTROLLER 2: createJobTitle
  // ==========================================
  describe("POST /api/jobtitle", () => {
    const forbiddenScenarios = [
      { role: "EMPLOYEE", getToken: () => employeetoken },
      { role: "MANAGER", getToken: () => managerToken },
    ] as const;

    it.each(forbiddenScenarios)(
      "should return 403 if \$role is trying to create a job title",
      async ({ role, getToken }) => {
        const response = await request(app)
          .post("/api/job-titles")
          .set("Authorization", `Bearer ${getToken()}`)
          .send({ title: `testTitle by ${role}` });

        expect(response.status).toBe(403);
        expect(response.body.message).toBe(
          "Forbidden. You do not have permission to perform this action.",
        );
      },
    );

    const allowedScenarios = [
      {
        role: "HR_ADMIN",
        description: "both title and salary grade are sent",
        payload: {
          title: "Test Job Title Full HR",
          salaryGrade: "Test salary grade",
        },
        getToken: () => adminToken,
      },
      {
        role: "SUPER_ADMIN",
        description: "both title and salary grade are sent",
        payload: {
          title: "Test Job Title Full Super",
          salaryGrade: "Test salary grade",
        },
        getToken: () => superAdminToken,
      },
      {
        role: "HR_ADMIN",
        description: "only the mandatory job title is sent",
        payload: { title: "Test Job Title Half HR" },
        getToken: () => adminToken,
      },
    ] as const;

    it.each(allowedScenarios)(
      "should return 201 Created when \$description by a \$role",
      async ({ payload, getToken }) => {
        const response = await request(app)
          .post("/api/job-titles")
          .set("Authorization", `Bearer ${getToken()}`)
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

        const savedJobTitle = await db.jobTitle.findUnique({
          where: { title: payload.title },
        });

        expect(savedJobTitle).not.toBeNull();
        expect(savedJobTitle?.title).toBe(payload.title);
        expect(savedJobTitle?.salaryGrade).toBe(
          "salaryGrade" in payload ? payload.salaryGrade : null,
        );
      },
    );

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

  // ==========================================
  // CONTROLLER 3: updateJobTitle
  // ==========================================
  describe("PATCH /api/job-titles/:id", () => {
    it("should return 404 if the Target Job title record not found", async () => {
      const response = await request(app)
        .patch(`/api/job-titles/${nonExistentId}`)
        .set("Authorization", `Bearer ${adminToken}`)
        .send({
          title: "updating-job-title",
        });

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Target job title record not found");
    });

    it("should return 409 if another position already uses this job title", async () => {
      const response = await request(app)
        .patch(`/api/job-titles/${existingJobTitle?.id}`)
        .set("Authorization", `Bearer ${adminToken}`)
        .send({ title: anotherExistingJobTitle?.title });

      expect(response.status).toBe(409);
      expect(response.body.message).toBe(
        "Another position already uses this job title.",
      );
    });

    const forbiddenScenarios = [
      { role: "EMPLOYEE", getToken: () => employeetoken },
      { role: "MANAGER", getToken: () => managerToken },
    ] as const;

    it.each(forbiddenScenarios)(
      "should return 403 if \$role is trying to update a job title",
      async ({ role, getToken }) => {
        const response = await request(app)
          .patch(`/api/job-titles/${existingJobTitle?.id}`)
          .set("Authorization", `Bearer ${getToken()}`)
          .send({ title: `test-title update by ${role}` });

        expect(response.status).toBe(403);
        expect(response.body.message).toBe(
          "Forbidden. You do not have permission to perform this action.",
        );
      },
    );

    const allowedScenarios = [
      {
        role: "HR_ADMIN",
        test: "both salary grade and title",
        payload: {
          title: "updating test title by hr",
          salaryGrade: "updating salary grade by hr",
        },
        getToken: () => adminToken,
      },
      {
        role: "SUPER_ADMIN",
        test: "both salary grade and title",
        payload: {
          title: "updating test title by super_admin",
          salaryGrade: "updating salary grade by super_admin",
        },
        getToken: () => superAdminToken,
      },
      {
        role: "HR_ADMIN",
        test: "only salary grade",
        payload: { salaryGrade: "updating only salary grade" },
        getToken: () => adminToken,
      },
      {
        role: "HR_ADMIN",
        test: "only title",
        payload: { title: "updating only job title" },
        getToken: () => adminToken,
      },
    ];

    it.each(allowedScenarios)(
      "should return 200 if \$role is trying to update \$test",
      async ({ payload, getToken }) => {
        const currentDbState = await db.jobTitle.findUnique({
          where: { id: existingJobTitle?.id },
        });

        const response = await request(app)
          .patch(`/api/job-titles/${existingJobTitle?.id}`)
          .set("Authorization", `Bearer ${getToken()}`)
          .send(payload);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Job title updated successfully.");

        expect(response.body.jobTitle).toMatchObject({
          id: currentDbState?.id,
          title: "title" in payload ? payload.title : currentDbState?.title,
          salaryGrade:
            "salaryGrade" in payload
              ? payload.salaryGrade
              : currentDbState?.salaryGrade,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        });

        const updatedJobTitle = await db.jobTitle.findUnique({
          where: { id: existingJobTitle?.id },
        });

        expect(updatedJobTitle).not.toBeNull();
        expect(updatedJobTitle?.title).toBe(
          "title" in payload ? payload.title : currentDbState?.title,
        );
        expect(updatedJobTitle?.salaryGrade).toBe(
          "salaryGrade" in payload
            ? payload.salaryGrade
            : currentDbState?.salaryGrade,
        );
      },
    );
  });

  // ==========================================
  // CONTROLLER 4: deleteJobTitle
  // ==========================================
  describe("DELETE /api/job-titles/:id", () => {
    afterEach(async () => {
      await db.user.deleteMany({
        where: {
          email: { contains: "linkedEmployee@test.com" },
        },
      });
    });

    it("should return 404 Target job title record not found", async () => {
      const response = await request(app)
        .delete(`/api/job-titles/${nonExistentId}`)
        .set("Authorization", `Bearer ${adminToken}`);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Target job title record not found.");
    });

    const forbiddenScenarios = [
      {
        role: "EMPLOYEE",
        getToken: () => employeetoken,
      },
      {
        role: "MANAGER",
        getToken: () => managerToken,
      },
    ] as const;

    it.each(forbiddenScenarios)(
      "should return 403 if a \$role is trying to delete a job title.",
      async ({ getToken, role }) => {
        const tempJobTitle = await db.jobTitle.create({
          data: {
            title: `${role}Temporary Title For Auth Check`,
            salaryGrade: "Grade",
          },
        });

        const response = await request(app)
          .delete(`/api/job-titles/${tempJobTitle.id}`)
          .set("Authorization", `Bearer ${getToken()}`);

        expect(response.status).toBe(403);
        expect(response.body.message).toBe(
          "Forbidden. You do not have permission to perform this action.",
        );
      },
    );

    const allowedScenarios = [
      {
        role: "HR_ADMIN",
        getToken: () => adminToken,
      },
      {
        role: "SUPER_ADMIN",
        getToken: () => superAdminToken,
      },
    ];

    it.each(allowedScenarios)(
      "should return 200 if the \$role deleted the record and the job title must not exist and associated employee fields must be unlinked.",
      async ({ getToken, role }) => {
        const freshJobTitle = await db.jobTitle.create({
          data: {
            title: `Delete Target for ${role}`,
            salaryGrade: "Fresh Grade",
          },
        });

        const employee = await db.user.create({
          data: {
            email: `${role}linkedEmployee@test.com`,
            password: "hashedPassword",
            role: "EMPLOYEE",
            employee: {
              create: {
                firstName: `${role}linked`,
                lastName: "Employee",
                jobTitleId: freshJobTitle?.id,
              },
            },
          },
          include: {
            employee: true,
          },
        });

        const response = await request(app)
          .delete(`/api/job-titles/${freshJobTitle.id}`)
          .set("Authorization", `Bearer ${getToken()}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe(
          "Job title successfully purged. Associated employee fields unlinked.",
        );

        const deletedJobTitle = await db.jobTitle.findUnique({
          where: { id: freshJobTitle.id },
        });
        expect(deletedJobTitle).toBeNull();

        const updatedEmployee = await db.employee.findUnique({
          where: { id: employee.employee?.id },
        });
        expect(updatedEmployee?.jobTitleId).toBeNull();
      },
    );
  });
});
