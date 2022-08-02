import React, { useContext } from "react";
import {
  BreadcrumbsConfigContext,
  BreadcrumbsConfigProps,
} from "./BreadcrumbsConfig.types";

const Context = React.createContext<BreadcrumbsConfigContext>({});

export const useBreadcrumbsConfig = () => {
  return useContext(Context);
};

export function BreadcrumbsConfig({
  config,
  children,
}: BreadcrumbsConfigProps) {
  return <Context.Provider value={{ ...config }}>{children}</Context.Provider>;
}
