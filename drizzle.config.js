import { drizzle } from "drizzle-orm/better-sqlite3";
// import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";

const sqlite = new Database("sqlite.db");
// driver and url = better-sqlite and ./sqlite.db on the root dir
export const db = drizzle(sqlite);
// migrate(db, { migrationsFolder: "./app/db/migrations" });