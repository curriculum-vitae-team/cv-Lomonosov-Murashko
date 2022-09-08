import { AuthContext } from "@context/authContext/authContext";
import { GuardFunction } from "@helpers/guard";
import { useContext } from "react";
import { Outlet, RouteProps } from "react-router";

export type ProtectedRouteProps = RouteProps & {
  fallback: () => JSX.Element | null;
  guards: GuardFunction[];
};

export const ProtectedRoute = ({ guards, fallback }: ProtectedRouteProps) => {
  const { user } = useContext(AuthContext);

  if (user && Object.keys(user).length === 0) {
    return null;
  }

  return <>{guards.every((guard) => guard(user)) ? <Outlet /> : fallback()}</>;
};
