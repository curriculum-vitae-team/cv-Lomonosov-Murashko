import React, { createContext, useEffect, useState } from "react";
import { IAuthContextProps, IContext } from "./authContext.interface";
import { observer } from "mobx-react";
import { authStore, AuthStore } from "@src/stores/AuthStore/AuthStore";
import { autorun } from "mobx";

const AuthContext = createContext({} as IContext);

const AuthProvider = observer(({ children }: IAuthContextProps) => {
  const { user, login, logout } = authStore;

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
});

export { AuthContext, AuthProvider };
