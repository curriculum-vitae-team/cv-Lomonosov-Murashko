import { Fieldset } from "@components/Fieldset";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { DatePickerFieldsetProps } from "./DatePickerFieldset.types";

export const DatePickerFieldset = <T,>({
  control,
  name,
  label,
  onError,
  required,
}: DatePickerFieldsetProps<T>) => {
  return (
    <Fieldset
      control={control}
      name={name}
      label={label}
      render={({ field, fieldState }) => (
        <DatePicker
          label={label}
          minDate={new Date("1980-01-01")}
          maxDate={new Date("2099-01-01")}
          onError={onError}
          {...field}
          renderInput={(params) => (
            <TextField
              {...params}
              label=""
              helperText={required || " "}
              error={!!fieldState.error}
            />
          )}
        />
      )}
    />
  );
};
