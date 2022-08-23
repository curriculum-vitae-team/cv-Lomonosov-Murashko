import { AuthOutputData } from "@graphql/Auth/Auth.interface";

export interface IAction {
  type: string;
  payload?: any;
}

export interface IContext {
  name: null;
  login: (userData: AuthOutputData) => void;
  logout: () => void;
}

export interface IDecodedToken {
  exp: number;
  iat: number;
  sub: number;
  email: string;
}
