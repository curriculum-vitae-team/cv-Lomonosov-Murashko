/* Queries */

export interface CvsData {
  cvs: Cv[];
}

export interface CvInfoData {
  cv: CvInfo;
}

/* Mutations */

export interface CreateCvInput {
  cv: CvInput;
}

export interface CreateCvOutput {
  createCv: {
    id: string;
    cv: CvInput;
  };
}

export interface UpdateCvInput {
  id: string;
  cv: CvInput;
}

export interface UpdateCvOutput {
  updateCv: CvInfo;
}

export interface DeleteCvInput {
  id: string;
}

export interface DeleteCvOutput {
  deleteCv: {
    affected: number;
  };
}

/* Parts */

// for table
export interface Cv {
  id: string;
  name: string;
  description: string;
}

export interface CvInput {
  name: string;
  description: string;
  userId?: string;
  projectsIds: string[];
}

export interface CvInfo {
  id: string;
  name: string;
  description: string;
  projects: ProjectPart[];
}

interface ProjectPart {
  id: string;
  name: string;
  internal_name: string;
}
