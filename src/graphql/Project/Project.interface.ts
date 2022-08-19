/* Queries */

export interface ProjectsData {
  projects: ProjectInfo[];
}

export interface ProjectInfoData {
  project: ProjectInfo;
}

export interface ProjectName {
  project: {
    name: string;
  }
}

/* Mutations */

export interface CreateProjectInput {
  project: ProjectInput;
}

export interface CreateProjectOutput {
  createProject: {
    id: string;
    project: ProjectInput;
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
  end_date: string;
}

export interface ProjectInfo {
  name: string;
  internal_name: string;
  description: string;
  domain: string;
  start_date: string;
  end_date: string;
  id: string;
}

/* For table */

export interface Project {
  id: string;
  internal_name: string;
  start_date: string;
  end_date: string;
}
