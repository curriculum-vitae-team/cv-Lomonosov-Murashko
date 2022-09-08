import ReactDOM from "react-dom";
import { App } from "./components/App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import { AuthProvider } from "@context/authContext/authContext";

ReactDOM.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById("root"),
);
