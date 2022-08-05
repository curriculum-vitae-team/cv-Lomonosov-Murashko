import { Control, ControllerProps, UseControllerProps } from "react-hook-form";

export type DatePickerFieldsetProps<T> = OwnProps & OwnUseControllerProps<T>;

type OwnProps = {
  label: string;
  onError: () => void;
  required: string;
};

type OwnUseControllerProps<T> = Pick<UseControllerProps<T>, "name"> & {
  control: Control<T, object>;
};
