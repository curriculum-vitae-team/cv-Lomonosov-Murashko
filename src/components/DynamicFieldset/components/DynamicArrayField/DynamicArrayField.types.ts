import { UseFormRegisterReturn } from "react-hook-form";
import { GenericEntry } from "../../DynamicFieldset.types";

export type DynamicArrayFieldProps<T extends string> = {
  onChange: (name: string, newValue: string) => void;
  onDelete: (name: T) => void;
  value: string;
} & GenericEntry<T>;
