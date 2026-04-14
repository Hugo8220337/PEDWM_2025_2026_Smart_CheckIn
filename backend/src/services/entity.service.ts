import { db } from "../db";
import { entityTable } from "../db/schema";
import { eq } from "drizzle-orm";

export const EntityService = {
  findAll: () => db.select().from(entityTable),

  findById: (id: string) =>
    db
      .select()
      .from(entityTable)
      .where(eq(entityTable.id, id))
      .then((r) => r[0] ?? null),

  create: (data: { name: string }) =>
    db
      .insert(entityTable)
      .values(data)
      .returning()
      .then((r) => r[0]),
};
