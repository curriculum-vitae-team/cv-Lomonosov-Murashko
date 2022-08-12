import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_BACKEND,
});

console.log(process.env.REACT_APP_GRAPHQL_BACKEND);

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
