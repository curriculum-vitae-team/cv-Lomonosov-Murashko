import React from "react";
import { DynamicArrayFieldProps } from "./components/DynamicArrayField/DynamicArrayField.types";

export type DynamicFieldsetProps<T extends string> = {
  onNew: (entryName: T) => void;
  children?: React.ReactElement<DynamicArrayFieldProps<T>>[];
  inputEntries: InputGenericEntry<T>[];
};

export type GenericEntry<T> = {
  entryName: T;
  possibleValues: unknown;
};

export type InputGenericEntry<T> = {
  entryName: T;
};
