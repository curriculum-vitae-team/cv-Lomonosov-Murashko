import { SkillMastery } from "@interfaces/skill.interface";
import { LanguageProficiency } from "@interfaces/language.interface";

export type ProfileInput = {
  first_name: string;
  last_name: string;
  skills: SkillMastery[];
  languages: LanguageProficiency[];
};
