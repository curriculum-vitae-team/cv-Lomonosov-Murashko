import { SkillMastery } from "@interfaces/skill.interface";
import { LanguageProficiency } from "./language.interface";

export interface Profile {
  first_name?: string;
  last_name?: string;
  full_name?: string;
  skills: SkillMastery[];
  languages: LanguageProficiency[];
}
