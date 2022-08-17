import { ProjectInfo } from "@graphql/Project/Project.interface";

export const resetProject = (project: ProjectInfo) => {
  return {
    internalName: project.internal_name || "",
    name: project.name || "",
    startDate: new Date(project.start_date) || "",
    endDate: new Date(project.end_date) || "",
    domain: project.domain || "",
    description: project.description || "",
  };
};
