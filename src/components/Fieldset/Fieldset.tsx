import { TextField } from "@mui/material";
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
  type,
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
            : ({ field, fieldState }) => (
                <TextField
                  {...field}
                  type={type}
                  required={!!required}
                  label={label}
                  error={fieldState.isTouched && !field.value}
                  helperText={!field.value ? required : " "}
                />
              )
        }
      ></Controller>
    </StyledFieldsetWrapper>
  );
};
