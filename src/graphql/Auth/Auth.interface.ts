import { User } from "@graphql/User/User.interface";

export interface AuthInputData {
  auth: AuthInput;
}

export interface AuthOutputData {
  signup: AuthUserInfo;
}

export interface AuthInput {
  email: string;
  password: string;
}

export interface AuthUserInfo {
  user: User;
  access_token: string;
}
