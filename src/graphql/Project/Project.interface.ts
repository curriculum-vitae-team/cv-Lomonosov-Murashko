/* Queries */

import { Skills } from "../Skills/Skills.interface";

export interface ProjectsData {
  projects: ProjectInfo[];
}

export interface ProjectInfoData {
  project: ProjectInfo;
}

export interface ProjectName {
  project: {
    name: string;
  };
}

/* Mutations */

export interface CreateProjectInput {
  project: ProjectInput;
}

export interface CreateProjectOutput {
  createProject: {
    id: string;
    project: ProjectInput;
    affected: number;
  };
}

export interface DeleteProjectInput {
  id: string;
}

export interface DeleteProjectOutput {
  deleteProject: {
    affected: number;
  };
}

export interface UpdateProjectInput {
  id: string;
  project: ProjectInput;
}

export interface UpdateProjectOutput {
  updateProject: ProjectInfo;
}

/* Parts */

export interface ProjectInput {
  name: string;
  internal_name: string;
  description: string;
  domain: string;
  start_date: string;
  end_date: string | null;
}

export interface ProjectInfo {
  id: string;
  name: string;
  internal_name: string;
  description: string;
  domain: string;
  start_date: string;
  end_date: string;
  tech_stack: Skills[] | null;
  team_size: number;
}

/* For table */

export interface Project {
  id: string;
  internal_name: string;
  start_date: string;
  end_date: string;
}
