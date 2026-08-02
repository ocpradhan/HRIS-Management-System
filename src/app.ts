import express from "express";
import cors from "cors";
import { db } from "./config/db.js";

// Import modules
import authRoutes from "./modules/auth/auth.routes.js";
import employeeRoutes from "./modules/employee/employee.routes.js";
import departmentRoutes from "./modules/department/department.routes.js";
import jobtitleRoutes from "./modules/jobtitle/jobtitle.routes.js";
import leaveRoutes from "./modules/leave/leave.routes.js";
import attendanceRoutes from "./modules/attendance/attendance.routes.js";
import performanceReviewRoutes from "./modules/performanceReview/performanceReview.routes.js";
import dashboardRoutes from "./modules/dashboard/dashboard.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/job-titles", jobtitleRoutes);
app.use("/api/leave", leaveRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/performance", performanceReviewRoutes);
app.use("/api/dashboard", dashboardRoutes);

// Health check endpoint
app.get("/health", async (req, res) => {
  try {
    const userCount = await db.user.count();
    res.status(200).json({ status: "healthy", databaseUsers: userCount });
  } catch (error) {
    res.status(500).json({ status: "database error", details: String(error) });
  }
});

// Mount the global error middleware at the VERY END
app.use(errorHandler);

export default app;
