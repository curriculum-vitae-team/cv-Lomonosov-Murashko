import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller } from "react-hook-form";
import { MultipleSelectProps } from "./MultipleSelect.types";

export const MultipleSelect = <T,>({
  name,
  control,
  title,
  entries,
}: MultipleSelectProps<T>) => {
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={({ field: { name, onBlur, onChange, ref, value } }) => (
          <>
            <Select
              name={name}
              id={name}
              labelId={title + "-label"}
              label={title}
              value={value}
              onChange={onChange}
              ref={ref}
              onBlur={onBlur}
              displayEmpty={true}
              sx={{ width: "15em" }}
            >
              {entries &&
                entries.map((entry) => (
                  <MenuItem key={entry.id} value={entry.id}>
                    {entry.name}
                  </MenuItem>
                ))}
            </Select>
          </>
        )}
      />
    </FormControl>
  );
};
