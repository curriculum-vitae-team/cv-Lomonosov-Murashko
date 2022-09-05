/* Queries */

import { UserFullInfo } from "../User/User.interface";

export interface CvsData {
  cvs: Cv[];
}

export interface CvInfoData {
  cv: CvInfo;
}

export interface CvFullInfo {
  cv: {
    name: string;
    projects: ProjectFullInfo[];
    skills: SkillMastery[];
    languages: CvLanguagesInfo[];
    user: UserFullInfo;
  };
}

export interface CvFullInfoData {
  name: string;
  user: UserFullInfo;
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

export interface UnbindCvInput {
  id: string;
}

export interface UnbindCvOutput {
  unbindCv: {
    id: string;
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
  user: null | {
    id: string;
  };
}

interface ProjectPart {
  id: string;
  name: string;
  internal_name: string;
}

export interface ProjectFullInfo {
  start_date: string;
  end_date: string;
  name: string;
  internal_name: string;
  description: string;
}

export interface CvLanguagesInfo {
  language_name: string;
  proficiency: string;
}

export interface SkillMastery {
  skill_name: string;
  mastery: string;
}
