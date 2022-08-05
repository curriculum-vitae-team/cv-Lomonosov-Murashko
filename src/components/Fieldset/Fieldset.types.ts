import { Control, ControllerProps, UseControllerProps } from "react-hook-form";

export type FieldsetProps<T> = OwnProps &
  OwnUseControllerProps<T> &
  OwnControllerProps<T>;

type OwnProps = {
  isFullWidth?: boolean;
  inputWidth?: string;
  required?: string;
  label: string;
};

type OwnUseControllerProps<T> = Pick<
  UseControllerProps<T>,
  "name" | "rules"
> & {
  control: Control<T, object>;
};

type OwnControllerProps<T> = Partial<Pick<ControllerProps<T>, "render">>;
