import { IEntryData } from "./IEntryData";

export interface IEmployee extends IEntryData {
  name: string;
  lastName: string;
  email: string;
  department: string;
  specialization: string;
}
