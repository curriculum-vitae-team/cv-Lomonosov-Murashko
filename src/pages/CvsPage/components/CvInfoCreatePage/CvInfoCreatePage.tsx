import { useMutation } from "@apollo/client";
import { CREATE_CV } from "@graphql/Cv/Cv.queries";
import { ROUTE } from "@constants/route";
import { useNavigate } from "react-router";
import {
  CreateCvInput,
  CreateCvOutput,
  CvInput,
} from "@graphql/Cv/Cv.interface";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { createCvCacheUpdate } from "@graphql/Cv/Cv.cache";
import { CvCreateInfoForm } from "../CvCreateInfoForm";

export const CvInfoCreatePage = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [createCv] = useMutation<CreateCvOutput, CreateCvInput>(CREATE_CV, {
    onCompleted: () => {
      navigate(ROUTE.CVS);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const onSubmit: SubmitHandler<CvInput> = useCallback(
    (data) => {
      createCv({
        variables: {
          cv: {
            name: "",
            description: "",
            userId: "",
            projectsIds: [],
            skills: [],
            languages: [],
            is_template: false,
          },
        },
        update: createCvCacheUpdate(),
      });
    },
    [createCv],
  );

  return <CvCreateInfoForm error={error} onSubmit={onSubmit} />;
};
