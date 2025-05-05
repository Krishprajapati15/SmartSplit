import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

const config = defineConfig({
  schema: "./database/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default config;
