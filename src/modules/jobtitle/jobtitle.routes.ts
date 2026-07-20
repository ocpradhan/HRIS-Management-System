import { Router } from "express";
import { checkAuth, requireRoles } from "../../middleware/auth.middleware.js";
import {
  createJobTitle,
  deleteJobTitle,
  getAllJobTitles,
  updateJobTitle,
} from "./jobtitle.controller.js";

const router = Router();

// General view access for directory searches
router.get("/", getAllJobTitles);

// Administrative restricted mutation operations
router.post(
  "/",
  checkAuth,
  requireRoles(["SUPER_ADMIN", "HR_ADMIN"]),
  createJobTitle,
);
router.patch(
  "/:id",
  checkAuth,
  requireRoles(["SUPER_ADMIN", "HR_ADMIN"]),
  updateJobTitle,
);
router.delete(
  "/:id",
  checkAuth,
  requireRoles(["SUPER_ADMIN", "HR_ADMIN"]),
  deleteJobTitle,
);

export default router;
