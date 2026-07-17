import { Router } from "express";
import { register, login } from "./auth.controller.js"; // Notice the required local .js file rule.

const router = Router();

// Route mapping pointing directly to controller operations
router.post("/register", register);
router.post("/login", login);

export default router;
