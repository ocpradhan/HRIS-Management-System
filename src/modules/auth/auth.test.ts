import request from "supertest";
import app from "../../app.js";
import { db } from "../../config/db.js";
import bcrypt from "bcryptjs";

describe("Auth Controller Integration Tests", () => {
  /* 
    Shared Test State & Credentials
  */
  let existingUser: any;
  const plainTextPassword: string = "hashedPassword";
  let createdUserIds: string[] = [];

  beforeAll(async () => {
    const hashedPassword = await bcrypt.hash(plainTextPassword, 10);

    // 1. Seed database once for all auth tests
    existingUser = await db.user.create({
      data: {
        email: "oc@gmail.com",
        password: hashedPassword,
        role: "EMPLOYEE",
        employee: {
          create: {
            firstName: "Onesimus",
            lastName: "Pradhan",
          },
        },
      },
      include: { employee: true },
    });

    createdUserIds.push(existingUser.id);
  });

  afterAll(async () => {
    // 2. Clean up test database records once
    if (createdUserIds.length > 0) {
      await db.user.deleteMany({
        where: { id: { in: createdUserIds } },
      });
    }

    await db.$disconnect();
  });

  // ==========================================
  // CONTROLLER 1: register
  // ==========================================
  describe("POST /api/auth/register", () => {
    const validPayload = {
      email: "valid@valid.com",
      password: "testpassword",
      firstName: "testName",
      lastName: "testLastName",
      role: "EMPLOYEE",
    };

    const requiredFields = [
      "email",
      "password",
      "firstName",
      "lastName",
    ] as const;

    requiredFields.forEach((field) => {
      it(`should return 400 if ${field} field is an empty string.`, async () => {
        const invalidPayload = { ...validPayload, [field]: "" };
        const response = await request(app)
          .post("/api/auth/register")
          .send(invalidPayload);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          "Missing required account configuration values.",
        );
      });
    });

    requiredFields.forEach((field) => {
      it(`should return 400 if ${field} field is missing entirely.`, async () => {
        const invalidPayload = { ...validPayload };
        delete invalidPayload[field];
        const response = await request(app)
          .post("/api/auth/register")
          .send(invalidPayload);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          "Missing required account configuration values.",
        );
      });
    });

    it(`should return 400 if the role is invalid`, async () => {
      const invalidRolePayload = {
        ...validPayload,
        email: existingUser?.email,
        role: "NOT_A_VALID_PRISMA_ROLE",
      };

      const response = await request(app)
        .post("/api/auth/register")
        .send(invalidRolePayload);

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Invalid role");
    });

    it("should return 409 if an account with the email address already exists.", async () => {
      const response = await request(app).post("/api/auth/register").send({
        email: existingUser?.email,
        password: "testpassword",
        firstName: "testName",
        lastName: "testLastName",
        role: "EMPLOYEE",
      });
      expect(response.status).toBe(409);
      expect(response.body.message).toBe(
        "An account with this email address already exists.",
      );
    });

    it("should return 201 that a new account has been created successfully.", async () => {
      const newUser = {
        email: "newEmail@example.com",
        password: "testpassword",
        firstName: "testName",
        lastName: "testLastName",
        role: "EMPLOYEE",
      };
      const response = await request(app)
        .post("/api/auth/register")
        .send(newUser);

      if (response.body?.user?.id) {
        createdUserIds.push(response.body.user.id);
      }

      expect(response.status).toBe(201);
      expect(response.body.message).toBe(
        "User and Employee profiles provisioned successfully.",
      );

      expect(response.body.user).toMatchObject({
        id: expect.any(String),
        role: expect.any(String),
        createdAt: expect.any(String),
        employee: {
          id: expect.any(String),
          firstName: expect.any(String),
          lastName: expect.any(String),
          userId: expect.any(String),
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          departmentId: null,
          jobTitleId: null,
          managerId: null,
        },
      });
    });
  });

  // ==========================================
  // CONTROLLER 2: login
  // ==========================================
  describe("POST /api/auth/login", () => {
    const validPayload = {
      email: "valid@example.com",
      password: "validPassword",
    };

    const requiredFields = ["email", "password"] as const;

    requiredFields.forEach((field) => {
      it(`should return 400 if the ${field} field is empty string.`, async () => {
        const invalidPayload = { ...validPayload, [field]: "" };
        const response = await request(app)
          .post("/api/auth/login")
          .send(invalidPayload);
        // 1. Check if email and password are not provided and, check the error thrown because of this.
        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          "Email and password are mandatory properties.",
        );
      });
    });

    requiredFields.forEach((field) => {
      it(`should return 400 if the ${field} field is missing entirely.`, async () => {
        const invalidPayload = { ...validPayload };
        delete invalidPayload[field];
        const response = await request(app)
          .post("/api/auth/login")
          .send(invalidPayload);
        // 1. Check if email and password are not provided and, check the error thrown because of this.
        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          "Email and password are mandatory properties.",
        );
      });
    });

    // 2. Locate the feeded the user is on the database or not
    it("should return 401 if the user doesn't exist", async () => {
      const invalidPayload = {
        email: "this_email_does_not_exist@example.com",
        password: "WRONG_PASSWORD",
      };

      const response = await request(app)
        .post("/api/auth/login")
        .send(invalidPayload);

      expect(response.status).toBe(401);
      expect(response.body.message).toBe(
        "Invalid authentication credentials provided.",
      );
    });

    it("should return 401 if the password is wrong.", async () => {
      const invalidPayloadPassword = {
        email: existingUser?.email,
        password: "WRONG_PASSWORD",
      };

      const response = await request(app)
        .post("/api/auth/login")
        .send(invalidPayloadPassword);

      expect(response.status).toBe(401);
      expect(response.body.message).toBe(
        "Invalid authentication credentials provided.",
      );
    });

    it("should return 200 if authentication verification passed successfully.", async () => {
      const validUser = {
        email: existingUser?.email,
        password: plainTextPassword,
      };

      const response = await request(app)
        .post("/api/auth/login")
        .send(validUser);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe(
        "Authentication verification passed successfully",
      );

      expect(response.body.token).not.toBeNull();
      expect(response.body.user).toMatchObject({
        id: expect.any(String),
        email: expect.any(String),
        role: expect.any(String),
      });
    });
  });
});
