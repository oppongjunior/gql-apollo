const { ApolloServer, gql } = require("apollo-server");
const SessionAPI = require("./DataSource/sessions");

const typeDefs = require("./Schemas/Schema")
const dataSources = () => ({
  sessionAPI: new SessionAPI(),
});
const resolvers =require("./Resolvers/Resolvers")

const server = new ApolloServer({ typeDefs, resolvers, dataSources });
server
  .listen(5000)
  .then(({ url }) => console.log(`graphQL running at ${url}`))
  .catch((err) => console.log(err));
 