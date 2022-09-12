import { DeleteResult } from "@graphql/shared/interfaces";

export interface GetSkillsData {
  skills: Skill[];
}

export interface UpdateSkillInput {
  id: string;
  skill: Pick<Skill, "name">;
}

export interface DeleteSkillOutput {
  deleteSkill: DeleteResult;
}

export interface Skill {
  id: string;
  name: string;
}
