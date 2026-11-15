import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../../app.js";
import { db } from "../../config/db.js";
import { query } from "express";

describe("Leave Controller Integration Tests", () => {
  let testAdmin: any;
  let testEmployee: any;
  let testDirectManager: any;
  let testNotDirectManager: any;

  let testEmployeeToken: string;
  let nonEmployeeToken: string;
  let testAdminToken: string;
  let testDirectManagerToken: string;
  let testNotDirectManagerToken: string;
  let nonReviewerToken: string;

  let existingPendingLeaveRequest: any;
  let existingApprovedLeaveRequest: any;
  let existingRejectedLeaveRequest: any;

  const nonExistentId: string = "00000000-0000-0000-0000-000000000000";

  const secret = process.env.JWT_SECRET || "test_super_secret_jwt_key_123";

  beforeAll(async () => {
    testAdmin = await db.user.create({
      data: {
        email: "testAdmin@test.com",
        password: "testAdmin",
        role: "HR_ADMIN",
        employee: {
          create: {
            firstName: "Test",
            lastName: "Admin",
          },
        },
      },
      include: {
        employee: true,
      },
    });

    testDirectManager = await db.user.create({
      data: {
        email: "testDirectManager@test.com",
        password: "testDirectManager",
        role: "MANAGER",
        employee: {
          create: {
            firstName: "Test",
            lastName: "Direct Manager",
          },
        },
      },
      include: {
        employee: true,
      },
    });

    testNotDirectManager = await db.user.create({
      data: {
        email: "testNotDirectManager@test.com",
        password: "testNotDirectManager",
        role: "MANAGER",
        employee: {
          create: {
            firstName: "Test",
            lastName: "Not Direct Manager",
          },
        },
      },
      include: {
        employee: true,
      },
    });

    testEmployee = await db.user.create({
      data: {
        email: "testEmployee@test.com",
        password: "testEmployeePassword",
        role: "EMPLOYEE",
        employee: {
          create: {
            firstName: "Test",
            lastName: "Employee",
            manager: {
              connect: { id: testDirectManager?.employee?.id },
            },
          },
        },
      },
      include: {
        employee: true,
      },
    });

    nonEmployeeToken = jwt.sign(
      { userId: "mock-employee-id", role: "EMPLOYEE" },
      secret,
      { expiresIn: "1h" },
    );

    testAdminToken = jwt.sign(
      { userId: testAdmin?.id, role: testAdmin?.role },
      secret,
      { expiresIn: "1h" },
    );

    testEmployeeToken = jwt.sign(
      {
        userId: testEmployee?.id,
        role: testEmployee?.role,
      },
      secret,
      {
        expiresIn: "1h",
      },
    );

    testDirectManagerToken = jwt.sign(
      {
        userId: testDirectManager?.id,
        role: testDirectManager?.role,
      },
      secret,
      { expiresIn: "1h" },
    );

    testNotDirectManagerToken = jwt.sign(
      {
        userId: testNotDirectManager?.id,
        role: testNotDirectManager?.role,
      },
      secret,
      { expiresIn: "1h" },
    );

    nonReviewerToken = jwt.sign(
      {
        userId: "mock-non-reviwer-id",
        role: "MANAGER",
      },
      secret,
      { expiresIn: "1h" },
    );
  });

  beforeEach(async () => {
    await db.leaveRequest.deleteMany({});

    existingPendingLeaveRequest = await db.leaveRequest.create({
      data: {
        employeeId: testEmployee?.employee?.id,
        leaveType: "SICK",
        startDate: new Date("2026-11-10"),
        endDate: new Date("2026-11-12"),
        reason: "This is testing Reason",
        status: "PENDING",
      },
    });

    existingApprovedLeaveRequest = await db.leaveRequest.create({
      data: {
        employeeId: testEmployee?.employee?.id,
        leaveType: "SICK",
        startDate: new Date("2026-11-10"),
        endDate: new Date("2026-11-12"),
        reason: "This is testing Reason",
        status: "APPROVED",
        reviewNote: "Enjoy Testing",
        reviewedById: testAdmin?.employee?.id,
      },
    });

    existingRejectedLeaveRequest = await db.leaveRequest.create({
      data: {
        employeeId: testEmployee?.employee?.id,
        leaveType: "SICK",
        startDate: new Date("2026-11-10"),
        endDate: new Date("2026-11-12"),
        reason: "This is testing Reason",
        status: "REJECTED",
        reviewNote: "Sorry you have to do Testing",
        reviewedById: testAdmin?.employee?.id,
      },
    });
  });

  afterAll(async () => {
    await db.leaveRequest.deleteMany({});
    await db.user.deleteMany({});

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

    const validBasePayload = {
      startDate: "2026-08-01",
      endDate: "2026-08-05",
    };

    const payloadScenarios = [
      {
        testCase: "startDate",
        payload: { ...validBasePayload, startDate: "not-a-date" },
      },
      {
        testCase: "endDate",
        payload: { ...validBasePayload, endDate: "not-a-date" },
      },
    ];

    it.each(payloadScenarios)(
      "should return 400 if Invalid \$testCase format.",
      async ({ payload }) => {
        const response = await request(app)
          .post("/api/leave")
          .set("Authorization", `Bearer ${testEmployeeToken}`)
          .send(payload);

        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          "Invalid startDate or endDate format.",
        );
      },
    );

    it("should return 400 startDate cannot be after endDate", async () => {
      const response = await request(app)
        .post("/api/leave")
        .set("Authorization", `Bearer ${testEmployeeToken}`)
        .send({
          startDate: "2026-11-12",
          endDate: "2026-11-10",
          leaveType: "SICK",
        });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe("startDate cannot be after endDate.");
    });

    it("should return 201 Leave request submitted successfully.", async () => {
      const response = await request(app)
        .post("/api/leave")
        .set("Authorization", `Bearer ${testEmployeeToken}`)
        .send({
          startDate: "2026-11-10",
          endDate: "2026-11-12",
          leaveType: "SICK",
          reason: "Testing Reason",
        });

      expect(response.status).toBe(201);
      expect(response.body.message).toBe(
        "Leave request submitted successfully.",
      );
      expect(response.body.leaveRequest).toMatchObject({
        id: expect.any(String),
        employeeId: testEmployee?.employee?.id,
        leaveType: "SICK",
        startDate: expect.stringContaining("2026-11-10"),
        endDate: expect.stringContaining("2026-11-12"),
        reason: "Testing Reason",
        status: "PENDING",
        reviewedById: null,
        reviewNote: null,
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
        employee: {
          id: testEmployee?.employee?.id,
          firstName: testEmployee?.employee?.firstName,
          lastName: testEmployee?.employee?.lastName,
        },
      });

      const savedLeaveRequestId: string = response.body.leaveRequest?.id;

      const savedLeaveRequest = await db.leaveRequest.findUnique({
        where: { id: savedLeaveRequestId },
      });

      expect(savedLeaveRequest).not.toBeNull();
      expect(savedLeaveRequest).toMatchObject({
        id: savedLeaveRequestId,
        employeeId: testEmployee?.employee?.id,
        leaveType: "SICK",
        startDate: new Date("2026-11-10"),
        endDate: new Date("2026-11-12"),
        reason: "Testing Reason",
        status: "PENDING",
        reviewedById: null,
        reviewNote: null,
        createdAt: expect.any(Date),
        updatedAt: expect.any(Date),
      });
    });
  });

  // ==========================================
  // CONTROLLER 2: reviewLeaveRequest
  // ==========================================

  describe("PATCH /api/leave/:id/review", () => {
    it("should return 400 Invalid Status, Must be APPROVED or REJECTED", async () => {
      const response = await request(app)
        .patch(`/api/leave/${existingPendingLeaveRequest?.id}/review`)
        .set("Authorization", `Bearer ${testAdminToken}`)
        .send({ status: "INVALID_STATUS" });

      expect(response.status).toBe(400);
      expect(response.body.message).toBe(
        "Invalid status. Must be APPROVED or REJECTED",
      );
    });

    it("should return 404 if Reviewer profile not found.", async () => {
      const response = await request(app)
        .patch(`/api/leave/${existingPendingLeaveRequest?.id}/review`)
        .set("Authorization", `Bearer ${nonReviewerToken}`)
        .send({ status: "APPROVED" });

      expect(response.status).toBe(404);
      expect(response.body.message).toBe(
        "Reviewer employee profile not found.",
      );
    });

    it("should return 404 if leave request not found", async () => {
      const response = await request(app)
        .patch(`/api/leave/${nonExistentId}/review`)
        .set("Authorization", `Bearer ${testAdminToken}`)
        .send({ status: "APPROVED" });

      expect(response.status).toBe(404);
      expect(response.body.message).toBe("Leave request not found");
    });

    const disAllowedStatuses = [
      {
        status: "APPROVED",
        getId: () => existingApprovedLeaveRequest?.id,
      },
      {
        status: "REJECTED",
        getId: () => existingRejectedLeaveRequest?.id,
      },
    ] as const;

    it.each(disAllowedStatuses)(
      "should return 400 if tring to review a record which is already \$status status",
      async ({ status, getId }) => {
        const response = await request(app)
          .patch(`/api/leave/${getId()}/review`)
          .set("Authorization", `Bearer ${testAdminToken}`)
          .send({ status });

        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          `Cannot Review a request that is already ${status}.`,
        );
      },
    );

    const disAllowedUsers = [
      { role: "EMPLOYEE", getToken: () => testEmployeeToken },
      {
        role: "NOT DIRECTOR MANAGER",
        getToken: () => testNotDirectManagerToken,
      },
    ] as const;

    it.each(disAllowedUsers)(
      "should return 403 if \$role is trying approve/reject a leave request",
      async ({ getToken }) => {
        const response = await request(app)
          .patch(`/api/leave/${existingPendingLeaveRequest?.id}/review`)
          .set("Authorization", `Bearer ${getToken()}`)
          .send({ status: "APPROVED" });

        expect(response.status).toBe(403);
        expect(response.body.message).toBe(
          "Forbidden. Only HR Admins or the direct manager can approve/reject this leave request.",
        );
      },
    );

    const allowedStatusUpdates = [
      {
        role: "HR_ADMIN",
        getToken: () => testAdminToken,
        getReviewerId: () => testAdmin?.employee?.id,
        getReviewerFirstName: () => testAdmin?.employee?.firstName,
        getReviewerLastName: () => testAdmin?.employee?.lastName,
        status: "APPROVED",
        payload: { status: "APPROVED", reviewNote: "You are allowed" },
      },
      {
        role: "DIRECT_MANAGER",
        getToken: () => testDirectManagerToken,
        getReviewerId: () => testDirectManager?.employee?.id,
        getReviewerFirstName: () => testDirectManager?.employee?.firstName,
        getReviewerLastName: () => testDirectManager?.employee?.lastName,
        status: "REJECTED",
        payload: { status: "REJECTED", reviewNote: "You are disallowed" },
      },
      {
        role: "DIRECT_MANAGER",
        getToken: () => testDirectManagerToken,
        getReviewerId: () => testDirectManager?.employee?.id,
        getReviewerFirstName: () => testDirectManager?.employee?.firstName,
        getReviewerLastName: () => testDirectManager?.employee?.lastName,
        status: "APPROVED",
        payload: { status: "APPROVED" },
      },
    ];

    it.each(allowedStatusUpdates)(
      "should return 200 if leave request \$status successfully by \$role.",
      async ({
        getToken,
        payload,
        status,
        getReviewerId,
        getReviewerFirstName,
        getReviewerLastName,
      }) => {
        const { firstName: employeeFirstName, lastName: employeeLastName } =
          testEmployee?.employee;

        const { id, employeeId, leaveType, startDate, endDate, reason } =
          existingPendingLeaveRequest;

        const response = await request(app)
          .patch(`/api/leave/${id}/review`)
          .set("Authorization", `Bearer ${getToken()}`)
          .send(payload);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe(
          `Leave request ${status.toLowerCase()} successfully`,
        );

        expect(response.body.leaveRequest).toMatchObject({
          id,
          employeeId,
          leaveType,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          reason,
          status,
          reviewedById: getReviewerId(),
          reviewNote: "reviewNote" in payload ? payload.reviewNote : null,
          createdAt: expect.any(String),
          updatedAt: expect.any(String),
          employee: {
            id: employeeId,
            firstName: employeeFirstName,
            lastName: employeeLastName,
          },
          reviewedBy: {
            id: getReviewerId(),
            firstName: getReviewerFirstName(),
            lastName: getReviewerLastName(),
          },
        });

        const updatedLeaveRequestId: string = response.body.leaveRequest?.id;

        const updatedLeaveRequest = await db.leaveRequest.findUnique({
          where: { id: updatedLeaveRequestId },
        });

        expect(updatedLeaveRequest).not.toBeNull();
        expect(updatedLeaveRequest).toMatchObject({
          id: updatedLeaveRequestId,
          employeeId,
          leaveType,
          startDate,
          endDate,
          reason,
          status,
          reviewedById: getReviewerId(),
          reviewNote: "reviewNote" in payload ? payload.reviewNote : null,
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        });
      },
    );
  });

  // ==========================================
  // CONTROLLER 3: getLeaveRequests
  // ==========================================
  describe("GET /api/leave", () => {
    const allowedUsers = [
      { role: "HR_ADMIN", getToken: () => nonEmployeeToken },
      { role: "EMPLOYEE", getToken: () => nonEmployeeToken },
      { role: "NOT_DIRECT_MANAGER", getToken: () => nonReviewerToken },
    ] as const;

    it.each(allowedUsers)(
      "should return 404 Employee profile not found for \$role",
      async ({ getToken }) => {
        const response = await request(app)
          .get("/api/leave")
          .set("Authorization", `Bearer ${getToken()}`);

        expect(response.status).toBe(404);
        expect(response.body.message).toBe("Employee profile not found.");
      },
    );

    const testCasesForFilter = [
      {
        name: "only a status is provided PENDING",
        getQuery: () => ({ status: "PENDING" }),
        validate: (rec: any) => {
          expect(rec.status).toBe("PENDING");
          expect(rec.reviewedById).toBeNull();
          expect(rec.reviewNote).toBeNull();
          expect(rec.reviewedBy).toBeNull();
        },
      },
      {
        name: "only a status is provided APPROVED",
        getQuery: () => ({ status: "APPROVED" }),
        validate: (rec: any) => {
          expect(rec.status).toBe("APPROVED");
          expect(rec.reviewedById).toEqual(expect.any(String));
          expect(rec.reviewNote).toEqual(expect.any(String));
          expect(rec.reviewedBy).toMatchObject({
            id: expect.any(String),
            firstName: expect.any(String),
            lastName: expect.any(String),
          });
        },
      },
      {
        name: "only leaveType is provided",
        getQuery: () => ({ leaveType: "SICK" }),
        validate: (rec: any) => expect(rec.leaveType).toBe("SICK"),
      },
      {
        name: "only employeeId is provided",
        getQuery: () => ({ employeeId: testEmployee?.employee?.id }),
        validate: (rec: any) =>
          expect(rec.employeeId).toBe(testEmployee?.employee?.id),
      },
    ] as const;

    it.each(testCasesForFilter)(
      "should return 200 and filter records correctly when \$name",
      async ({ getQuery, validate }) => {
        const response = await request(app)
          .get("/api/leave")
          .query(getQuery())
          .set("Authorization", `Bearer ${testAdminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe(
          "Leave Requests retrieved successfully",
        );

        expect(response.body.meta).toMatchObject({
          totalItems: expect.any(Number),
          totalPages: expect.any(Number),
          currentPage: expect.any(Number),
          itemsPerPage: expect.any(Number),
          hasNextPage: expect.any(Boolean),
          hasPrevPage: expect.any(Boolean),
        });

        expect(response.body.leaveRequests).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              employeeId: expect.any(String),
              leaveType: expect.any(String),
              startDate: expect.any(String),
              endDate: expect.any(String),
              reason: expect.any(String),
              status: expect.any(String),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              employee: expect.objectContaining({
                id: expect.any(String),
                firstName: expect.any(String),
                lastName: expect.any(String),
              }),
            }),
          ]),
        );

        response.body.leaveRequests.forEach((rec: any) => validate(rec));
      },
    );

    const queryScenarios = [
      {
        name: "status is Pending, leaveType and employeeId",
        getQuery: () => ({
          status: "PENDING",
          leaveType: "SICK",
          employeeId: testEmployee?.employee?.id,
        }),
      },
      {
        name: "status is Approved, leaveType and employeeId",
        getQuery: () => ({
          status: "APPROVED",
          leaveType: "SICK",
          employeeId: testEmployee?.employee?.id,
        }),
      },
      {
        name: "status is Rejected, leaveType and employeeId",
        getQuery: () => ({
          status: "REJECTED",
          leaveType: "SICK",
          employeeId: testEmployee?.employee?.id,
        }),
      },
    ] as const;

    it.each(queryScenarios)(
      "should return 200 and filter leave requests by \$name",
      async ({ getQuery }) => {
        const query = getQuery();

        const response = await request(app)
          .get("/api/leave")
          .query(query)
          .set("Authorization", `Bearer ${testAdminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe(
          "Leave Requests retrieved successfully",
        );

        expect(response.body.meta).toMatchObject({
          totalItems: expect.any(Number),
          totalPages: expect.any(Number),
          currentPage: expect.any(Number),
          itemsPerPage: expect.any(Number),
          hasNextPage: expect.any(Boolean),
          hasPrevPage: expect.any(Boolean),
        });

        expect(response.body.leaveRequests).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              employeeId: query?.employeeId,
              leaveType: query?.leaveType,
              startDate: expect.any(String),
              endDate: expect.any(String),
              reason: expect.any(String),
              status: query?.status,
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              employee: expect.objectContaining({
                id: query?.employeeId,
                firstName: testEmployee?.employee?.firstName,
                lastName: testEmployee?.employee?.lastName,
              }),
            }),
          ]),
        );
      },
    );

    it("should return 200 and retrieve leave requests if there are no query params", async () => {
      const response = await request(app)
        .get("/api/leave")
        .set("Authorization", `Bearer ${testAdminToken}`);

      expect(response.status).toBe(200);
      expect(response.body.message).toBe(
        "Leave Requests retrieved successfully",
      );

      expect(response.body.meta).toMatchObject({
        totalItems: expect.any(Number),
        totalPages: expect.any(Number),
        currentPage: expect.any(Number),
        itemsPerPage: expect.any(Number),
        hasNextPage: expect.any(Boolean),
        hasPrevPage: expect.any(Boolean),
      });

      expect(response.body.leaveRequests).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(String),
            employeeId: expect.any(String),
            leaveType: expect.any(String),
            startDate: expect.any(String),
            endDate: expect.any(String),
            reason: expect.any(String),
            status: expect.any(String),
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            employee: expect.objectContaining({
              id: expect.any(String),
              firstName: expect.any(String),
              lastName: expect.any(String),
            }),
          }),
        ]),
      );
    });

    const paginationScenarios = [
      { page: 1, limit: 1, hasPrev: false, hasNext: true, name: "first page" },
      { page: 2, limit: 1, hasPrev: true, hasNext: true, name: "middle page" },
      { page: 3, limit: 1, hasPrev: true, hasNext: false, name: "last page" },
    ];

    it.each(paginationScenarios)(
      "should return 200 and handle pagination flags correctly on the \$name",
      async ({ page, limit, hasPrev, hasNext }) => {
        const response = await request(app)
          .get("/api/leave")
          .query({ page, limit })
          .set("Authorization", `Bearer ${testAdminToken}`);

        expect(response.status).toBe(200);
        expect(response.body.message).toBe(
          "Leave Requests retrieved successfully",
        );

        expect(response.body.meta).toMatchObject({
          totalItems: 3,
          totalPages: 3,
          currentPage: page,
          itemsPerPage: limit,
          hasPrevPage: hasPrev,
          hasNextPage: hasNext,
        });

        expect(response.body.leaveRequests.length).toBe(1);

        expect(response.body.leaveRequests).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: expect.any(String),
              employeeId: expect.any(String),
              leaveType: expect.any(String),
              startDate: expect.any(String),
              endDate: expect.any(String),
              reason: expect.any(String),
              status: expect.any(String),
              createdAt: expect.any(String),
              updatedAt: expect.any(String),
              employee: expect.objectContaining({
                id: expect.any(String),
                firstName: expect.any(String),
                lastName: expect.any(String),
              }),
            }),
          ]),
        );
      },
    );
  });
});
