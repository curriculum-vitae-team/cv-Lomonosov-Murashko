import { useMutation, useQuery } from "@apollo/client";
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

  const { pathname } = useLocation();

  const [cvInput, setCvInput] = useState<CvInput | null>(null);

  const { data: cvInfoData, refetch } = useQuery<CvInfoData>(GET_CV_INFO, {
    variables: {
      id: cvId,
    },
    onCompleted: (data) => {
      setIsLoading(false);
    },
    onError: (error) => {
      setError(error.message);
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

  const handleAddProject: React.MouseEventHandler = (e) => {
    // TODO: Fetch projects. Show projects select component.
    // Not a table.
  };

  return isLoading ? (
    <>loader</>
  ) : error ? (
    <>{error}</>
  ) : (
    cvInput && (
      <CvInfo
        cv={cvInput}
        onSubmit={handleSubmit}
        onCancel={() => {
          navigate(pathname.split("/").includes("cvs") ? "/cvs" : "/employees");
        }}
        onAddProject={handleAddProject}
      />
    )
  );
};
