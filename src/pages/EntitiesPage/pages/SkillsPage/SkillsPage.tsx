import { ROUTE } from "@constants/route";
import {
  DELETE_SKILL,
  GET_SKILLS,
  UPDATE_SKILL,
} from "@graphql/Entity/Entity.queries";
import { EntityInfo } from "@pages/EntitiesPage/components/EntityInfo";
import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { InfoForm } from "./components/InfoForm";
import { SkillInput } from "./components/InfoForm/InfoForm.types";

export const SkillsPage = () => {
  return (
    <EntityInfo
      GET_ALL_QUERY={GET_SKILLS}
      DELETE_MUTATION={DELETE_SKILL}
      UPDATE_MUTATION={UPDATE_SKILL}
      queryName="GetSkills"
      deleteOperation="deleteSkill"
      updateOperation="updateSkill"
      updateVariablesInput={["name", "id"]}
      entityName="skills"
      entityNameSingular="skill"
      queryOperation="skills"
      FormComponent={InfoForm}
    />
  );
};
