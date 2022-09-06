import { Department } from "../Department/Department.interface";

export interface Profile {
  first_name: string;
  last_name: string;
  department: Department;
  specialization: string;
  skills: [];
  languages: [];
}

export interface ProfileInput {
  first_name: string;
  last_name: string;
  departmentId: string;
  specialization: string;
  skills: string[];
  languages: string[];
}
