import { History, createBrowserHistory } from "history";

export type ReadonlyBrowserHistory = Readonly<History>;

export const browserHistory: ReadonlyBrowserHistory = createBrowserHistory();
