import { IProjectTable } from "@interfaces/IProject";
import { ProjectInfo } from "@graphql/Project/Project.interface";

export function getProjects(projects: ProjectInfo[]): IProjectTable[] {
  return projects.map((project) => ({
    id: project.id,
    name: project.name || "-",
    internalName: project.internal_name || "-",
    startDate: project.start_date,
    endDate: project.end_date || "Till now",
  }));
}
