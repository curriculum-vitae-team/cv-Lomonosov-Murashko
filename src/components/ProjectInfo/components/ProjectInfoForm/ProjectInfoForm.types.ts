import { ProjectInfoData } from "@graphql/Project/Project.interface";
import { IProject } from "@interfaces/IProject";
import { SubmitHandler } from "react-hook-form";

export type ProjectInfoFormProps = {
  onSubmit: SubmitHandler<IProject>;
  data?: ProjectInfoData;
};
