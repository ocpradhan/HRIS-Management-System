import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../../config/db.js"; // Notice the required modern local .js extension
import { asyncHandler } from "../../utils/asyncHandler.js";
import { AppError } from "../../utils/appError.js";
import { Role } from "../../../prisma/generated/client/index.js";

// A standard rule for cryptography processing speed
const SALT_ROUNDS = 10;
// Fallback secret if the environment variable hasn't been set yet
const JWT_SECRET = process.env.JWT_SECRET || "super_secret_hris_key_fallback";

/**
 * Handles the logic for setting up a brand new corportate User profile
 * and an attached Employee profile inside a single atomic database transaction.
 */
export const register = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password, firstName, lastName, role } = req.body;

    // 1. Core input guard check
    if (!email || !password || !firstName || !lastName) {
      throw new AppError("Missing required account configuration values.", 400);
    }

    if (!Object.values(Role).includes(role)) {
      throw new AppError("Invalid role", 400);
    }
    // 2. Look for existing users to avoid database level constraint duplication crashes
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new AppError(
        "An account with this email address already exists.",
        409,
      );
    }

    // 3. Cryptographically scramble the plaintext password using modern hashing
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // 4. Run an atomic sequential insert using Prisma's structural mapping values.
    // If creating the Employee fail-safes fail, the User model creation rolls back cleanly.
    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        role: role || "EMPLOYEE",
        employee: {
          create: {
            firstName,
            lastName,
          },
        },
      },
      // Explicitly pull back structural properties without including the raw hashed password string
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        employee: true,
      },
    });

    res.status(201).json({
      message: "User and Employee profiles provisioned successfully.",
      user: newUser,
    });
  },
);

/**
 * Handles comparing incoming plaintext credentials against the cryptographically secure record hash and returns a signed JSON Web Token access token payload.
 */
export const login = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new AppError("Email and password are mandatory properties.", 400);
    }

    // 1. Locate the existing user profile by its unique field definition
    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
      throw new AppError("Invalid authentication credentials provided.", 401);
    }

    // 2. Validate incoming password string against database stored secure hash
    const isPasswordValid = await bcrypt.compare(
      password,
      user?.password ?? "",
    );
    if (!isPasswordValid) {
      throw new AppError("Invalid authentication credentials provided.", 401);
      return;
    }

    // 3. Generate a cryptographically signed authorization token payload
    const token = jwt.sign(
      {
        userId: user?.id,
        role: user?.role,
      },
      JWT_SECRET,
      { expiresIn: "8h" }, // Token configuration lives for standard 8 hour corporate shift windows
    );

    res.status(200).json({
      message: "Authentication verification passed successfully",
      token,
      user: {
        id: user?.id,
        email: user?.email,
        role: user?.role,
      },
    });
  },
);
