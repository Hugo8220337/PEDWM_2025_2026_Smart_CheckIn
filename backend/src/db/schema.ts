import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const entityTable = pgTable("Entity", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).defaultNow().notNull(),
});

// export const entityTickets = pgTable("tickets", {

// });
