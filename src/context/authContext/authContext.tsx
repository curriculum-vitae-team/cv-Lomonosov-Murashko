import { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";
import { AuthOutputData } from "@graphql/Auth/Auth.interface";
import { IUserInfo } from "@interfaces/IAuth";
import { IAction, IContext, IDecodedToken } from "./authContext.interface";
import { ACTIONS } from "@constants/actions";

const initialState = {
  user: {},
};

if (localStorage.getItem("token")) {
  const decodedToken: IDecodedToken = jwtDecode(
    localStorage.getItem("token") || "",
  );

  // TODO: handle token exp time
  if (decodedToken.exp * 1000 > Date.now()) {
    localStorage.removeItem("token");
  } else {
    initialState.user = decodedToken;
  }
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

// TODO: fix any prop
function AuthProvider(props: any) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = ({ signup: { user, access_token } }: AuthOutputData) => {
    localStorage.setItem("token", access_token);
    dispatch({
      type: ACTIONS.LOGIN,
      payload: user,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    dispatch({ type: ACTIONS.LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
