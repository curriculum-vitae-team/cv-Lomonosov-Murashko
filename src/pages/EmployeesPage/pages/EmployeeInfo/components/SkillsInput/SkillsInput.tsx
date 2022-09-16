import { useQuery } from "@apollo/client";
import { Stack, Typography } from "@mui/material";
import { DynamicFieldset } from "@src/components/DynamicFieldset";
import { DynamicArrayField } from "@src/components/DynamicFieldset/components/DynamicArrayField";
import { DynamicFieldsetGroupWrapper } from "@src/components/styled/DynamicFieldsetGroupWrapper";
import { Mastery } from "@src/constants/skill-mastery.constants";
import { GetSkillsData } from "@src/graphql/Entity/Skill/Skill.interface";
import { GET_SKILLS } from "@src/graphql/Entity/Skill/Skill.queries";
import { useFieldArray } from "react-hook-form";
import { SkillsInputProps } from "./SkillsInput.types";

export const SkillsInput = ({
  onError,
  control,
  skillsInForm,
}: SkillsInputProps) => {
  const {
    fields: skillsFields,
    append: appendSkill,
    remove: removeSkill,
    update: updateSkill,
  } = useFieldArray({
    control,
    name: "user.profile.skills",
  });

  const { data: skillsData } = useQuery<GetSkillsData>(GET_SKILLS, {
    onError: onError,
  });

  const handleSkillDelete = (name: string) => {
    removeSkill(skillsInForm.findIndex((skill) => skill.skill_name === name));
  };

  const handleSkillChange = (name: string, newValue: string) => {
    if (isMastery(newValue)) {
      updateSkill(
        skillsInForm.findIndex((skill) => skill.skill_name === name),
        { skill_name: name, mastery: newValue },
      );
    }

    function isMastery(value: string): value is Mastery {
      if (Object.values(Mastery).includes(value as Mastery)) {
        return true;
      }

      return false;
    }
  };

  const getAvailable = () => {
    return skillsData
      ? skillsData.skills
          .filter(
            (skill) =>
              !skillsFields.find((field) => field.skill_name === skill.name),
          )
          .map((skill) => ({ entryName: skill.name }))
      : [];
  };

  return (
    <DynamicFieldsetGroupWrapper>
      <Stack gap={2} justifyContent="start">
        <Typography variant="h5" component="h2">
          Skills
        </Typography>
        <DynamicFieldset
          onNew={(entryName: string) => {
            appendSkill({ skill_name: entryName, mastery: Mastery.Novice });
          }}
          inputEntries={getAvailable()}
        >
          {skillsFields.map((field, index) => (
            <DynamicArrayField
              key={field.id}
              entryName={field.skill_name}
              possibleValues={Mastery}
              onDelete={handleSkillDelete}
              onChange={handleSkillChange}
              value={field.mastery}
            />
          ))}
        </DynamicFieldset>
      </Stack>
    </DynamicFieldsetGroupWrapper>
  );
};