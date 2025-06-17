import { Elysia } from "elysia";
import { APP_PORT } from "./config/env";
import cors from "@elysiajs/cors";
import { elysiaHelmet } from "elysiajs-helmet";
import { loggerPlugin } from "./plugins/logger";
import { rbacPlugin } from "./plugins/rbac";
import { authPlugin } from "./plugins/auth";

const api = new Elysia();

// Security
api.use(
  cors({
      origin: "*",
      credentials: true,
      exposeHeaders: "*",
      allowedHeaders: "*",
      methods: "*",
  })
);
api.use(elysiaHelmet({}));

// Custom Plugins
api.use(loggerPlugin);
api.use(authPlugin);
api.use(rbacPlugin);

// Routes


// Run
api.listen(APP_PORT);

// Elysia welcome
console.log('🦊 Elysia running on http://localhost:3000');