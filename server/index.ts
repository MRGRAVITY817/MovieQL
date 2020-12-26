import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolver";

const server: GraphQLServer = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() =>
  console.log("Graphql server running, Playground here - http://localhost:4000")
);
