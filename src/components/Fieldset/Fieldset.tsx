import { FormLabel, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { StyledFieldsetWrapper } from "./Fieldset.styles";
import { FieldsetProps } from "./Fieldset.types";

export const Fieldset = <T,>({
  isFullWidth,
  inputWidth,
  name,
  required,
  control,
  rules,
  label,
  render,
}: FieldsetProps<T>) => {
  return (
    <StyledFieldsetWrapper isFullWidth={isFullWidth} inputWidth={inputWidth}>
      <FormLabel required={!!required}>{label}</FormLabel>
      <Controller
        control={control}
        rules={rules}
        name={name}
        render={
          render
            ? render
            : ({ field }) => (
                <TextField
                  {...field}
                  error={!field.value}
                  helperText={!field.value ? required : " "}
                />
              )
        }
      ></Controller>
    </StyledFieldsetWrapper>
  );
};
