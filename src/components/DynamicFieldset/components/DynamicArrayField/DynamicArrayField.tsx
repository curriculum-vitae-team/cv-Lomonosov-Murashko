import { Close } from "@mui/icons-material";
import {
  IconButton,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledCard } from "./DynamicArrayField.styles";
import { DynamicArrayFieldProps } from "./DynamicArrayField.types";

export const DynamicArrayField = <T extends string>({
  entryName,
  possibleValues,
  registerFnReturn,
  onDelete,
  onChange,
  value,
}: DynamicArrayFieldProps<T>) => {
  const handleChange = (e: SelectChangeEvent) => {
    onChange(entryName, e.target.value);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    onDelete(entryName);
  };

  return (
    <Stack direction="row" gap={3}>
      <StyledCard variant="outlined">
        <Typography>{entryName}</Typography>
        <IconButton sx={{ padding: "0.3em" }} onClick={handleDelete}>
          <Close />
        </IconButton>
      </StyledCard>
      <Select
        onChange={handleChange}
        displayEmpty={true}
        defaultValue={value}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            top: "0",
            bottom: "0",
          },
        }}
      >
        {typeof possibleValues === "object" &&
          possibleValues &&
          Object.entries(possibleValues).map((kv, i) => {
            const keyValue = kv[0] as string;
            const displayedValue = kv[1] as string;

            return (
              <MenuItem key={i} value={displayedValue}>
                {displayedValue}
              </MenuItem>
            );
          })}
      </Select>
    </Stack>
  );
};
