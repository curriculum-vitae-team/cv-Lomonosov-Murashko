import { LanguageProficiency } from "@src/interfaces/language.interface";
import { SkillMastery } from "@src/interfaces/skill.interface";
import { Department } from "../Entity/Department/Department.interface";
import { Position } from "../Entity/Position/Position.interface";
import { UserLanguages } from "../User/User.interface";

export interface Profile {
  first_name: string;
  last_name: string;

  skills: SkillMastery[];
  languages: LanguageProficiency[];
}

export interface ProfileInput {
  first_name: string;
  last_name: string;

  skills: SkillMastery[];
  languages: UserLanguages[];
}
