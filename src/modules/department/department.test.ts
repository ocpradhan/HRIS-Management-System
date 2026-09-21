import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";

describe("Department Controller Integration Tests", () => {
  let validToken: string;
  let existingDept: any;
  let updatingDeptWithExistingName: any;
  let createdDeptIds: string[] = [];

  const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";

  beforeAll(async () => {
    await db.department.deleteMany({});
    await db.user.deleteMany({});
    // 1. Seed database once for all attendace tests
    validToken = jwt.sign(
      {
        userId: "mock-user-id",
        role: "HR_ADMIN",
      },
      secret,
      { expiresIn: "1h" },
    );

    existingDept = await db.department.create({
      data: {
        name: "Existing Department",
        description: "This is the Existing Department description",
      },
    });

    updatingDeptWithExistingName = await db.department.create({
      data: {
        name: "Same name",
        description:
          "This is the Existing Department is trying to change his name with another existing department.",
      },
    });

    createdDeptIds.push(existingDept.id);
    createdDeptIds.push(updatingDeptWithExistingName.id);
  });

  afterAll(async () => {
    // 2. Clean up test database records once
    if (createdDeptIds.length > 0) {
      await db.department.deleteMany({
        where: { id: { in: createdDeptIds } },
      });
    }

    await db.$disconnect();
  });

  // ==========================================
  // CONTROLLER 1: createDepartment
  // ==========================================
  describe("POST /api/departments/", () => {
    const badNamePayloads = [
      {
        label: "empty string",
        payload: { name: "", description: "This is description" },
      },
      {
        label: "missing entirely",
        payload: { description: "This is description" },
      },
    ];

    const validDepartmentPayload = {
      name: "New Department",
      description: "This is the New Department description.",
    };

    badNamePayloads.forEach(({ label, payload }) => {
      it(`should return 400 if the name field is ${label}`, async () => {
        const response = await request(app)
          .post("/api/departments")
          .send(payload)
          .set("Authorization", `Bearer ${validToken}`);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          "Department name is a mandatory string property.",
        );
      });
    });

    it("should return 409 if the department already exists", async () => {
      const invalidDepartmentPayload = {
        ...validDepartmentPayload,
        name: existingDept.name,
      };

      const response = await request(app)
        .post("/api/departments")
        .send(invalidDepartmentPayload)
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(409);
      expect(response.body.message).toBe(
        "A department with this name already exists.",
      );
    });

    it("should return 201 if new department is created successfully.", async () => {
      const response = await request(app)
        .post("/api/departments")
        .send(validDepartmentPayload)
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(201);
      expect(response.body.message).toBe(
        "Department provisioned successfully.",
      );

      expect(response.body.department).toMatchObject({
        id: expect.any(String),
        name: validDepartmentPayload.name,
        description: validDepartmentPayload.description,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      });
    });
  });

  // ==========================================
  // CONTROLLER 2: getAllDepartments
  // ==========================================
  describe("GET /api/department/", () => {
    it("should return 200 and give the list of all departments", async () => {
      const response = await request(app)
        .get("/api/departments")
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            name: expect.any(String),
            description: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            _count: expect.objectContaining({
              employees: expect.any(Number),
            }),
          }),
        ]),
      );
    });
  });

  // ==========================================
  // CONTROLLER 3: updateDepartment
  // ==========================================
  describe("PATCH /api/department/:id", () => {
    it("should return 404 if the record isn't found", async () => {
      const validDepartmentPayload = {
        name: "Updating Department",
        description: "This is the Updated Department description.",
      };
      const nonExistentId = "00000000-0000-0000-0000-000000000000";

      const response = await request(app)
        .patch(`/api/departments/${nonExistentId}`)
        .send(validDepartmentPayload)
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Target department record not found.");
    });

    it("should return 409 if a trying to hijack another department's name", async () => {
      const invalidDepartmentPayload = {
        name: existingDept.name,
        description: "This is the Updated Department description.",
      };

      const response = await request(app)
        .patch(`/api/departments/${updatingDeptWithExistingName.id}`)
        .send(invalidDepartmentPayload)
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(409);
      expect(response.body.message).toBe(
        "Another department already uses this name.",
      );
    });

    it("should return 200 if a department is keeping its own name but modifying the description.", async () => {
      const validDepartmentPayload = {
        name: updatingDeptWithExistingName.name,
        description: "I am just changing the description.",
      };

      const response = await request(app)
        .patch(`/api/departments/${updatingDeptWithExistingName.id}`)
        .send(validDepartmentPayload)
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Department updated successfully.");
      expect(response.body.department).toMatchObject({
        id: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      });
    });
  });

  // ==========================================
  // CONTROLLER 4: deleteDepartment
  // ==========================================
  describe("DELETE /api/department/:id", () => {
    it("should return 404 if the target department record was not found", async () => {
      const nonExistentId = "00000000-0000-0000-0000-000000000000";

      const response = await request(app)
        .delete(`/api/departments/${nonExistentId}`)
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Target department record not found.");
    });

    it("should return 200 if Department completely deleted. Associated employee paths unlinked.", async () => {
      const testDept = await db.department.create({
        data: {
          name: "Test Department",
          description: "This is a test department",
        },
      });

      const employee = await db.user.create({
        data: {
          email: "linkedEmployee@test.com",
          password: "hashedPassword",
          role: "EMPLOYEE",
          employee: {
            create: {
              firstName: "linked",
              lastName: "Employee",
              departmentId: testDept.id,
            },
          },
        },
        include: {
          employee: true,
        },
      });

      const response = await request(app)
        .delete(`/api/departments/${testDept.id}`)
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe(
        "Department completely deleted. Associated employee paths unlinked.",
      );

      const deletedDept = await db.department.findUnique({
        where: { id: testDept.id },
      });
      expect(deletedDept).toBeNull();

      const updatedEmployee = await db.employee.findUnique({
        where: { id: employee.employee?.id },
      });
      expect(updatedEmployee?.departmentId).toBeNull();
    });
  });
});
