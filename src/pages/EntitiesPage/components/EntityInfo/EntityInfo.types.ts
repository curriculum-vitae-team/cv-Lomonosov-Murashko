import { DocumentNode } from "graphql";
import { SubmitHandler } from "react-hook-form";

export type EntityInfoProps = {
  GET_ALL_QUERY: DocumentNode;
  DELETE_MUTATION: DocumentNode;
  UPDATE_MUTATION: DocumentNode;
  queryName: string;
  deleteOperation: string;
  queryOperation: string;
  entityName: string;
  FormComponent: React.ComponentType<RequiredFormComponentProps>;
};

export type Entry = {
  name: string;
  id: string;
};

export type EntityQueryResponse = {
  [queryName: string]: Entry[];
};

export type RequiredFormComponentProps = {
  input: { [x: string]: string };
  onSubmit: SubmitHandler<{}>;
  onCancel: () => void;
};
