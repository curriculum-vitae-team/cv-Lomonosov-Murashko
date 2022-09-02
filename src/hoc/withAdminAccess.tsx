import { AuthContext } from "@context/authContext/authContext";
import { ROLES } from "@constants/roles";
import { useContext } from "react";

export const withAdminAccess =
  <T extends object>(Component: React.ComponentType<T>) =>
  (props: T) => {
    const { user } = useContext(AuthContext);

    return <>{user.role === ROLES.ADMIN ? <Component {...props} /> : <></>}</>;
  };
