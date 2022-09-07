import { CvInput } from "@graphql/Cv/Cv.interface";
import { SubmitHandler } from "react-hook-form";

export type CvCreateInfoFormProps = {
  onSubmit: SubmitHandler<CvInput>;
  error?: string;
};
