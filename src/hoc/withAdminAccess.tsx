import { AuthContext } from "@context/authContext/authContext";
import { ROLES } from "@constants/roles";
import { useContext } from "react";
import { FormSaveButtonProps } from "@components/FormSaveButton/FormSaveButton.types";

export const withAdminAccess =
  <T extends {}>(Component: React.ComponentType<T>) =>
  (props: T & FormSaveButtonProps) => {
    const { user } = useContext(AuthContext);

    return (
      <>
        {user.role === ROLES.ADMIN || props?.allowAccess ? (
          <Component {...props} />
        ) : (
          <></>
        )}
      </>
    );
  };
