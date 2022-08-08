import {
  Control,
  ControllerProps,
  Path,
  UseControllerProps,
} from "react-hook-form";

export type FieldsetProps<T> = {
  isFullWidth?: boolean;
  inputWidth?: string;
  required?: string;
  label: string;
  control: Control<T, object>;
  name: Path<T>;
  rules?: UseControllerProps<T>["rules"];
  render?: ControllerProps<T>["render"];
};
