import { IEntryData } from "./IEntryData";

export interface IProjectCore extends IEntryData {
  internalName: string;
  name: string;
  startDate: Date;
  endDate: Date;
}

export interface IProject extends IProjectCore {
  teamSize: number;
  techStack: string; // TODO: replace with entities
  domain: string;
  description: string;
}
