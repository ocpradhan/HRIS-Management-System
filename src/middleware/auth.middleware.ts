import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { Role } from "../../prisma/generated/client/index.js";

// Retrieve the token validation signature secret string
const JWT_SECRET = process.env.JWT_SECRET || "super_secret_hris_key_fallback";

// Define the shape of the decoded payload inside the token
interface TokenPayload {
  userId: string;
  role: Role;
}

/**
 * Authentication Gatekeeper Middleware
 * Verifies that the incoming request contains a valid Bearer token in the headers.
 */
export const checkAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    // 1. Extract the Authorization header string
    const authHeader = req.headers.authorization;

    // 2. Ensure it exists and follows the 'Bearer <token>' format standard
    if (!authHeader || !authHeader.startsWith("Bearer")) {
      res.status(401).json({
        error: "Access denied. Missing or malformed authorization token.",
      });
      return;
    }

    // 3. Strip the 'Bearer' prefix to get the raw string token
    const token = authHeader.split(" ")[1];

    if (!token) {
      res
        .status(401)
        .json({ error: "Access denied. Token signature string is missing." });
      return;
    }

    // 4. Verify the cryptographic token signature against our secret
    const decoded = jwt.verify(token, JWT_SECRET) as TokenPayload;

    // 5. Attach the verified identity properties directly to the network request object
    req.user = {
      userId: decoded.userId,
      role: decoded.role,
    };

    // 6. Authentication passed! Hand off execution to the next function in line
    next();
  } catch (error) {
    // If the token is expired or has been altered maliciously, catch it immediately
    res
      .status(401)
      .json({ error: "Authentication failed. Token is invalid or expired." });
  }
};

/**
 * Role Gatekeeper Middleware (RBAC - Role-Based Access Control)
 * Restricts access to specific endpoints based on user permissions.
 */
export const requireRoles = (allowedRoles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    // Ensure the checkAuth middleware ran first and verified the user identity
    if (!req.user) {
      res.status(401).json({ message: "Authentication required." });
      return;
    }

    // Check if the user's role exists inside the array of allowed execution roles
    if (!allowedRoles.includes(req.user.role)) {
      res.status(403).json({
        message:
          "Forbidden. You do not have permission to perform this action.",
      });
    }

    next();
  };
};
