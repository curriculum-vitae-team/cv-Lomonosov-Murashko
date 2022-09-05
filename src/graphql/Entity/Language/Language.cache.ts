import { CacheUpdaterFunction } from "src/types";
import { DeleteEntityEntryInput } from "../Entity.interface";
import { GET_LANGUAGES } from "./Language.queries";
import { DeleteLanguageOutput, GetLanguagesData } from "./Language.interface";

export const deleteLanguageUpdateCache =
  (
    id: string,
  ): CacheUpdaterFunction<DeleteLanguageOutput, DeleteEntityEntryInput> =>
  (cache, { data }) => {
    const existingLanguages = cache.readQuery<GetLanguagesData>({
      query: GET_LANGUAGES,
    });

    if (existingLanguages && data?.deleteLanguage.affected) {
      cache.writeQuery({
        query: GET_LANGUAGES,
        data: {
          languages: existingLanguages.languages.filter(
            (entry) => entry.id !== id,
          ),
        },
      });
    }
  };
