import { config } from "dotenv";

const isProduction = process.env.ENV === "prod";
config({ path: isProduction ? ".env.prod" : ".env" });

// env variables
export const PORT = process.env["PORT"] || "";
export const CORS_ORIGIN = process.env["CORS_ORIGIN"] || "";
export const DB_HOST = process.env["DB_HOST"] || "";
export const DB_PORT = parseInt(process.env["DB_PORT"] || "");
export const DB_USERNAME = process.env["DB_USERNAME"] || "";
export const DB_PASS = process.env["DB_PASS"] || "";
export const DB_NAME = process.env["DB_NAME"] || "";
export const EXPRESS_SESSION_SECRET =
  process.env["EXPRESS_SESSION_SECRET"] || "";

// required env check
const throwEnvErr = (name: string) => {
  throw new Error(`${name} is required environment variable`);
};

if (!PORT) throwEnvErr("PORT");
if (!CORS_ORIGIN) throwEnvErr("CORS_ORIGIN");
if (!DB_HOST) throwEnvErr("DB_HOST");
if (!DB_PORT) throwEnvErr("DB_PORT");
if (!DB_USERNAME) throwEnvErr("DB_USERNAME");
if (!DB_PASS) throwEnvErr("DB_PASS");
if (!DB_NAME) throwEnvErr("DB_NAME");
if (!EXPRESS_SESSION_SECRET) throwEnvErr("EXPRESS_SESSION_SECRET");
