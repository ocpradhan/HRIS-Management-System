import type { Request, Response } from "express";
import { db } from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";

export const getDashboardData = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // Normalize today for Attendance (which uses 00:00:00 UTC)
    const todayStart = new Date();
    todayStart.setUTCHours(0, 0, 0, 0);

    // End of day for Leave Requests (to check if today falls between startDate and endDate)
    const todayEnd = new Date();
    todayEnd.setUTCHours(23, 59, 59, 999);

    const [
      totalEmployees,
      departmentsData,
      pendingLeaves,
      onLeaveToday,
      attendanceStats,
      performanceData,
    ] = await db.$transaction([
      // 1. Total Employees
      db.employee.count(),

      //   2. Headcount by Department
      db.department.findMany({
        select: {
          name: true,
          _count: {
            select: { employees: true },
          },
        },
      }),

      //   3. Pending Leaves Total
      db.leaveRequest.count({
        where: { status: "PENDING" },
      }),

      //   4. Approved Leaves Active Today
      db.leaveRequest.count({
        where: {
          status: "APPROVED",
          startDate: { lte: todayEnd },
          endDate: { gte: todayStart },
        },
      }),

      //   5. Today's Attendance grouped by Status
      db.attendance.groupBy({
        by: ["status"],
        where: { date: todayStart },
        _count: true,
        orderBy: {
          status: "desc",
        },
      }),

      //   6. Company Performance Average
      db.performanceReview.aggregate({
        _avg: { rating: true },
        _count: { id: true },
      }),
    ]);

    // A. Format Department Array
    const formattedDepartments = departmentsData.map((dept) => ({
      department: dept.name,
      count: dept._count.employees,
    }));

    // B. Calculate Attendance Breakdown

    const getCountByStatus = (statusName: string) => {
      const stat = attendanceStats.find((s) => s.status === statusName);
      if (!stat || typeof stat._count === "boolean") return 0;
      return typeof stat._count === "number"
        ? stat._count
        : ((stat._count as Record<string, number>).status ?? 0);
    };

    const presentCount = getCountByStatus("PRESENT");
    const lateCount = getCountByStatus("LATE");
    const halfDayCount = getCountByStatus("HALF_DAY");

    const totalClockedIn = presentCount + lateCount + halfDayCount;
    // Absent count is total employees minus everyone who clocked in AND everyone legally on leave today
    const absent = Math.max(0, totalEmployees - totalClockedIn - onLeaveToday);

    // C. Format Performance Average
    const avgRating = performanceData._avg.rating
      ? parseFloat(performanceData._avg.rating.toFixed(2))
      : 0;

    res.status(200).json({
      message: "Dashboard analytics retrieved successfully",
      analytics: {
        headcount: {
          totalEmployees,
          byDepartment: formattedDepartments,
        },
        leave: {
          pendingRequests: pendingLeaves,
          onLeaveToday,
        },
        attendanceToday: {
          present: presentCount,
          late: lateCount,
          halfDay: halfDayCount,
          absent,
          totalClockedIn,
        },
        performance: {
          companyAverageRating: avgRating,
          totalReviewsEvaluated: performanceData._count.id,
        },
      },
    });
  },
);
