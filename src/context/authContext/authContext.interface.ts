import { AuthUserInfo } from "@graphql/Auth/Auth.interface";
import { IAuth } from "@interfaces/IAuth";

export interface IAction {
  type: string;
  payload?: any;
}

export interface IContext {
  user: IAuth;
  login: (userData: AuthUserInfo, isMemorized: boolean) => void;
  logout: () => void;
}

export interface IDecodedToken {
  exp: number;
  iat: number;
  sub: number;
  email: string;
}
