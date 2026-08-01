import { Router } from "express";
import { checkAuth, requireRoles } from "../../middleware/auth.middleware.js";
import { getDashboardData } from "./dashboard.controller.js";

const router = Router();

router.get(
  "/stats",
  checkAuth,
  requireRoles(["HR_ADMIN", "SUPER_ADMIN"]),
  getDashboardData,
);

export default router;
