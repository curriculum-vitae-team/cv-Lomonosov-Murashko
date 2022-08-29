import { Control, Path } from "react-hook-form";

export type DatePickerFieldsetProps<T> = {
  name: Path<T>;
  label: string;
  required: string;
  control: Control<T, object>;
};
