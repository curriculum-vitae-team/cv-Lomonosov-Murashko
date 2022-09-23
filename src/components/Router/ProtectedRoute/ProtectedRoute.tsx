import { GuardFunction } from "@helpers/guard";
import { ROUTE } from "@src/constants/route";
import { authStore } from "@src/stores/AuthStore/AuthStore";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Outlet, RouteProps, useLocation, useNavigate } from "react-router";

export type ProtectedRouteProps = RouteProps & {
  fallback: () => JSX.Element | null;
  guards: GuardFunction[];
};

export const ProtectedRoute = observer(
  ({ guards, fallback }: ProtectedRouteProps) => {
    const { user$ } = authStore;

    return (
      <>{guards.every((guard) => guard(user$)) ? <Outlet /> : fallback()}</>
    );
  },
);
