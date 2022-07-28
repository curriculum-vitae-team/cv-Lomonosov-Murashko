import { Navigate } from "react-router";
import { RedirectPageProps } from "./RedirectPage.types";

export const RedirectPage = ({ to }: RedirectPageProps) => {
  return <Navigate to={to} />;
};
