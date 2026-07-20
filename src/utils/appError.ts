/**
 * Custom Error class for operational, predictable API errors.
 */
export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number = 500) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true; // Operational errors are expected bugs (e.g. invalid inputs)

    Error.captureStackTrace(this, this.constructor);
  }
}
