// 1. FORCE load environment variables before doing anything else!
import "dotenv/config";

// 1. Import the database driver package for PostgreSQL ('pg')
// We use the 'Pool' class to manage a collection of reusable connections to our database.
import pg from "pg";

// 2. Import the specialized adapter from Prisma that translates between Prisma and the 'pg' driver.
import { PrismaPg } from "@prisma/adapter-pg";

// 3. Import the core PrismaClient class from your custom, locally generated folder.
// Note the explicit '.js' extension at the end - this is mandatory for Node.js ES Modules.
import { PrismaClient } from "../../prisma/generated/client/index.js";

/**
 * 4. TypeScript Global Scope Extension
 * In development, tools like 'tsx' or 'nodemon' reload your code every time you save a file.
 * If we just instantiate a new PrismaClient normally, every single file save would open a brand new connection pool to your database, quickly exhausting your database's connection limit.
 *
 * We extend the global Node.js variable space to store a reference to our database connection, ensuring it survives across hot-reloads during development.
 */
declare global {
  var prisma: PrismaClient | undefined;
}

// 5. Extract the connection string out of your hidden environment (.env) file.
const connectionString = process.env.DATABASE_URL;

// 6. Create a native PostgreSQL Connection Pool using the connection string.
// This pool manages opening, closing, and keeping database connections alive.
const pool = new pg.Pool({ connectionString });

// 7. Wrap the connection pool insde Prisma's driver adapter wrapper.
// This tells Prisma: "When you want to run a SQL query, pass it to this 'pg' pool."
const adapter = new PrismaPg(pool);

/**
 * 8. The Singleton Pattern Instance
 * We check if 'globalThis.prisma' already holds an open database connection from a previous save.
 * - If it DOES exist: we reuse it.
 * - If it DOES NOT exist: we instantiate a brand new PrismaClient, passing it our adapter, and configuring it to log queries to our console only while we are developing.
 */
export const db =
  globalThis.prisma ||
  new PrismaClient({
    adapter,
    log:
      process.env.NODE_ENV === "development"
        ? ["query", "error", "warn"]
        : ["error"],
  });

// 9. If we are running in development mode, save this instance into the global space
// so it can be reused the next time a file is saved and reloaded
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
