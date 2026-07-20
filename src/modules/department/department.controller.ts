import type { Request, Response } from "express";
import { db } from "../../config/db.js";
import { error } from "console";

/**
 * Creates a brand new corporate department.
 * Restricted to Administrative clearance levels.
 */
export const createDepartment = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { name, description } = req.body;

    if (!name || typeof name !== "string" || name.trim() === "") {
      res
        .status(400)
        .json({ error: "Department name is a mandatory string property." });
      return;
    }

    // Check for duplicate department names to prevent crashes
    const existingDept = await db.department.findUnique({
      where: { name: name.trim() },
    });
    if (existingDept) {
      res
        .status(409)
        .json({ error: "A department with this name already exists." });
      return;
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
  } catch (error) {
    res.status(500).json({
      error: "Failed to create department structure.",
      details: String(error),
    });
  }
};

/**
 * Retrieves all departments along with an active count of their assigned employees.
 * Accessible by all authenticated active accounts.
 */
export const getAllDepartments = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const departments = await db.department.findMany({
      include: {
        _count: {
          select: { employees: true },
        },
      },
      orderBy: { name: "asc" },
    });

    res.status(200).json(departments);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to fetch departments.", details: String(error) });
  }
};

/**
 * Updates an existing department's metadata attributes.
 * Restricted to Administrative tiers.
 */
export const updateDepartment = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const departmentExists = await db.department.findUnique({ where: { id } });
    if (!departmentExists) {
      res.status(404).json({ error: "Target department record not found." });
    }

    const updateData: { name?: string; description?: string | null } = {};
    if (typeof name === "string" && name.trim() !== "") {
      // Validate that the new name isn't already taken by another department
      const duplicateName = await db.department.findFirst({
        where: { name: name.trim(), NOT: { id } },
      });
      if (duplicateName) {
        res
          .status(409)
          .json({ error: "Another department already uses this name." });
        return;
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
  } catch (error) {
    res.status(500).json({
      error: "Failed to modify department records.",
      details: String(error),
    });
  }
};

/**
 * Removes a department entirely
 * Employees attached to this department will have their departmentId safely set to null.
 */
export const deleteDepartment = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;

    const departmentExists = await db.department.findUnique({ where: { id } });
    if (!departmentExists) {
      res.status(404).json({ error: "Target department record not found." });
      return;
    }

    await db.department.delete({ where: { id } });

    res.status(200).json({
      message:
        "Department completely deleted. Associated employee paths unlinked.",
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to purge department structure",
      details: String(error),
    });
  }
};
