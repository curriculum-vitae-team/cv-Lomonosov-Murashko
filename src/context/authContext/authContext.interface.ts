import { AuthUserInfo } from "@graphql/Auth/Auth.interface";
import { IAuth } from "@interfaces/IAuth";
import { User } from "@graphql/User/User.interface";

export interface IAction {
  type: string;
  payload?: any;
}

export interface IContext {
  user: User;
  login: (userData: AuthUserInfo, isMemorized: boolean) => void;
  logout: () => void;
}
