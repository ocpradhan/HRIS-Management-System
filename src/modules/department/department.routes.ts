import { Router } from "express";
import {
  createDepartment,
  deleteDepartment,
  getAllDepartments,
  updateDepartment,
} from "./department.controller.js";
import { checkAuth, requireRoles } from "../../middleware/auth.middleware.js";

const router = Router();

// Everyone authenticated can view corporate structural segments
router.get("/", checkAuth, getAllDepartments);

// Modification actions are completely locked to administrative clearance profiles
router.post(
  "/",
  checkAuth,
  requireRoles(["SUPER_ADMIN", "HR_ADMIN"]),
  createDepartment,
);
router.patch(
  "/:id",
  checkAuth,
  requireRoles(["SUPER_ADMIN", "HR_ADMIN"]),
  updateDepartment,
);
router.delete(
  "/:id",
  checkAuth,
  requireRoles(["SUPER_ADMIN", "HR_ADMIN"]),
  deleteDepartment,
);

export default router;
