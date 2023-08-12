import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import pg from "pg";
import { readFileSync } from "fs";
import { resolvers } from "./resolvers.js";
import { dirname, resolve } from "path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const typeDefs = readFileSync(resolve(__dirname, "schema.graphql"), {
  encoding: "utf-8",
});

export interface Context {
  db?: pg.Pool;
}

const db = new pg.Pool({
  user: "postgres",
  host: process.env["DATABASE_HOST"] ?? "localhost",
  database: "population",
  port: 5432,
});

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({ req, res }) => ({
    db,
  }),
});

console.log(`🚀  Server ready at: ${url}`);
