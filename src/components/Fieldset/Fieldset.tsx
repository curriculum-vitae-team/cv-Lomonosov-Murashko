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
      <Controller
        control={control}
        rules={{ required, ...rules }}
        name={name}
        render={
          render
            ? render
            : ({ field }) => (
                <TextField
                  {...field}
                  required={!!required}
                  label={label}
                  error={!field.value}
                  helperText={!field.value ? required : " "}
                />
              )
        }
      ></Controller>
    </StyledFieldsetWrapper>
  );
};
