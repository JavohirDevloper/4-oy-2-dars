import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";


const typeDefs = readFileSync("./src/schema/01_exam_schema.gql", "utf-8");
console.log(typeDefs);
const resolvers = {
  Query: {
    ping: () => "Ishladiyuu :)"
    }
  }

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, { listen: { port: 8585 } }).then(({ url }) => {
  console.log(`Server is running on url: ${url}`);
});
