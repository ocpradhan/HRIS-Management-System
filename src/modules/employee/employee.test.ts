import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";

describe("Employee Controller Integration Tests", () => {
  let validToken: string;
  let testEmployeeValidToken: string;
  let testEmployee: any;
  let testHR: any;
  let separateEmployee: any;
  let department: any;
  let jobTitle: any;
  let manager: any;

  const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";

  beforeAll(async () => {
    // 1. Seed database once for all attendance tests
    department = await db.department.create({
      data: {
        name: "Test Department",
        description: "This is a test department",
      },
    });

    jobTitle = await db.jobTitle.create({
      data: {
        title: "Test Job Title",
        salaryGrade: "Test Salary Grade",
      },
    });

    manager = await db.user.create({
      data: {
        email: "testManager@test.com",
        password: "managerHashedPassword",
        role: "MANAGER",
        employee: {
          create: {
            firstName: "Test",
            lastName: "Manager",
          },
        },
      },
      include: {
        employee: true,
      },
    });

    testHR = await db.user.create({
      data: {
        email: "testHR@test.com",
        password: "testHRHashedPassword",
        role: "HR_ADMIN",
        employee: {
          create: {
            firstName: "TEST",
            lastName: "HR",
          },
        },
      },
      include: {
        employee: true,
      },
    });

    validToken = jwt.sign(
      {
        userId: testHR?.id,
        role: testHR?.role,
      },
      secret,
      { expiresIn: "1h" },
    );

    testEmployee = await db.user.create({
      data: {
        email: "testEmployee@test.com",
        password: "testEmployeeHashedPassword",
        role: "EMPLOYEE",
        employee: {
          create: {
            firstName: "TEST",
            lastName: "EMPLOYEEE",
            departmentId: department?.id,
            jobTitleId: jobTitle?.id,
            managerId: manager?.employee?.id,
          },
        },
      },
      include: {
        employee: {
          include: {
            department: true,
            jobTitle: true,
            manager: true,
          },
        },
      },
    });

    testEmployeeValidToken = jwt.sign(
      {
        userId: testEmployee.id,
        role: testEmployee.role,
      },
      secret,
      { expiresIn: "1h" },
    );

    separateEmployee = await db.user.create({
      data: {
        email: "separateEmployee@test.com",
        password: "separateEmployeeHashedPassword",
        role: "EMPLOYEE",
        employee: {
          create: {
            firstName: "TEST SEPARATE",
            lastName: "EMPLOYEE",
            departmentId: department?.id,
            jobTitleId: jobTitle?.id,
            managerId: manager?.employee?.id,
          },
        },
      },
      include: {
        employee: true,
      },
    });
  });

  afterAll(async () => {
    // 2. Clean up test database records once
    await db.user.deleteMany({});
    await db.department.deleteMany({});
    await db.jobTitle.deleteMany({});

    await db.$disconnect();
  });

  // ==========================================
  // CONTROLLER 1: getMyProfile
  // ==========================================
  describe("GET /api/employee/me", () => {
    it("should return 404 if the Employee profile record could not be found for this account.", async () => {
      const nonExistingEmployeeToken = jwt.sign(
        {
          userId: "00000000-0000-0000-0000-000000000000",
          role: "EMPLOYEE",
        },
        secret,
        { expiresIn: "1h" },
      );

      const response = await request(app)
        .get("/api/employees/me")
        .set("Authorization", `Bearer ${nonExistingEmployeeToken}`);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe(
        "Employee profile record could not be found for this account.",
      );
    });

    it("should return 200 if the employee profile was found.", async () => {
      const testEmployeeValidToken = jwt.sign(
        {
          userId: testEmployee.id,
          role: testEmployee.role,
        },
        secret,
        { expiresIn: "1h" },
      );

      const response = await request(app)
        .get("/api/employees/me")
        .set("Authorization", `Bearer ${testEmployeeValidToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        id: testEmployee.employee.id,
        firstName: testEmployee.employee.firstName,
        lastName: testEmployee.employee.lastName,
        userId: testEmployee.employee.userId,
        departmentId: testEmployee.employee.departmentId,
        jobTitleId: testEmployee.employee.jobTitleId,
        managerId: testEmployee.employee.managerId,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        user: expect.objectContaining({
          email: testEmployee.email,
          role: testEmployee.role,
        }),
      });
    });
  });

  // ==========================================
  // CONTROLLER 2: updateEmployeeProfile
  // ==========================================
  describe("PATCH /api/employees/:id", () => {
    it("should return 404 if the target employee record not found by the HR or SUPER_ADMIN", async () => {
      const nonExistentId = "00000000-0000-0000-0000-000000000000";

      const response = await request(app)
        .patch(`/api/employees/${nonExistentId}`)
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Target employee record not found.");
    });

    const validPayloadForEmp = {
      firstName: "updatedFirstName",
      lastName: "updatedLastName",
    };

    const nonExistentFieldIdsForHR: Record<string, string> = {
      departmentId: "Department",
      jobTitleId: "Job title",
      managerId: "Manager",
    };

    for (const [field, fieldName] of Object.entries(nonExistentFieldIdsForHR)) {
      it(`should return 404 if the ${fieldName} doesn't exist`, async () => {
        const invalidPayload = {
          ...validPayloadForEmp,
          [field]: "00000000-0000-0000-0000-000000000000",
        };

        const response = await request(app)
          .patch(`/api/employees/${testEmployee?.employee?.id}`)
          .set("Authorization", `Bearer ${validToken}`)
          .send(invalidPayload);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe(
          `Invalid ${field}. ${fieldName} does not exist.`,
        );
      });
    }

    it("should return 403 if you are not an admin or super_admin only authorized to modify your own profile.", async () => {
      const response = await request(app)
        .patch(`/api/employees/${separateEmployee?.employee?.id}`)
        .set("Authorization", `Bearer ${testEmployeeValidToken}`)
        .send({ firstName: "updatedName" });

      expect(response.status).toBe(403);
      expect(response.body.message).toBe(
        "Forbidden. You are only authorized to modify your own profile.",
      );
    });

    const forbiddenFieldsForEmp: Record<string, string> = {
      departmentId: "departments",
      jobTitleId: "job titles",
      managerId: "managers",
      role: "user roles",
    };

    for (const [field, fieldName] of Object.entries(forbiddenFieldsForEmp)) {
      it(`should return 403 if you are not an admin or super_admin and trying to assign a ${fieldName} field`, async () => {
        const invalidPayload = {
          ...validPayloadForEmp,
          [field]: "00000000-0000-0000-0000-000000000000",
        };
        const response = await request(app)
          .patch(`/api/employees/${testEmployee?.employee?.id}`)
          .set("Authorization", `Bearer ${testEmployeeValidToken}`)
          .send(invalidPayload);

        expect(response.status).toBe(403);
        expect(response.body.message).toBe(
          `Forbidden. Only HR Admins can assign ${fieldName}.`,
        );
      });
    }

    const validRoles = ["SUPER_ADMIN", "HR_ADMIN", "MANAGER", "EMPLOYEE"];

    it("should return 400 if the role assigned is invalid.", async () => {
      const invalidRole = "NOT_A_VALID_ROLE";
      const response = await request(app)
        .patch(`/api/employees/${testEmployee?.employee?.id}`)
        .set("Authorization", `Bearer ${validToken}`)
        .send({ role: invalidRole });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        `Invalid role. Allowed values: ${validRoles.join(", ")}`,
      );
    });

    it("should return 400 if an employee tries to assign themselves as their own manager.", async () => {
      const response = await request(app)
        .patch(`/api/employees/${testHR?.employee?.id}`)
        .set("Authorization", `Bearer ${validToken}`)
        .send({ managerId: testHR?.employee?.id });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Self-management error: An employee cannot be their own manager.",
      );
    });

    it("should return 400 if No valid updatable fields provided.", async () => {
      const validTokens: string[] = [validToken, testEmployeeValidToken];

      for (const token of validTokens) {
        const response = await request(app)
          .patch(`/api/employees/${testEmployee?.employee?.id}`)
          .set("Authorization", `Bearer ${token}`)
          .send({});

        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          "No valid updatable fields provided.",
        );
      }
    });

    it("should return 200 if the employee updated his profile", async () => {
      const response = await request(app)
        .patch(`/api/employees/${testEmployee?.employee?.id}`)
        .set("Authorization", `Bearer ${testEmployeeValidToken}`)
        .send(validPayloadForEmp);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe(
        "Employee records and corporate assigments updated successfully.",
      );

      const { firstName, lastName } = validPayloadForEmp;
      const {
        email,
        role,
        employee: {
          id,
          userId,
          departmentId,
          jobTitleId,
          managerId,
          department,
          jobTitle,
          manager,
        } = {},
      } = testEmployee;

      expect(response.body.employee).toMatchObject({
        id: id,
        firstName: firstName,
        lastName: lastName,
        userId: userId,
        departmentId: departmentId,
        jobTitleId: jobTitleId,
        managerId: managerId,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        user: expect.objectContaining({
          email: email,
          role: role,
        }),
        department: expect.objectContaining({
          id: departmentId,
          name: department?.name,
          description: department?.description,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        jobTitle: expect.objectContaining({
          id: jobTitleId,
          title: jobTitle?.title,
          salaryGrade: jobTitle?.salaryGrade,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        manager: expect.objectContaining({
          id: manager?.id,
          firstName: manager?.firstName,
          lastName: manager?.lastName,
        }),
      });

      const updatedDBRecord = await db.employee.findUnique({
        where: { id },
      });

      expect(updatedDBRecord).not.toBeNull();
      expect(updatedDBRecord?.firstName).toBe(firstName);
      expect(updatedDBRecord?.lastName).toBe(lastName);
    });

    it("should return 200 if HR or SUPER_ADMIN updates an employee profile", async () => {
      const validPayload = {
        firstName: "updatedFirstName",
        lastName: "updatedLastName",
        departmentId: department?.id,
        jobTitleId: jobTitle?.id,
        managerId: manager?.employee?.id,
        role: "HR_ADMIN",
      };

      const response = await request(app)
        .patch(`/api/employees/${testEmployee?.employee?.id}`)
        .set("Authorization", `Bearer ${validToken}`)
        .send(validPayload);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe(
        "Employee records and corporate assigments updated successfully.",
      );

      const { firstName, lastName, departmentId, jobTitleId, managerId, role } =
        validPayload;
      const { email, employee: { id, userId } = {} } = testEmployee;

      expect(response.body.employee).toMatchObject({
        id: id,
        firstName: firstName,
        lastName: lastName,
        userId: userId,
        departmentId: departmentId,
        jobTitleId: jobTitleId,
        managerId: managerId,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        user: expect.objectContaining({
          email: email,
          role: role,
        }),
        department: expect.objectContaining({
          id: department?.id,
          name: department?.name,
          description: department?.description,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        jobTitle: expect.objectContaining({
          id: jobTitle?.id,
          title: jobTitle?.title,
          salaryGrade: jobTitle?.salaryGrade,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
        }),
        manager: expect.objectContaining({
          id: manager?.employee.id,
          firstName: manager?.employee?.firstName,
          lastName: manager?.employee?.lastName,
        }),
      });

      const updatedDBRecord = await db.employee.findUnique({
        where: { id },
        include: {
          department: true,
          jobTitle: true,
          manager: true,
          user: true,
        },
      });

      expect(updatedDBRecord).not.toBeNull();
      expect(updatedDBRecord?.firstName).toBe(firstName);
      expect(updatedDBRecord?.lastName).toBe(lastName);
      expect(updatedDBRecord?.departmentId).toBe(departmentId);
      expect(updatedDBRecord?.jobTitleId).toBe(jobTitleId);
      expect(updatedDBRecord?.managerId).toBe(managerId);
      expect(updatedDBRecord?.department?.name).toBe(department?.name);
      expect(updatedDBRecord?.jobTitle?.title).toBe(jobTitle?.title);
      expect(updatedDBRecord?.manager?.firstName).toBe(
        manager?.employee?.firstName,
      );
      expect(updatedDBRecord?.user?.role).toBe(role);
    });
  });

  // ==========================================
  // CONTROLLER 3: getAllEmployees
  // ==========================================
  describe("GET /api/employees", () => {
    it("should return 403 if an employee is not super_admin or hr_admin and trying to retrieve the employees.", async () => {
      const response = await request(app)
        .get(`/api/employees`)
        .set("Authorization", `Bearer ${testEmployeeValidToken}`);

      expect(response.status).toBe(403);
      expect(response.body.message).toBe(
        "Forbidden. You do not have permission to perform this action.",
      );
    });

    const testCasesForFilter = [
      {
        name: "only a search term is provided",
        getQuery: () => ({ search: "updated" }),
        validate: (emp: any) =>
          expect(emp.firstName.toUpperCase()).toContain("UPDATED"),
      },
      {
        name: "only a departmentId filter is provided",
        getQuery: () => ({ departmentId: department?.id }),
        validate: (emp: any) => expect(emp.departmentId).toBe(department?.id),
      },
      {
        name: "only a jobTitleId filter in provided",
        getQuery: () => ({ jobTitleId: jobTitle?.id }),
        validate: (emp: any) => expect(emp.jobTitleId).toBe(jobTitle?.id),
      },
      {
        name: "only a role filter is provided",
        getQuery: () => ({ role: "EMPLOYEE" }),
        validate: (emp: any) => expect(emp.user.role).toBe("EMPLOYEE"),
      },
    ];

    testCasesForFilter.forEach(({ name, getQuery, validate }) => {
      it(`should return 200 and filter records correctly when ${name}`, async () => {
        const response = await request(app)
          .get("/api/employees")
          .query(getQuery())
          .set("Authorization", `Bearer ${validToken}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe("Employees retrieved successfully");

        expect(response.body.meta).toMatchObject({
          totalItems: expect.any(Number),
          totalPages: expect.any(Number),
          currentPage: expect.any(Number),
          itemsPerPage: expect.any(Number),
          hasNextPage: expect.any(Boolean),
          hasPrevPage: expect.any(Boolean),
        });

        expect(response.body.employees).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              firstName: expect.any(String),
              lastName: expect.any(String),
              userId: expect.any(String),
              departmentId: expect.any(String),
              jobTitleId: expect.any(String),
              managerId: expect.any(String),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              user: expect.objectContaining({
                email: expect.any(String),
                role: expect.any(String),
              }),
              department: expect.objectContaining({
                id: expect.any(String),
                name: expect.any(String),
              }),
              jobTitle: expect.objectContaining({
                id: expect.any(String),
                title: expect.any(String),
              }),
              manager: expect.objectContaining({
                id: expect.any(String),
                firstName: expect.any(String),
                lastName: expect.any(String),
              }),
            }),
          ]),
        );

        response.body.employees.forEach((emp: any) => {
          validate(emp);
        });
      });
    });

    it("should return 200 and filter employee rows by search criteria, department keys, and job title keys", async () => {
      const query = {
        search: "Test",
        departmentId: department?.id,
        jobTitleId: jobTitle?.id,
        role: testEmployee?.role,
      };

      const response = await request(app)
        .get("/api/employees")
        .query(query)
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Employees retrieved successfully");

      expect(response.body.meta).toMatchObject({
        totalItems: expect.any(Number),
        totalPages: expect.any(Number),
        currentPage: expect.any(Number),
        itemsPerPage: expect.any(Number),
        hasNextPage: expect.any(Boolean),
        hasPrevPage: expect.any(Boolean),
      });

      expect(response.body.employees).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
            userId: expect.any(String),
            departmentId: expect.any(String),
            jobTitleId: expect.any(String),
            managerId: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            user: expect.objectContaining({
              email: expect.any(String),
              role: expect.any(String),
            }),
            department: expect.objectContaining({
              id: department?.id,
              name: department?.name,
            }),
            jobTitle: expect.objectContaining({
              id: jobTitle?.id,
              title: jobTitle?.title,
            }),
            manager: expect.objectContaining({
              id: manager?.employee?.id,
              firstName: manager?.employee?.firstName,
              lastName: manager?.employee?.lastName,
            }),
          }),
        ]),
      );

      response.body.employees.forEach((emp: any) => {
        expect(emp.firstName.toUpperCase()).toContain("TEST");
        expect(emp.departmentId).toBe(department?.id);
        expect(emp.jobTitleId).toBe(jobTitle?.id);
        expect(emp.user.role).toBe("EMPLOYEE");
      });
    });

    it("should return 200 and retrieve employees records successfully if there are no query params", async () => {
      const response = await request(app)
        .get("/api/employees")
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Employees retrieved successfully");

      expect(response.body.meta).toMatchObject({
        totalItems: expect.any(Number),
        totalPages: expect.any(Number),
        currentPage: expect.any(Number),
        itemsPerPage: expect.any(Number),
        hasNextPage: expect.any(Boolean),
        hasPrevPage: expect.any(Boolean),
      });

      expect(response.body.employees).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
            userId: expect.any(String),
            departmentId: expect.any(String),
            jobTitleId: expect.any(String),
            managerId: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            user: expect.objectContaining({
              email: expect.any(String),
              role: expect.any(String),
            }),
            department: expect.objectContaining({
              id: department?.id,
              name: department?.name,
            }),
            jobTitle: expect.objectContaining({
              id: jobTitle?.id,
              title: jobTitle?.title,
            }),
            manager: expect.objectContaining({
              id: manager?.employee?.id,
              firstName: manager?.employee?.firstName,
              lastName: manager?.employee?.lastName,
            }),
          }),
        ]),
      );
    });

    it("should return 200 and slice records accurately across custom pagination limits and pages", async () => {
      const response = await request(app)
        .get("/api/employees")
        .query({ page: 2, limit: 1 })
        .set("Authorization", `Bearer ${validToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe("Employees retrieved successfully");

      expect(response.body.meta).toMatchObject({
        totalItems: 4,
        totalPages: 4,
        currentPage: 2,
        itemsPerPage: 1,
        hasNextPage: true,
        hasPrevPage: true,
      });

      expect(response.body.employees.length).toBe(1);

      expect(response.body.employees).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
            userId: expect.any(String),
            departmentId: expect.any(String),
            jobTitleId: expect.any(String),
            managerId: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            user: expect.objectContaining({
              email: expect.any(String),
              role: expect.any(String),
            }),
            department: expect.objectContaining({
              id: department?.id,
              name: department?.name,
            }),
            jobTitle: expect.objectContaining({
              id: jobTitle?.id,
              title: jobTitle?.title,
            }),
            manager: expect.objectContaining({
              id: manager?.employee?.id,
              firstName: manager?.employee?.firstName,
              lastName: manager?.employee?.lastName,
            }),
          }),
        ]),
      );
    });
  });
});
