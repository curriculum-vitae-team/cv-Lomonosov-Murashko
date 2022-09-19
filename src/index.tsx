import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";
import { AuthProvider } from "@context/authContext/authContext";
import { AuthStore } from "./stores/AuthStore/AuthStore";

const root = createRoot(document.getElementById("root")!);
root.render(
  <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>,
);
