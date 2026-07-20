import express from "express";
import { db } from "./config/db.js"; // Remember the modern .js rule
import authRoutes from "./modules/auth/auth.routes.js"; // Mount our new module cleanly
import employeeRoutes from "./modules/employee/employee.routes.js";
import departmentRoutes from "./modules/department/department.routes.js";
import jobtitleRoutes from "./modules/jobtitle/jobtitle.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();
app.use(express.json());

// Bind the router system to an explicit api context space
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/job-titles", jobtitleRoutes);

app.get("/health", async (req, res) => {
  try {
    // Just a quick call to check if Prisma compiles
    const userCount = await db.user.count();
    res.status(200).json({ status: "healthy", databaseUsers: userCount });
  } catch (error) {
    res.status(500).json({ status: "database error", details: String(error) });
  }
});

// Mount the global error middleware at the VERY END
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(
    `🚀 Production-ready HRIS Engine running on http://localhost:${PORT}`,
  );
});
