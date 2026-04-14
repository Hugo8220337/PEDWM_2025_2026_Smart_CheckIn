import { entityResolvers } from "./entity.resolver";

export const resolvers = {
  Query: {
    ...entityResolvers.Query,
  },
  Mutation: {
    ...entityResolvers.Mutation,
  },
};
