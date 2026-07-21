import type { Request, Response } from "express";
import { db } from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { AppError } from "../../utils/appError.js";

/**
 * Creates a brand new corporate department.
 * Restricted to Administrative clearance levels.
 */
export const createDepartment = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { name, description } = req.body;

    if (!name || typeof name !== "string" || name.trim() === "") {
      throw new AppError(
        "Department name is a mandatory string property.",
        400,
      );
    }

    // Check for duplicate department names to prevent crashes
    const existingDept = await db.department.findUnique({
      where: { name: name.trim() },
    });
    if (existingDept) {
      throw new AppError("A department with this name already exists.", 409);
    }

    const newDept = await db.department.create({
      data: {
        name: name.trim(),
        description: description ? String(description).trim() : null,
      },
    });

    res.status(201).json({
      message: "Department provisioned successfully.",
      department: newDept,
    });
  },
);

/**
 * Retrieves all departments along with an active count of their assigned employees.
 * Accessible by all authenticated active accounts.
 */
export const getAllDepartments = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const departments = await db.department.findMany({
      include: {
        _count: {
          select: { employees: true },
        },
      },
      orderBy: { name: "asc" },
    });

    res.status(200).json(departments);
  },
);

/**
 * Updates an existing department's metadata attributes.
 * Restricted to Administrative tiers.
 */
export const updateDepartment = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, description } = req.body;

    const departmentExists = await db.department.findUnique({
      where: { id },
    });
    if (!departmentExists) {
      throw new AppError("Target department record not found.", 404);
    }

    const updateData: { name?: string; description?: string | null } = {};
    if (typeof name === "string" && name.trim() !== "") {
      // Validate that the new name isn't already taken by another department
      const duplicateName = await db.department.findFirst({
        where: { name: name.trim(), NOT: { id } },
      });
      if (duplicateName) {
        throw new AppError("Another department already uses this name.", 409);
      }
      updateData.name = name.trim();
    }

    if (description !== undefined) {
      updateData.description = description ? String(description).trim() : null;
    }

    const updatedDept = await db.department.update({
      where: { id },
      data: updateData,
    });

    res.status(200).json({
      message: "Department updated successfully.",
      department: updatedDept,
    });
  },
);

/**
 * Removes a department entirely
 * Employees attached to this department will have their departmentId safely set to null.
 */
export const deleteDepartment = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const departmentExists = await db.department.findUnique({
      where: { id },
    });
    if (!departmentExists) {
      throw new AppError("Target department record not found.", 404);
    }

    await db.department.delete({ where: { id } });

    res.status(200).json({
      message:
        "Department completely deleted. Associated employee paths unlinked.",
    });
  },
);
