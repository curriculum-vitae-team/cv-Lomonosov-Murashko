import { SkillMastery } from "./skill.interface";

export interface IProjectCore {
  id: string;
  name: string;
  internalName: string;
  startDate: Date | string;
  endDate: Date | string | null;
}

export interface IProject extends IProjectCore {
  domain: string;
  description: string;
  techStack: SkillMastery[];
  teamSize: number;
}

export interface IProjectTable {
  id: string;
  internalName: string;
  name: string;
  startDate: string;
  endDate: string;
}
