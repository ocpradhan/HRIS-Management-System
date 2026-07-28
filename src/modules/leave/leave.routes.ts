import { Router } from "express";
import { checkAuth } from "../../middleware/auth.middleware.js";
import {
  requestLeave,
  reviewLeaveRequest,
  getLeaveRequests,
} from "./leave.controller.js";

const router = Router();

// All routes require authentication
router.use(checkAuth);

// Submit leave request & list requests
router.post("/", requestLeave);
router.get("/", getLeaveRequests);

// Review (approve/reject) leave request
router.patch("/:id/review", reviewLeaveRequest);

export default router;
