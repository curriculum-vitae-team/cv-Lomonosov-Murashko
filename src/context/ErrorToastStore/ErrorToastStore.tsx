import { ErrorToast } from "@components/ErrorToast";
import React, { useContext, useState } from "react";
import {
  ErrorToastContextType,
  ErrorToastStoreProps,
} from "./ErrorToastStore.types";

const ErrorToastContext = React.createContext<ErrorToastContextType>(
  {} as ErrorToastContextType,
);

export const useErrorToast = () => {
  return useContext(ErrorToastContext);
};

export const ErrorToastStore = ({ children }: ErrorToastStoreProps) => {
  const [error, setError] = useState("");

  const handleSetError = (message: string) => {
    setError(message);
  };

  return (
    <ErrorToastContext.Provider
      value={{
        setToastError: handleSetError,
      }}
    >
      {error && <ErrorToast message={error} />}
      {children}
    </ErrorToastContext.Provider>
  );
};
