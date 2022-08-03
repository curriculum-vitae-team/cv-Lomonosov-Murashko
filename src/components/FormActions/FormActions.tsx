import { StyledFormActions } from "./FormActions.styles";
import { FormActionsProps } from "./FormActions.types";

export const FormActions = ({ children }: FormActionsProps) => {
  return <StyledFormActions>{children}</StyledFormActions>;
};
