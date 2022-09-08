import { CvInput } from "@graphql/Cv/Cv.interface";
import { UsersNamesIdsData } from "@graphql/User/User.interface";
import { SubmitHandler } from "react-hook-form";

export type CvCreateInfoFormProps = {
  onSubmit: SubmitHandler<CvInput>;
  error?: string;
  users?: UsersNamesIdsData;
};
