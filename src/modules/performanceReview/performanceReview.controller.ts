import type { Request, Response } from "express";
import { db } from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { AppError } from "../../utils/appError.js";
import { ReviewPeriod } from "../../../prisma/generated/client/index.js";

export const createReview = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const {
      rating,
      year,
      period,
      employeeId,
      strengths,
      improvements,
      comments,
    } = req.body;

    const date = new Date();
    const currentYear = date.getFullYear();

    if (typeof rating !== "number" || !(rating > 0 && rating < 6))
      throw new AppError(
        "Rating must be a number and must be between 1 to 5",
        400,
      );

    if (typeof year !== "number" || year > currentYear)
      throw new AppError(
        "Year must be a number and maximum year should be the upto the current year",
        400,
      );

    const validPeriods = ["Q1", "Q2", "Q3", "Q4", "ANNUAL", "PROBATION"];
    if (
      typeof period !== "string" ||
      !validPeriods.includes(period.toUpperCase())
    )
      throw new AppError("Invalid period specified.", 400);

    if (typeof strengths !== "string")
      throw new AppError("Strengths must be a string", 400);

    if (typeof improvements !== "string")
      throw new AppError("Improvements must be a string", 400);

    if (typeof comments !== "string")
      throw new AppError("Comments must be a string");

    const userId = req.user?.userId;
    const userRole = req.user?.role;
    if (!userId) throw new AppError("Unauthorized context.", 401);

    const reviwer = await db.employee.findUnique({ where: { userId } });
    if (!reviwer) throw new AppError("Reviwer profile not found", 404);

    const targetEmployee = await db.employee.findUnique({
      where: { id: employeeId },
    });
    if (!targetEmployee)
      throw new AppError("Target Employee doesn't exist", 404);

    const isDirectManager = targetEmployee.managerId === reviwer.id;
    const isAdmin = userRole === "HR_ADMIN";

    if (!isAdmin && isDirectManager) {
      throw new AppError(
        "Forbidden. Only HR Admins or the direct manager can submit reviews.",
        403,
      );
    }

    if (targetEmployee.id === reviwer.id) {
      throw new AppError(
        "You cannot submit a performance review for yourself.",
        400,
      );
    }

    const existingReview = await db.performanceReview.findUnique({
      where: {
        employeeId_period_year: {
          employeeId: targetEmployee.id,
          period: period as ReviewPeriod,
          year,
        },
      },
    });

    if (existingReview)
      throw new AppError("Review for the employee already exists", 409);

    await db.performanceReview.create({
      data: {
        rating,
        year,
        period: period as ReviewPeriod,
        strengths,
        improvements,
        comments,
        reviewerId: reviwer.id,
        employeeId: targetEmployee.id,
      },
    });

    res.status(201).json({
      message: "Performance Review created successfully",
    });
  },
);

export const getEmployeeReviews = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const page = Math.max(1, parseInt(req.query.page as string, 10) || 1);
    const limit = Math.min(
      100,
      Math.max(1, parseInt(req.query.limit as string, 10) || 10),
    );
    const skip = (page - 1) * limit;

    const { year, period, rating, employeeId } = req.query;

    const userId = req.user?.userId;
    const userRole = req.user?.role;

    if (!userId) throw new AppError("Unauthorized context.", 401);

    const whereClause: any = {};

    const callerEmployee = await db.employee.findUnique({ where: { userId } });

    if (userRole !== "HR_ADMIN") {
      if (!callerEmployee)
        throw new AppError("Employee profile not found", 404);
      whereClause.employeeId = callerEmployee.id;
    } else if (typeof employeeId === "string" && employeeId.trim() !== "") {
      whereClause.employeeId = employeeId.trim();
    }

    if (typeof year === "string" && year.trim() !== "") {
      const parsedYear = parseInt(year.trim(), 10);
      if (!isNaN(parsedYear)) whereClause.year = parsedYear;
    }
    if (typeof period === "string" && period.trim() !== "") {
      whereClause.period = period.trim().toUpperCase();
    }
    if (typeof rating === "string" && rating.trim() !== "") {
      const parsedRating = parseInt(rating.trim(), 10);
      if (!isNaN(parsedRating)) whereClause.rating = parsedRating;
    }
    if (typeof employeeId === "string" && employeeId.trim() !== "") {
      whereClause.employeeId = employeeId.trim().toUpperCase();
    }

    const [totalItems, employeeReviews] = await db.$transaction([
      db.performanceReview.count({ where: whereClause }),
      db.performanceReview.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
      }),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    res.status(200).json({
      message: "Reviews retrieved successfully.",
      meta: {
        totalItems,
        totalPages,
        currentPage: page,
        itemsPerPage: limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
      employeeReviews,
    });
  },
);

export const getPerformanceSummary = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { employeeId } = req.params;

    if (!employeeId || typeof employeeId !== "string")
      throw new AppError("Invalid or Employee profile not found.", 404);

    const summary = await db.performanceReview.aggregate({
      where: { employeeId },
      _avg: { rating: true },
      _count: { id: true },
    });

    res.status(200).json({
      message: "Employee Review Summary retreived successfully",
      summary,
    });
  },
);
