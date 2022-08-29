import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { browserHistory } from "./browserHistory";
import { ROUTE } from "./constants/route";
import {
  deleteUserInfoFromLocalStorage,
  getUserInfoFromLocalStorage,
} from "@helpers/localStorage";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_BACKEND,
});

const authLink = setContext((_, { headers }) => {
  const { access_token } = getUserInfoFromLocalStorage();
  return {
    headers: {
      ...headers,
      authorization: access_token ? `Bearer ${access_token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      if (message === "Unauthorized") {
        deleteUserInfoFromLocalStorage();
        browserHistory.push(ROUTE.SIGN_IN);
      }
    });
  }
  if (networkError) {
    if ("statusCode" in networkError && networkError.statusCode === 401) {
      deleteUserInfoFromLocalStorage();
      browserHistory.push(ROUTE.SIGN_IN);
    }
  }
});

export const client = new ApolloClient({
  link: authLink.concat(errorLink.concat(httpLink)),
  cache: new InMemoryCache(),
});
