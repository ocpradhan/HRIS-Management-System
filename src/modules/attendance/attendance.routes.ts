import { Router } from "express";
import {
  clockIn,
  clockOut,
  getAttendanceLogs,
} from "./attendance.controller.js";
import { checkAuth } from "../../middleware/auth.middleware.js";

const router = Router();

// Apply auth middleware BEFORE controller handlers
router.use(checkAuth);

router.get("/", getAttendanceLogs);
router.post("/clock-in", clockIn);
router.patch("/clock-out", clockOut);

export default router;
