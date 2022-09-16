import { ApolloError } from "@apollo/client";
import { CreateUserInput } from "@src/graphql/User/User.interface";
import { SkillMastery } from "@src/interfaces/skill.interface";
import { Control } from "react-hook-form";

export type SkillsInputProps = {
  onError: (error: ApolloError) => void;
  control: Control<CreateUserInput>;
  skillsInForm: SkillMastery[];
};
