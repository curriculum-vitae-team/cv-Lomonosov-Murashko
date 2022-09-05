import { CacheUpdaterFunction } from "src/types";
import { DeleteEntityEntryInput } from "../Entity.interface";
import { DeleteSkillOutput, GetSkillsData } from "./Skill.interface";
import { GET_SKILLS } from "./Skill.queries";

export const deleteSkillCacheUpdate =
  (
    id: string,
  ): CacheUpdaterFunction<DeleteSkillOutput, DeleteEntityEntryInput> =>
  (cache, { data }) => {
    const existingSkills = cache.readQuery<GetSkillsData>({
      query: GET_SKILLS,
    });

    if (existingSkills && data?.deleteSkill.affected) {
      cache.writeQuery({
        query: GET_SKILLS,
        data: {
          skills: existingSkills.skills.filter((entry) => entry.id !== id),
        },
      });
    }
  };
