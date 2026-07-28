import type { Request, Response } from "express";
import { db } from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { AppError } from "../../utils/appError.js";

// Line 1: Use asyncHandler wrapper to auto-catch asynchronous runtime errors and pass them to global error middleware
export const requestLeave = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // Line 2: Destructure necessary parameters sent by the client inside the request body
    const { leaveType, startDate, endDate, reason } = req.body;

    // Line 3: Extract the caller's unique User ID attached to req.user by our checkAuth middleware
    const callerUserId = req.user?.userId;

    // Line 4: Query the database to find the Employee profile associated with the caller's user record
    const employee = await db.employee.findUnique({
      where: { userId: callerUserId },
    });

    // Line 5: Gaurd clause - if the logged-in user lacks an Employee record, abort with 404
    if (!employee) {
      throw new AppError("Employee profile not found.", 404);
    }

    // Line 6: Convert incoming date strings ("2026-08-01") into JavaScript native Date objects
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Line 7: Validate date parsing - isNaN(getTime()) checks if either string was an invalid date format
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      throw new AppError("Invalid startDate or endDate format.", 400);
    }

    // Line 8: Logical constraint - ensure the start date does not occur after the end date
    if (start > end) {
      throw new AppError("startDate cannot be after endDate.", 400);
    }

    // Line 9: Create new LeaveRequest record in Prisma defaults to status: "PENDING"
    const leaveRequest = await db.leaveRequest.create({
      data: {
        employeeId: employee.id, // Direct foreign key link to applicant
        leaveType,
        startDate: start,
        endDate: end,
        reason,
        status: "PENDING",
      },
      //   Include minimal employee metadata in return payload for immediate UI feedback
      include: {
        employee: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    // Line 10: Send a HTTP 201 Created status back to client along with the created request
    res.status(201).json({
      message: "Leave request submitted successfully.",
      leaveRequest,
    });
  },
);

// Line 1: Controller function definition wrapped in error handler
export const reviewLeaveRequest = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // Line 2: Extract leave request from URL route parameter (:id)
    const { id } = req.params;

    // Line 3: Extract review action (APPROVED or REJECTED) and reviewer notes from body
    const { status, reviewNote } = req.body;

    // Line 4: Identify caller's User ID and check if they hold HR_ADMIN global role
    const callerUserId = req.user?.userId;
    const isAdmin = req.user?.role === "HR_ADMIN";

    // Line 5: Input validation - reject any action status other than APPROVED or REJECTED
    if (!["APPROVED", "REJECTED"].includes(status)) {
      throw new AppError("Invalid status. Must be APPROVED or REJECTED", 400);
    }

    // Line 6: Fetch reviewer's internal Employee profile ID
    const reviewer = await db.employee.findUnique({
      where: { userId: callerUserId },
    });

    // Line 7: Gaurd clause - non-admin reviewers must have an active employee profile
    if (!reviewer && !isAdmin) {
      throw new AppError("Reviewer employee profile not found.", 404);
    }

    // Line 8: Fetch target LeaveRequest record, including applicant's managerId for authorization check
    const leaveRequest = await db.leaveRequest.findUnique({
      where: { id },
      include: {
        employee: {
          select: { id: true, managerId: true },
        },
      },
    });

    // Line 9: Return 404 if request ID doesn't exist
    if (!leaveRequest) {
      throw new AppError("Leave request not found", 404);
    }

    // Line 10: State validation - enforce immutability once a request has already been processed
    if (leaveRequest.status !== "PENDING") {
      throw new AppError(
        `Cannot Review a request that is already ${leaveRequest.status}.`,
        400,
      );
    }

    // Line 11: Authorization check - check if reviewer is application's direct manager
    const isDirectManager =
      reviewer && leaveRequest.employee.managerId === reviewer.id;

    // Line 12: Security gate - block user if there are neither HR Admin nor direct manager
    if (!isAdmin && !isDirectManager) {
      throw new AppError(
        "Forbidden. Only HR Admins or the direct manager can approve/reject this leave request/",
        403,
      );
    }

    // Line 13: Execute database update with review outcome and reviwer foreign key relation
    const updatedRequest = await db.leaveRequest.update({
      where: { id },
      data: {
        status,
        reviewNote,
        reviewedById: reviewer ? reviewer.id : null,
      },
      include: {
        employee: { select: { id: true, firstName: true, lastName: true } },
        reviewedBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });

    // Line 14: Send HTTP 200 OK response with updated record
    res.status(200).json({
      message: `Leave request ${status.toLowerCase()} successfully`,
      leaveRequest: updatedRequest,
    });
  },
);

// Line 1: Controller function definition for paginated requests list
export const getLeaveRequests = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // Line 2: Parse and sanitize pagination query parameters (`page`, `limit`, `skip`)
    const page = Math.max(1, parseInt(req.query.page as string, 10) || 1);
    const limit = Math.min(
      100,
      Math.max(1, parseInt(req.query.limit as string, 10) || 10),
    );
    const skip = (page - 1) * limit;

    // Line 3: Extract optional filtering query params from URL string (?status=PENDING&leaveType=VACATION)
    const { status, leaveType, employeeId } = req.query;
    const callerUserId = req.user?.userId;
    const isAdmin = req.user?.role === "HR_ADMIN";

    // Line 4: Retrieve caller's employee profile
    const callerEmployee = await db.employee.findUnique({
      where: { userId: callerUserId },
    });

    // Line 5: Initialize dynamic Prisma `where` condition container
    const whereClause: any = {};

    // Line 6: Row-level Authorization - if caller is not HR Admin, restrict results
    if (!isAdmin) {
      if (callerEmployee) {
        whereClause.OR = [
          {
            employeeId: callerEmployee.id, // View own submitted requests
          },
          { employee: { managerId: callerEmployee.id } }, // View direct reports' requests
        ];
      } else {
        throw new AppError("Employee profile not found.", 404);
      }
    }

    // Line 7: Append optional status filter if present
    if (typeof status === "string" && status.trim() !== "") {
      whereClause.status = status.trim().toUpperCase();
    }

    // Line 8: Append optional leave type filter if present
    if (typeof leaveType === "string" && leaveType.trim() !== "") {
      whereClause.leaveType = leaveType.trim().toUpperCase();
    }
    // Line 9: Append target employee ID filter if present
    if (typeof employeeId === "string" && employeeId.trim() !== "") {
      whereClause.employeeId = employeeId.trim();
    }

    // Line 10: Execute dual database queries in parallel (Total Count + Sliced Page)
    const [totalItems, requests] = await db.$transaction([
      db.leaveRequest.count({ where: whereClause }),
      db.leaveRequest.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          employee: { select: { id: true, firstName: true, lastName: true } },
          reviewedBy: { select: { id: true, firstName: true, lastName: true } },
        },
      }),
    ]);

    // Line 11: Compute total pages available based on item count and page size
    const totalPages = Math.ceil(totalItems / limit);

    // Line 12: Return standard API envelope containing metadata + data array
    res.status(200).json({
      message: "Leave Requests retrieved successfully",
      meta: {
        totalItems,
        totalPages,
        currentPage: page,
        itemsPerPage: limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
      leaveRequests: requests,
    });
  },
);
