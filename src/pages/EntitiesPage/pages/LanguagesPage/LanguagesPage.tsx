import {
  DELETE_LANGUAGE,
  GET_LANGUAGES,
  UPDATE_LANGUAGE,
} from "@graphql/Entity/Entity.queries";
import { EntityInfo } from "@pages/EntitiesPage/components/EntityInfo";
import { InfoForm } from "./components/InfoForm";

export const LanguagesPage = () => {
  return (
    <EntityInfo
      GET_ALL_QUERY={GET_LANGUAGES}
      DELETE_MUTATION={DELETE_LANGUAGE}
      UPDATE_MUTATION={UPDATE_LANGUAGE}
      queryName="GetLanguages"
      entityName="languages"
      queryOperation="languages"
      deleteOperation="deleteLanguage"
      updateOperation="updateLanguage"
      entityNameSingular="language"
      updateVariablesInput={["name", "iso2"]}
      FormComponent={InfoForm}
    />
  );
};
