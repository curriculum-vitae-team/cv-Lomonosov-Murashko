import { DocumentNode } from "graphql";
import { SubmitHandler } from "react-hook-form";

export type EntityInfoProps = {
  GET_ALL_QUERY: DocumentNode;
  DELETE_MUTATION: DocumentNode;
  UPDATE_MUTATION: DocumentNode;
  updateVariablesInput: UpdateVariablesInput[];
  queryName: string;
  deleteOperation: string;
  updateOperation: string;
  queryOperation: string;
  entityName: string;
  entityNameSingular: string;
  FormComponent: React.ComponentType<RequiredFormComponentProps>;
};

export type Entry = {
  name: string;
  id: string;
};

export type UpdateVariablesInput = keyof Input;

export type Input = any;

export type EntityQueryResponse = {
  [queryName: string]: Entry[];
};

export type RequiredFormComponentProps = {
  input: Input;
  onSubmit: SubmitHandler<Entry>;
  onCancel: () => void;
};
