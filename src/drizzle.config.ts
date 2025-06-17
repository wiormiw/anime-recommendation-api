import { defineConfig } from 'drizzle-kit';
import { DATABASE_URL } from "./config/env";

export default defineConfig({
    out: "./db/migrations",
    dialect: "postgresql",
    schema: "./db/schema",
    driver: "pglite",
    dbCredentials: {
        url: DATABASE_URL,
    },
});