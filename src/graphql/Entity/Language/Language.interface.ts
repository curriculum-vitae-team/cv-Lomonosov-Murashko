import { DeleteResult } from "@graphql/shared/interfaces";

export interface UpdateLanguageInput {
  id: string;
  language: Pick<Language, "iso2" | "name">;
}

export interface DeleteLanguageOutput {
  deleteLanguage: DeleteResult;
}

export interface Language {
  id: string;
  iso2: string;
  name: string;
}

export interface GetLanguagesData {
  languages: Language[];
}
