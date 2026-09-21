import type { Request, Response } from "express";
import { db } from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { AppError } from "../../utils/appError.js";

/**
 * Retrieves the complete list of corporate employee profiles.
 * Restricted to Administrative and Management tiers via middleware.
 */
export const getAllEmployees = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // Line 1: Extract query parameters with fallbacks for pagination
    const page = Math.max(1, parseInt(req.query.page as string, 10) || 1);
    const limit = Math.min(
      100,
      Math.max(1, parseInt(req.query.limit as string, 10) || 10),
    );
    const skip = (page - 1) * limit;

    // Line 2: Extract filter and search parameters
    const { search, departmentId, jobTitleId, role } = req.query;

    // Line 3: Construct dynamic Prisma filtering object (where clause)
    const whereClause: any = {};

    // Line 4: Search filter (Case-insensitive match on firstName, lastName, or connected user email)
    if (typeof search === "string" && search.trim() !== "") {
      const searchTerm = search.trim();
      whereClause.OR = [
        { firstName: { contains: searchTerm, mode: "insensitive" } },
        { lastName: { contains: searchTerm, mode: "insensitive" } },
        { user: { email: { contains: searchTerm, mode: "insensitive" } } },
      ];
    }

    // Line 5: Specific relation filters
    if (typeof departmentId === "string" && departmentId.trim() !== "") {
      whereClause.departmentId = departmentId.trim();
    }

    if (typeof jobTitleId === "string" && jobTitleId.trim() !== "") {
      whereClause.jobTitleId = jobTitleId.trim();
    }

    if (typeof role === "string" && role.trim() !== "") {
      whereClause.user = {
        ...(whereClause.user || {}),
        role: role.trim().toUpperCase(),
      };
    }

    // Line 6: Execute parallel queries using db.$transaction for total count and paginated rows
    const [totalItems, employees] = await db.$transaction([
      db.employee.count({ where: whereClause }),
      db.employee.findMany({
        where: whereClause,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        include: {
          user: { select: { email: true, role: true } },
          department: { select: { id: true, name: true } },
          jobTitle: { select: { id: true, title: true } },
          manager: { select: { id: true, firstName: true, lastName: true } },
        },
      }),
    ]);

    // Line 7: Calculate pagination metadata
    const totalPages = Math.ceil(totalItems / limit);

    // Line 8: Return formatted response
    res.status(200).json({
      message: "Employees retrieved successfully",
      meta: {
        totalItems,
        totalPages,
        currentPage: page,
        itemsPerPage: limit,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
      employees,
    });
  },
);

/**
 * Fetches the authenticated user's own attached Employee record.
 * Accessible by any verified active user profile.
 */
export const getMyProfile = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // 1. Gaurd check to guarantee the authentication middleware ran successfully
    if (!req.user) {
      throw new AppError("User identity context missing.", 401);
    }

    // 2. Locate the specific employee file referencing the user's explicit token ID
    const employeeProfile = await db.employee.findUnique({
      where: { userId: req.user.userId },
      include: {
        user: {
          select: {
            email: true,
            role: true,
          },
        },
      },
    });

    if (!employeeProfile) {
      throw new AppError(
        "Employee profile record could not be found for this account.",
        404,
      );
    }

    res.status(200).json(employeeProfile);
  },
);

/**
 * Safely updates an employee's personal details.
 * Regular employees can only modify their own profiles.
 */
