import type { Request, Response } from "express";
import { db } from "../../config/db.js";
import { error } from "console";

/**
 * Retrieves the complete list of corporate employee profiles.
 * Restricted to Administrative and Management tiers via middleware.
 */
export const getAllEmployees = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const employees = await db.employee.findMany({
      include: {
        user: {
          select: {
            email: true,
            role: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        lastName: "asc",
      },
    });

    res.status(200).json({
      count: employees.length,
      employees,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve directory records.",
      details: String(error),
    });
  }
};

/**
 * Fetches the authenticated user's own attached Employee record.
 * Accessible by any verified active user profile.
 */
export const getMyProfile = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    // 1. Gaurd check to guarantee the authentication middleware ran successfully
    if (!req.user) {
      res.status(401).json({ error: "User identity context missing." });
      return;
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
      res.status(404).json({
        error: "Employee profile record could not be found for this account.",
      });
      return;
    }

    res.status(200).json(employeeProfile);
  } catch (error) {
    res.status(500).json({
      error: "Failed to retrieve profile records.",
      details: String(error),
    });
  }
};

/**
 * Safely updates an employee's personal details.
 * Regular employees can only modify their own profiles.
 */
export const updateEmployeeProfile = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    // 1. Structural security guard check
    if (!req.user) {
      res.status(401).json({ error: "User identity context missing." });
      return;
    }

    const { id } = req.params;
    const { firstName, lastName } = req.body;

    // 2. Security Clearance Enforcement
    // If the user isn't an Admin, they are strictly locked down to updating ONLY their own ID
    if (req.user.role !== "SUPER_ADMIN" && req.user.role !== "HR_ADMIN") {
      // Find the employee record belonging to this authenticated user
      const dynamicProfile = await db.employee.findUnique({
        where: { userId: req.user.userId },
      });

      if (!dynamicProfile || dynamicProfile.id !== id) {
        res.status(403).json({
          error:
            "Forbidden. You can only modify your own employee profile details.",
        });
        return;
      }
    }

    // 3. Build the safe payload to update (ignoring any injected fields like 'role')
    const updateData: { firstName?: string; lastName?: string } = {};
    if (typeof firstName === "string") updateData.firstName = firstName.trim();
    if (typeof lastName === "string") updateData.lastName = lastName.trim();

    if (Object.keys(updateData).length === 0) {
      res.status(400).json({ error: "No valid updatable fields provided." });
      return;
    }

    // 4. Update the database entry via Prisma
    const updatedEmployee = await db.employee.update({
      where: { id },
      include: {
        user: {
          select: {
            email: true,
            role: true,
          },
        },
      },
      data: updateData,
    });

    res.status(200).json({
      message: "Employee records updated successfully.",
      employee: updatedEmployee,
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to update employee data structures.",
      details: String(error),
    });
  }
};
