import { AuthContext } from "@context/authContext/authContext";
import { GuardFunction } from "@helpers/guard";
import { useContext } from "react";
import { Outlet, RouteProps } from "react-router";

export type ProtectedRouteProps = RouteProps & {
  fallback: () => JSX.Element | null;
  guards: GuardFunction[];
};

export const ProtectedRoute = ({
  guards,
  fallback,
}: ProtectedRouteProps) => {
  const { user } = useContext(AuthContext);  

  return (
    <>{guards.every((guard) => guard(user)) ? <Outlet /> : fallback()}</>
  );
};
