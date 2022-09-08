import { SkillMastery } from "../Cv/Cv.interface";
import { Department } from "../Department/Department.interface";
import { Position } from "../Position/Position.interface";
import { UserLanguages } from "../User/User.interface";

export interface Profile {
  first_name: string;
  last_name: string;
  department: Department;
  position_name: string;
  position: Position;
  skills: SkillMastery[];
  languages: UserLanguages[];
}

export interface ProfileInput {
  first_name: string;
  last_name: string;
  departmentId: string;
  positionId: string;
  skills: SkillMastery[];
  languages: UserLanguages[];
}
