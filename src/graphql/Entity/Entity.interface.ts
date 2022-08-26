/* Queries */

export interface GetLanguagesData {
  languages: Language[];
}

export interface GetSkillsData {
  skills: Skill[];
}

/* Mutations */

export interface DeleteEntityEntryInput {
  id: string;
}

export interface UpdateLangaugeInput {
  id: string;
  skillInput: Pick<Language, "iso2" | "name">;
}

export interface UpdateSkillInput {
  id: string;
  languageInput: Pick<Skill, "name">;
}

/* Parts */

export interface Language {
  id: string;
  iso2: string;
  name: string;
}

export interface Skill {
  id: string;
  name: string;
}
