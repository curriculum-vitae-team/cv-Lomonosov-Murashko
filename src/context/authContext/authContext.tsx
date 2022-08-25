import React, { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";
import { AuthUserInfo } from "@graphql/Auth/Auth.interface";
import { IUserInfo } from "@interfaces/IAuth";
import { IAction, IContext, IDecodedToken } from "./authContext.interface";
import { ACTIONS } from "@constants/actions";

const initialState = {
  user: {},
};

if (localStorage.getItem("user")) {
  const { user, access_token, isMemorized } = JSON.parse(
    localStorage.getItem("user") || "",
  );
  const decodedToken: IDecodedToken = jwtDecode(access_token);
  initialState.user = { ...user };

  if (Date.now() > decodedToken.exp * 1000 || !isMemorized)
    localStorage.removeItem("user");
}

const AuthContext = createContext({} as IContext);

function authReducer(state: IUserInfo, action: IAction) {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case ACTIONS.LOGOUT: {
      return {
        ...state,
        user: null,
      };
    }
    default:
      return state;
  }
}

function AuthProvider(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (
    { user, access_token }: AuthUserInfo,
    isMemorized: boolean,
  ) => {
    dispatch({
      type: ACTIONS.LOGIN,
      payload: user,
    });
    localStorage.setItem(
      "user",
      JSON.stringify({ user, access_token, isMemorized }),
    );
  };

  const logout = () => {
    dispatch({ type: ACTIONS.LOGOUT });
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
