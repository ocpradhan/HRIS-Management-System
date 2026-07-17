import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../../config/db.js"; // Notice the required modern local .js extension

// A standard rule for cryptography processing speed
const SALT_ROUNDS = 10;
// Fallback secret if the environment variable hasn't been set yet
const JWT_SECRET = process.env.JWT_SECRET || "super_secret_hris_key_fallback";

/**
 * Handles the logic for setting up a brand new corportate User profile
 * and an attached Employee profile inside a single atomic database transaction.
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, firstName, lastName, role } = req.body;

    // 1. Core input guard check
    if (!email || !password || !firstName || !lastName) {
      res
        .status(400)
        .json({ error: "Missing required account configuration values." });
      return;
    }

    // 2. Look for existing users to avoid database level constraint duplication crashes
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      res
        .status(409)
        .json({ error: "An account with this email address already exists." });
      return;
    }

    // 3. Cryptographically scramble the plaintext password using modern hashing
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // 4. Run an atomic sequential insert using Prisma's structural mapping values.
    // If creating the Employee fail-safes fail, the User model creation rolls back cleanly.
    const newUser = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        role: role || "Employee",
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
  } catch (error) {
    res.status(500).json({
      error: "Server initialization error during registration,",
      details: String(error),
    });
  }
};

/**
 * Handles comparing incoming plaintext credentials against the cryptographically secure record hash and returns a signed JSON Web Token access token payload.
 */
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .json({ error: "Email and password are mandatory properties." });
      return;
    }

    // 1. Locate the existing user profile by its unique field definition
    const user = await db.user.findUnique({ where: { email } });
    if (!user) {
      res
        .status(401)
        .json({ error: "Invalid authentication credentials provided." });
    }

    // 2. Validate incoming password string against database stored secure hash
    const isPasswordValid = await bcrypt.compare(
      password,
      user?.password ?? "",
    );
    if (!isPasswordValid) {
      res
        .status(401)
        .json({ error: "Invalid authentication credentials provided." });
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
  } catch (error) {
    res.status(500).json({
      error: "Internal failure processing login parameters.",
      details: String(error),
    });
  }
};
