import { ProjectInfo } from "@graphql/Project/Project.interface";
import { format } from "date-fns";

export const resetProject = (project: ProjectInfo) => {
  return {
    internalName: project.internal_name || "",
    name: project.name || "",
    startDate: format(new Date(project.start_date), "MM/dd/yyyy") || "",
    endDate: format(new Date(project.end_date), "MM/dd/yyyy") || "",
    domain: project.domain || "",
    description: project.description || "",
  };
};