export const updateEmployeeProfile = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    // Line 1. Verify user identity context exists from auth middleware
    if (!req.user) {
      throw new AppError("User identity context missing.", 401);
    }

    // Line 2. Extract target employee UUID from URL parameter (/api/employees/:id)
    const { id } = req.params;

    // Line 3. Extract updatable properties from request body
    const { firstName, lastName, departmentId, jobTitleId, managerId, role } =
      req.body;

    // Line 4. Identify caller identify and clearance privileges
    const callerUserId = req.user.userId;
    const callerRole = req.user.role;
    const isAdmin = ["SUPER_ADMIN", "HR_ADMIN"].includes(callerRole);

    // Line 5. Fetch the target employee profile record to update
    const targetEmployee = await db.employee.findUnique({
      where: { id },
      include: { user: true },
    });

    // Line 6. Gaurd against non-existent employee records
    if (!targetEmployee) {
      throw new AppError("Target employee record not found.", 404);
    }

    // Line 7: Row-Level Authorization - Non-admins can ONLY modify their own profile
    if (!isAdmin) {
      if (targetEmployee.userId !== callerUserId) {
        throw new AppError(
          "Forbidden. You are only authorized to modify your own profile.",
          403,
        );
      }
    }

    // Line 8: Prepare object to hold top-level Employee table updates
    const employeeDataToUpdate: Record<string, any> = {};

    // Line 9. Handle basic personal name updates (allowed for both Self and Admins)
    if (typeof firstName === "string" && firstName.trim() !== "") {
      employeeDataToUpdate.firstName = firstName.trim();
    }
    if (typeof lastName === "string" && lastName.trim() !== "") {
      employeeDataToUpdate.lastName = lastName.trim();
    }

    // ========================================
    // ADMINISTRATIVE OVERRIDES (Only SUPER_ADMIN & HR_ADMIN can execute below)
    // ========================================

    if (departmentId !== undefined) {
      // Line 10. Restrict assignment access to Admins
      if (!isAdmin)
        throw new AppError(
          "Forbidden. Only HR Admins can assign departments.",
          403,
        );

      // Line 11: Support clearing department (setting to null) or validating foreign key existence
      if (departmentId === null) {
        employeeDataToUpdate.department = { disconnect: true };
      } else {
        const deptExists = await db.department.findUnique({
          where: { id: departmentId },
        });
        if (!deptExists)
          throw new AppError(
            "Invalid departmentId. Department does not exist.",
            404,
          );

        // User relation connect syntax instead of direct departmentId assignment
        employeeDataToUpdate.department = { connect: { id: departmentId } };
      }
    }

    if (jobTitleId !== undefined) {
      // Line 12: Restrict job title changes to Admins
      if (!isAdmin)
        throw new AppError(
          "Forbidden. Only HR Admins can assign job titles.",
          403,
        );

      if (jobTitleId === null) {
        employeeDataToUpdate.jobTitle = { disconnect: true };
      } else {
        const titleExists = await db.jobTitle.findUnique({
          where: { id: jobTitleId },
        });
        if (!titleExists)
          throw new AppError(
            "Invalid jobTitleId. Job title does not exist.",
            404,
          );
      }
      employeeDataToUpdate.jobTitle = { connect: { id: jobTitleId } };
    }

    if (managerId !== undefined) {
      // Line 13: Restrict manager assignment to Admins
      if (!isAdmin)
        throw new AppError(
          "Forbidden. Only HR Admins can assign managers.",
          403,
        );

      if (managerId === null) {
        employeeDataToUpdate.manager = { disconnect: true };
      } else {
        // Line 14: Prevent circular self-management bug (Employee cannot manage themselves)
        if (managerId === id) {
          throw new AppError(
            "Self-management error: An employee cannot be their own manager.",
            400,
          );
        }

        // Line 15: Validate manager employee record exists in PostgreSQL
        const managerExists = await db.employee.findUnique({
          where: { id: managerId },
        });
        if (!managerExists)
          throw new AppError("Invalid managerId. Manager does not exist.", 404);

        employeeDataToUpdate.manager = { connect: { id: managerId } };
      }
    }

    // Line 16: Handle Role update on connected User table
    let roleToUpdate: string | undefined = undefined;
    if (role != undefined) {
      if (!isAdmin)
        throw new AppError(
          "Forbidden. Only HR Admins can assign user roles.",
          403,
        );

      // Line 17: Validate role value against Enum options
      const validRoles = ["SUPER_ADMIN", "HR_ADMIN", "MANAGER", "EMPLOYEE"];
      if (!validRoles.includes(role)) {
        throw new AppError(
          `Invalid role. Allowed values: ${validRoles.join(", ")}`,
          400,
        );
      }
      roleToUpdate = role;
    }

    // Line 18: Guard against empty/unmodified PATCH requests
    if (Object.keys(employeeDataToUpdate).length === 0 && !roleToUpdate) {
      throw new AppError("No valid updatable fields provided.", 400);
    }

    // Line 19: Perform atomic nested database transaction update
    const updatedEmployee = await db.employee.update({
      where: { id },
      data: {
        ...employeeDataToUpdate,
        ...(roleToUpdate && {
          user: {
            update: { role: roleToUpdate as any },
          },
        }),
      },
      include: {
        user: {
          select: {
            email: true,
            role: true,
          },
        },
        department: true,
        jobTitle: true,
        manager: {
          select: { id: true, firstName: true, lastName: true },
        },
      },
    });

    // Line 20: Send structured response payload
    res.status(200).json({
      message:
        "Employee records and corporate assigments updated successfully.",
      employee: updatedEmployee,
    });
  },
);
