import { sqliteTable, text, integer  } from "drizzle-orm/sqlite-core";

export const otps = sqliteTable("otps", {
  id: integer("id").primaryKey(),
  name:text('name').notNull(),
  otp: integer("optcode").notNull(),
  email: text("email").notNull(),
});