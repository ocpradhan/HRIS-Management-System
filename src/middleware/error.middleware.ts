import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError.js";

/**
 * Centralized Error Interceptor
 * Replaces controller try/catch blocks with uniform error formatting.
 */
export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  let statusCode = 500;
  let message = "An unexpected internal server error occured.";

  // 1. Handle custom operational errors
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }
  // 2. Handle Prisma Unique Constraint Failures (P2002)
  else if ("code" in err && err.code === "P2002") {
    statusCode = 409;
    const targetField = (err as Record<string, any>).meta?.target;
    message = `Duplicate entry error: A record with that ${targetField || "value"} already exists.`;
  }
  // 3. Handle Prisma Record Not Found Failures (P2025)
  else if ("code" in err && err.code === "P2025") {
    statusCode = 404;
    message = "Target record not found in the database.";
  }
  // 4. Fallback for unhandled general errors
  else {
    message = err.message || message;
  }

  // Log error stack trace to console during development
  if (process.env.NODE_ENV === "development") {
    console.error("🔥 [Global Error Handler]:", err);
  }

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};
