import { sqliteTable, text, integer  } from "drizzle-orm/sqlite-core";

export const dogs = sqliteTable("otps", {
  id: integer("id").primaryKey(),
  opt: text("optcode").notNull(),
  email: text("email").notNull(),
});