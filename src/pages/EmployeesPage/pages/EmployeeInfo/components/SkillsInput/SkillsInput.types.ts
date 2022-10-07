import { ApolloError } from "@apollo/client";
import { CreateUserInput } from "@src/graphql/User/User.interface";
import { Control } from "react-hook-form";

export type SkillsInputProps = {
  onError: (error: ApolloError) => void;
  control: Control<CreateUserInput>;
};
