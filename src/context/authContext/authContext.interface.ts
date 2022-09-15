import { AuthUserInfo } from "@graphql/Auth/Auth.interface";
import { User } from "@interfaces/user.interface";

export interface IAction {
  type: string;
  payload?: any;
}

export interface IContext {
  user: User;
  login: (userData: AuthUserInfo, isMemorized: boolean) => void;
  logout: () => void;
}

export interface IAuthContextProps {
  children?: React.ReactNode;
}
