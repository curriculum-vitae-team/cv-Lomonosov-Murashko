import { IEntryData } from "./IEntryData";

export interface IProject extends IEntryData {
  name: string;
  startDate: Date;
  endDate: Date;
}
