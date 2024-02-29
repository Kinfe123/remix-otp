import { sqliteTable, text, integer  } from "drizzle-orm/sqlite-core";

export const opts = sqliteTable("otps", {
  id: integer("id").primaryKey(),
  name:text('name').notNull(),
  opt: integer("optcode").notNull(),
  email: text("email").notNull(),
});