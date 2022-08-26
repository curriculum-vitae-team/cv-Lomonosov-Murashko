export interface IProjectCore {
  id: string;
  internalName: string;
  name: string;
  startDate: Date | string;
  endDate: Date | string;
}

export interface IProject extends IProjectCore {
  teamSize: number;
  techStack: string; // TODO: replace with entities
  domain: string;
  description: string;
}

export interface IProjectTable {
  id: string;
  internalName: string;
  name: string;
  startDate: string;
  endDate: string;
}
