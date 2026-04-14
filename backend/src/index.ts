import cors from "@elysiajs/cors";
import yoga from "@elysiajs/graphql-yoga";
import { Elysia } from "elysia";
import { resolvers } from "./graphql/resolvers";
import { createContext } from "./graphql/context";
import { typeDefs } from "./graphql/schema";

const app = new Elysia()
  .use(cors())
  .use(
    // Usei o plugin do GraphQL yoga porque o GraphQL appolo está muito dependente do nodeJS
    // e este plugin é mantido pela equipa do Elysia
    yoga({
      typeDefs,
      resolvers,
      context: createContext,
    }),
  )
  .get("/health", () => ({ status: "ok" }))
  .listen(process.env.PORT!);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
