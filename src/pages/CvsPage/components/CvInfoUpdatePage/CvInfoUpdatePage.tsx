import { useMutation, useQuery } from "@apollo/client";
import { ErrorToast } from "@components/ErrorToast";
import { InlineError } from "@components/InlineError";
import { Loader } from "@components/Loader";
import {
  CvInfoData,
  CvInput,
  UpdateCvInput,
  UpdateCvOutput,
} from "@graphql/Cv/Cv.interface";
import { GET_CV_INFO, UPDATE_CV } from "@graphql/Cv/Cv.queries";
import { useEffect, useLayoutEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import { CvInfo } from "../CvInfo/CvInfo";

export const CvInfoUpdatePage = () => {
  const { cvId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [serverError, setServerError] = useState("");

  const { pathname } = useLocation();

  const [cvInput, setCvInput] = useState<CvInput | null>(null);

  const { data: cvInfoData, refetch } = useQuery<CvInfoData>(GET_CV_INFO, {
    variables: {
      id: cvId,
    },
    onCompleted: (data) => {
      setIsLoading(false);
      setServerError("");
    },
    onError: (error) => {
      setServerError(error.message);
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    setIsLoading(true);
    // refetch({ variables: { id: cvId } });
  }, [cvId]);

  useLayoutEffect(() => {
    if (cvInfoData) {
      const { name, description, user, projects } = cvInfoData.cv;

      setCvInput({
        name,
        description,
        userId: user?.id,
        projectsIds: projects.map((p) => p.id),
      });
    }
  }, [cvInfoData]);

  const [saveCv] = useMutation<UpdateCvOutput, UpdateCvInput>(UPDATE_CV, {
    onCompleted: (data) => {
      navigate(pathname.split("/").includes("cvs") ? "/cvs" : "/employees");
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<CvInput> = (data) => {
    setIsLoading(true);

    const { name, description, projectsIds } = data;

    saveCv({
      variables: {
        id: cvId!,
        cv: {
          name,
          description,
          projectsIds,
        },
      },
      optimisticResponse: {
        updateCv: {
          name,
          description,
          id: cvId!,
          projects: [],
          user: cvInfoData?.cv.user || null,
        },
      },
    });
  };

  const handleCancel: React.MouseEventHandler = (e) => {
    navigate(pathname.split("/").includes("cvs") ? "/cvs" : "/employees");
  };

  const handleAddProject: React.MouseEventHandler = (e) => {
    // TODO: Fetch projects. Show projects select component.
    // Not a table.
  };

  return isLoading && !serverError ? (
    <Loader />
  ) : error ? (
    <InlineError
      message="Something went wrong when trying to fetch form data"
      tryAgainFn={() => {
        refetch();
      }}
    />
  ) : (
    cvInput && (
      <>
        {serverError && <ErrorToast message={serverError} />}
        <CvInfo
          cv={cvInput}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          onAddProject={handleAddProject}
        />
      </>
    )
  );
};
