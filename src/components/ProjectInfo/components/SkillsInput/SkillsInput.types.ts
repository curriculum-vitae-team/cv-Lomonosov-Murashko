import { ApolloError } from "@apollo/client";
import { IProject } from "@src/interfaces/IProject";
import { Skill } from "@src/interfaces/skill.interface";
import { Control } from "react-hook-form";

export type SkillsInputProps = {
  onError: (error: ApolloError) => void;
  control: Control<IProject>;
  skillsInForm: Skill[];
};
