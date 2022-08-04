import { FormLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { StyledFieldsetWrapper } from "./Fieldset.styles";
import { FieldsetProps } from "./Fieldset.types";

export const Fieldset = <T,>({
  isFullWidth,
  inputWidth,
  isError,
  helperText,
  name,
  required,
  control,
  rules,
  label,
}: FieldsetProps<T>) => {
  return (
    <StyledFieldsetWrapper isFullWidth={isFullWidth} inputWidth={inputWidth}>
      <FormLabel required={required}>{label}</FormLabel>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={({ field }) => (
          <TextField
            {...field}
            error={isError}
            helperText={helperText || " "}
          />
        )}
      ></Controller>
    </StyledFieldsetWrapper>
  );
};
