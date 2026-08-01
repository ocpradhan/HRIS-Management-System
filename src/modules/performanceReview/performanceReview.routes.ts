import { Router } from "express";
import { checkAuth, requireRoles } from "../../middleware/auth.middleware.js";
import {
  createReview,
  getEmployeeReviews,
  getPerformanceSummary,
} from "./performanceReview.controller.js";

const router = Router();

router.use(checkAuth);

router.get("/", getEmployeeReviews);
router.post("/", createReview);
router.get("/summary/:employeeId", getPerformanceSummary);

export default router;
