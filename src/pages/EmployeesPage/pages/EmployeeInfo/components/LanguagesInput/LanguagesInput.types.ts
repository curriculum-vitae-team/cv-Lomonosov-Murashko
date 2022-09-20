import { ApolloError } from "@apollo/client";
import { CreateUserInput } from "@src/graphql/User/User.interface";
import { LanguageProficiency } from "@src/interfaces/language.interface";
import { Control } from "react-hook-form";

export type LanguagesInputProps = {
  onError: (error: ApolloError) => void;
  control: Control<CreateUserInput>;
  languagesInForm: LanguageProficiency[];
};
