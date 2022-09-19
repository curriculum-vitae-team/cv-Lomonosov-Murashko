import { AuthContext } from "@context/authContext/authContext";
import { useContext } from "react";
import { FormSaveButtonProps } from "@components/FormSaveButton/FormSaveButton.types";
import { UserRoles } from "@src/constants/user-roles.constants";

export const withAdminAccess =
  <T extends {}>(Component: React.ComponentType<T>) =>
  (props: T & FormSaveButtonProps) => {
    const { user } = useContext(AuthContext);

    return (
      <>
        {user?.role === UserRoles.Admin || props?.allowAccess ? (
          <Component {...props} />
        ) : (
          <></>
        )}
      </>
    );
  };
