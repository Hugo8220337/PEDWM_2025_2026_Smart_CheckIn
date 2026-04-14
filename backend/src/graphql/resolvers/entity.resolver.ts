import { EntityService } from "../../services/entity.service";

export const entityResolvers = {
  Query: {
    entities: () => EntityService.findAll(),
    entity: (_: unknown, { id }: { id: string }) => EntityService.findById(id),
  },
  Mutation: {
    createEntity: (_: unknown, args: { name: string }) =>
      EntityService.create(args),
  },
};
