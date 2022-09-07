import { IEmployeeCore } from "@interfaces/IEmployee";
import { SubmitHandler } from "react-hook-form";

export type EmployeeCreateInfoFormProps = {
  onSubmit: SubmitHandler<IEmployeeCore>;
  error?: string;
};
