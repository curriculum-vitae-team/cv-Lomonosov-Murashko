import { IEntryData } from "./IEntryData";

export interface ICV extends IEntryData {
  name: string;
  description: string;
  email: string;
  lastName: string;
  skills: string;
  specialization: string;
  department: string;
}
