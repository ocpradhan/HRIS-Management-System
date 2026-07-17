import "dotenv/config";

import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // The connection string defined here is used by the CLI for migrations
    url: env("DATABASE_URL"),
  },
});
