import { Router } from "express";
import {
  getAllEmployees,
  getMyProfile,
  updateEmployeeProfile,
} from "./employee.controller.js";
import { checkAuth, requireRoles } from "../../middleware/auth.middleware.js";

const router = Router();

/**
 * Route: GET /api/employees/me
 * Action: Returns the current user's profile
 * Security: Requires a valid active Bearer token
 */
router.get("/me", checkAuth, getMyProfile);

/**
 * Route: PATCH /api/employees/:id
 * Action: Updates target employee profile fields safely
 * Security: Requires authentication. String identification matching is enforced inside controller logic.
 */
router.patch("/:id", checkAuth, updateEmployeeProfile);

/**
 * Route: GET /api/employees
 * Action: Returns the global corporate directory list
 * Security: Requires authentication AND high-level admin clearance
 */
router.get(
  "/",
  checkAuth,
  requireRoles(["SUPER_ADMIN", "HR_ADMIN"]),
  getAllEmployees,
);

export default router;
