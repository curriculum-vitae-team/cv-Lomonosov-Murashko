import { SkillMastery } from "../Cv/Cv.interface";
import { Department } from "../Entity/Department/Department.interface";
import { Position } from "../Entity/Position/Position.interface";
import { UserLanguages } from "../User/User.interface";

export interface Profile {
  first_name: string;
  last_name: string;

  skills: SkillMastery[];
  languages: UserLanguages[];
}

export interface ProfileInput {
  first_name: string;
  last_name: string;

  skills: SkillMastery[];
  languages: UserLanguages[];
}
