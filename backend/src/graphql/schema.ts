export const typeDefs = /* GraphQL */ `
  type Entity {
    id: ID!
    name: String!
    createdAt: String!
  }

  type Query {
    entities: [Entity!]!
    entity(id: ID!): Entity
  }

  type Mutation {
    createEntity(name: String!): Entity!
  }
`;
