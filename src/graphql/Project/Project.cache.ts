import { CacheUpdaterFunction } from "src/types";
import {
  DeleteProjectInput,
  DeleteProjectOutput,
  ProjectsData,
} from "./Project.interface";
import { GET_PROJECTS } from "./Project.queries";

export const deleteProjectCacheUpdate =
  (id: string): CacheUpdaterFunction<DeleteProjectOutput, DeleteProjectInput> =>
  (cache, { data }) => {
    const existingProjects = cache.readQuery<ProjectsData>({
      query: GET_PROJECTS,
    });

    if (existingProjects && data?.deleteProject.affected) {
      cache.writeQuery({
        query: GET_PROJECTS,
        data: {
          projects: existingProjects.projects.filter(
            (project) => project.id !== id,
          ),
        },
      });
    }
  };

// TODO: add createProjectCacheUpdate method 
