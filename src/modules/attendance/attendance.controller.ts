import type { Request, Response } from "express";
import { db } from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { AppError } from "../../utils/appError.js";

// Helper to normalize dates to 00:00:00 UTC for unique index matching
const getNormalizedToday = (): Date => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
};

export const clockIn = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.userId;
    const { clockIn, notes } = req.body;

    if (!userId) throw new AppError("Unauthorized context.", 401);

    // 1. Fetch employee profile linked to logged in user
    const employee = await db.employee.findUnique({ where: { userId } });
    if (!employee) throw new AppError("Employee profile not found.", 404);

    const today = getNormalizedToday();
    const now = clockIn ? new Date(clockIn) : new Date();

    // 2. Check for duplicate clock-in today
    const existingAttendance = await db.attendance.findUnique({
      where: {
        employeeId_date: {
          employeeId: employee.id,
          date: today,
        },
      },
    });

    if (existingAttendance)
      throw new AppError("You have already clocked in today.", 400);

    // 3. Late Threshold Evaluation (9:00 AM cutoff)
    const lateThreshold = new Date(now);
    lateThreshold.setHours(9, 0, 0, 0);
    const status = now > lateThreshold ? "LATE" : "PRESENT";

    // 4. Create record
    const attendance = await db.attendance.create({
      data: {
        employeeId: employee?.id || "",
        date: today,
        clockIn: now,
        status,
        notes,
      },
    });

    res.status(201).json({
      message: "Clocked clockIn successfully",
      attendance,
    });
  },
);

export const clockOut = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const userId = req?.user?.userId;
    const { clockOut } = req.body;

    if (!userId) throw new AppError("Unauthorized context", 401);

    const employee = await db.employee.findUnique({
      where: { userId }, // Map User Id to Employee
    });

    if (!employee) throw new AppError("Employee profile not found.", 404);

    const today = getNormalizedToday();
    const now = clockOut ? new Date(clockOut) : new Date();

    // 1. Find today's active clock-in
    const attendanceRecord = await db.attendance.findUnique({
      where: {
        employeeId_date: {
          employeeId: employee?.id || "",
          date: today,
        },
      },
    });

    if (!attendanceRecord)
      throw new AppError(
        "No clock-in record found for today. Please clock in first.",
        400,
      );

    if (attendanceRecord?.clockOut)
      throw new AppError("You already clocked out for today.", 400);

    // 2. Calculate work hours
    const durationMs =
      now.getTime() - new Date(attendanceRecord.clockIn).getTime();
    const workHours = parseFloat((durationMs / (1000 * 60 * 60)).toFixed(2));

    // 3. Mark as HALF_DAY if worked less than 4 hours
    const status = workHours < 4 ? "HALF_DAY" : attendanceRecord?.status;

    // 4. Update entry
    const updateAttendance = await db.attendance.update({
      where: {
        id: attendanceRecord.id,
      },
      data: {
        clockOut: now,
        workHours,
        status,
      },
    });

    res.status(201).json({
      message: "Clocked out successfully",
      attendance: updateAttendance,
    });
  },
);

export const getAttendanceLogs = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const page = Math.max(1, parseInt(req.query.page as string, 10) || 1);
    const limit = Math.min(
      100,
      Math.max(1, parseInt(req.query.limit as string, 10) || 10),
    );
    const skip = (page - 1) * limit;

    const userId = req.user?.userId;
    const role = req.user?.role;

    const { startDate, endDate, status, employeeId } = req.query;
    const whereClause: any = {};

    // 1. Row-Level Authorization: Employees can only view their own records
    const employee = await db.employee.findUnique({ where: { userId } });
    if (role !== "HR_ADMIN") {
      if (!employee) throw new AppError("Employee profile not found.", 404);
      whereClause.employeeId = employee.id;
    } else if (typeof employeeId === "string" && employeeId.trim() !== "") {
      whereClause.employeeId = employeeId.trim();
    }

    // 2. Status filter
    if (typeof status === "string" && status.trim() !== "") {
      whereClause.status = status.trim().toUpperCase();
    }

    // 3. Date Range filter
    if (typeof startDate === "string" || typeof endDate === "string") {
      whereClause.date = {};
      if (typeof startDate === "string" && startDate.trim() !== "") {
        whereClause.date.gte = new Date();
      }
      if (typeof endDate === "string" && endDate.trim() !== "") {
        whereClause.date.lte = new Date(endDate.trim());
      }
    }

    // 4. Parallel Query Execution
    const [totalItems, attendanceLogs] = await db.$transaction([
      db.attendance.count({ where: whereClause }),
      db.attendance.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          employee: {
            select: { id: true, firstName: true, lastName: true },
          },
        },
      }),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    res.status(200).json({
      message: "Attendance Logs retrieved successfully.",
      meta: {
        totalItems,
        totalPages,
        currentPage: page,
        itemsPerPage: limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
      attendanceLogs,
    });
  },
);
