import { AuthUserInfo } from "@src/graphql/Auth/Auth.interface";
import { User } from "@src/interfaces/user.interface";
import {
  action,
  autorun,
  makeAutoObservable,
  makeObservable,
  observable,
  runInAction,
} from "mobx";
import { IAuthStore } from "./AuthStore.types";
import {
  deleteUserInfoFromLocalStorage,
  getUserInfoFromLocalStorage,
  isUserExists,
  setUserInfoToLocalStorage,
} from "@helpers/localStorage";

export class AuthStore implements IAuthStore {
  user: User | null = null;

  constructor() {
    this.restoreUser();
    makeObservable(this, { restoreUser: false });
  }

  login = (userData: AuthUserInfo, isMemorized: boolean) => {
    const { user, access_token } = userData;
    this.user = user;

    setUserInfoToLocalStorage({ user, access_token, isMemorized });
  };

  logout = () => {
    this.user = null;
    deleteUserInfoFromLocalStorage();
  };

  restoreUser = () => {
    if (isUserExists()) {
      const { user, isMemorized } = getUserInfoFromLocalStorage();
      if (isMemorized) {
        this.user = user;
      } else {
        deleteUserInfoFromLocalStorage();
      }
    }
  };
}
