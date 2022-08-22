import { CvInput } from "@graphql/Cv/Cv.interface";
import React from "react";
import { SubmitHandler } from "react-hook-form";

export type CvInfoProps = {
  cv: CvInput;
  onSubmit: SubmitHandler<CvInput>;
  onAddProject: React.MouseEventHandler;
  onCancel: React.MouseEventHandler;
};
