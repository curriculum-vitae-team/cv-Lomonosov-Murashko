export type DynamicArrayFieldProps<T extends string> = {
  onDelete: (name: T) => void;
  entryName: T;
  possibleValuesHandler?: PossibleValuesHandler;
};

type PossibleValuesHandler = {
  possibleValues: Record<string, string>;
  onChange: (name: string, newValue: string) => void;
  value: string;
};
