import type { Request, Response } from "express";
import { db } from "../../config/db.js";

/**
 * Provisions a brand new corporate job title / position role.
 * Restricted to administrative tiers.
 */
export const createJobTitle = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { title, salaryGrade } = req.body;

    if (!title || typeof title !== "string" || title.trim() === "") {
      res
        .status(400)
        .json({ error: "Job title is mandatory string property." });
      return;
    }

    // Check for duplicate titles to prevent database constraint duplication failures
    const existingTitle = await db.jobTitle.findUnique({
      where: { title: title.trim() },
    });
    if (existingTitle) {
      res
        .status(409)
        .json({ error: "A job title with this designation already exists." });
      return;
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
  } catch (error) {
    res.status(500).json({
      error: "Failed to create a job title layout.",
      details: String(error),
    });
  }
};

/**
 * Retrieves all registered job titles alongside an active count of assigned personnel.
 * Accessible by all authenticated accounts.
 */
export const getAllJobTitles = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
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
  } catch (error) {
    res.status(500).json({ error: "", details: String(error) });
  }
};

/**
 * Updates an existing job title's attributes
 * Restricted to administrative tiers
 */
export const updateJobTitle = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, salaryGrade } = req.body;

    const targetExists = await db.jobTitle.findUnique({ where: { id } });
    if (!targetExists) {
      res.status(404).json({ error: "Target job title record not found" });
      return;
    }

    const updateData: { title?: string; salaryGrade?: string | null } = {};
    if (typeof title === "string" && title.trim() !== "") {
      const duplicateTitle = await db.jobTitle.findFirst({
        where: { title: title.trim(), NOT: { id } },
      });
      if (duplicateTitle) {
        res
          .status(409)
          .json({ error: "Another position already uses this job title." });
        return;
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
  } catch (error) {
    res.status(500).json({
      error: "Failed to modify job title records.",
      details: String(error),
    });
  }
};

/**
 * Completely purges a job title options from the HRIS engine.
 * Affected employee profiles will automatically have their jobTitleId safely set to null.
 */
export const deleteJobTitle = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { id } = req.params;

    const targetExists = await db.jobTitle.findUnique({ where: { id } });
    if (!targetExists) {
      res.status(404).json({ error: "Target job title record not found." });
    }

    await db.jobTitle.delete({ where: { id } });
    res.status(200).json({
      message:
        "Job title successfully purged. Associated employee fields unlinked.",
    });
  } catch (error) {
    res.status(500).json({
      error: "Failed to purge job title structure.",
      details: String(error),
    });
  }
};
