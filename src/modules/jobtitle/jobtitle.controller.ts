import type { Request, Response } from "express";
import { db } from "../../config/db.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import { AppError } from "../../utils/appError.js";

/**
 * Provisions a brand new corporate job title / position role.
 * Restricted to administrative tiers.
 */
export const createJobTitle = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { title, salaryGrade } = req.body;

    if (!title || typeof title !== "string" || title.trim() === "") {
      throw new AppError("Job title is mandatory string property.", 400);
    }

    // Check for duplicate titles to prevent database constraint duplication failures
    const existingTitle = await db.jobTitle.findUnique({
      where: { title: title.trim() },
    });
    if (existingTitle) {
      throw new AppError(
        "A job title with this designation already exists.",
        409,
      );
    }

    const newJobTitle = await db.jobTitle.create({
      data: {
        title: title.trim(),
        salaryGrade: salaryGrade ? String(salaryGrade).trim() : null,
      },
    });

    res.status(201).json({
      message: "Job title registered successfully",
      jobtitle: newJobTitle,
    });
  },
);

/**
 * Retrieves all registered job titles alongside an active count of assigned personnel.
 * Accessible by all authenticated accounts.
 */
export const getAllJobTitles = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const jobTitles = await db.jobTitle.findMany({
      include: {
        _count: {
          select: { employees: true },
        },
      },
      orderBy: {
        title: "asc",
      },
    });

    res.status(200).json(jobTitles);
  },
);

/**
 * Updates an existing job title's attributes
 * Restricted to administrative tiers
 */
export const updateJobTitle = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { title, salaryGrade } = req.body;

    const targetExists = await db.jobTitle.findUnique({ where: { id } });
    if (!targetExists) {
      throw new AppError("Target job title record not found", 404);
    }

    const updateData: { title?: string; salaryGrade?: string | null } = {};
    if (typeof title === "string" && title.trim() !== "") {
      const duplicateTitle = await db.jobTitle.findFirst({
        where: { title: title.trim(), NOT: { id } },
      });
      if (duplicateTitle) {
        throw new AppError(
          "Another position already uses this job title.",
          409,
        );
      }
      updateData.title = title.trim();
    }

    if (salaryGrade !== undefined) {
      updateData.salaryGrade = salaryGrade ? String(salaryGrade).trim() : null;
    }

    const updatedJobTitle = await db.jobTitle.update({
      where: { id },
      data: updateData,
    });
    res.status(200).json({
      message: "Job title updated successfully.",
      jobTitle: updatedJobTitle,
    });
  },
);

/**
 * Completely purges a job title options from the HRIS engine.
 * Affected employee profiles will automatically have their jobTitleId safely set to null.
 */
export const deleteJobTitle = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    const targetExists = await db.jobTitle.findUnique({ where: { id } });
    if (!targetExists) {
      throw new AppError("Target job title record not found.", 404);
    }

    await db.jobTitle.delete({ where: { id } });
    res.status(200).json({
      message:
        "Job title successfully purged. Associated employee fields unlinked.",
    });
  },
);
