import { Control, Path, UseControllerProps } from "react-hook-form";

import { TextFieldProps } from "@mui/material";

export type DatePickerFieldsetProps<T> = {
  name: Path<T>;
  label: string;
  onError: () => void;
  required: string;
  control: Control<T, object>;
};
