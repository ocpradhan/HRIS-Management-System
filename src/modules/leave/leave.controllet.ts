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

    // Line 5: Input validation - reject any action status other than APPROVED or REJECTED
    // Line 6: Fetch reviewer's internal Employee profile ID
    // Line 7: Gaurd clause - non-admin reviewers must have an active employee profile
    // Line 8: Fetch target LeaveRequest record, including applicant's managerId for authorization check
    // Line 9: Return 404 if request ID doesn't exist
    // Line 10: State validation - enforce immutability once a request has already been processed
    // Line 11: Authorization check - check if reviewer is application's direct manager
    // Line 12: Security gate - block user if there are neither HR Admin nor direct manager
    // Line 13: Execute database update with review outcome and reviwer foreign key relation
    // Line 14: Send HTTP 200 OK response with updated record
  },
);

export const updateLeave = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {},
);

export const getAllLeaveRequests = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {},
);

export const deleteLeave = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {},
);
