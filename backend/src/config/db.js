import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { ENV } from "./env.js";
import * as schema from "../db/schema.js";

const sqlClient = neon(ENV.DATABASE_URL);
export const db = drizzle(sqlClient, { schema });