// src/types/express.d.ts
import { Role } from "../../prisma/generated/client/index.js";

// Open up the global Express namespace to add our custom runtime property
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        role: Role;
      };
    }
  }
}
