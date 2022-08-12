import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
);
