import { t, type UnwrapSchema } from 'elysia'

export const EntitiyModel = {
    Entity: t.Object({
        id: t.String(),
        name: t.String(),
    }),

    EntityCreateInput: t.Object({
        name: t.String(),
    }),

    EntityUpdateInput: t.Object({
        name: t.Optional(t.String()),
    })
} as const

export type Entity = UnwrapSchema<typeof EntitiyModel.Entity>
export type EntityCreateInput = UnwrapSchema<typeof EntitiyModel.EntityCreateInput>
export type EntityUpdateInput = UnwrapSchema<typeof EntitiyModel.EntityUpdateInput>