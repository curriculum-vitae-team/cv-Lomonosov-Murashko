import { SubmitHandler } from "react-hook-form";

export type InfoFormProps = {
  onSubmit: SubmitHandler<{}>;
  onCancel: () => void;
  input: {};
};
