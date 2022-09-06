import { useMutation, useQuery } from "@apollo/client";
import { Breadcrumb } from "@components/Breadcrumb";
import { InlineError } from "@components/InlineError";
import { Loader } from "@components/Loader";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { useErrorToast } from "@context/ErrorToastStore/ErrorToastStore";
import {
  CvInfoData,
  CvInput,
  UpdateCvInput,
  UpdateCvOutput,
} from "@graphql/Cv/Cv.interface";
import { GET_CV_INFO, UPDATE_CV } from "@graphql/Cv/Cv.queries";
import { memo, useCallback, useLayoutEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import { CvInfo } from "../CvInfo/CvInfo";

export const CvInfoUpdatePage = memo(() => {
  const { cvId } = useParams();
  const [error, setError] = useState("");
  const { pathname } = useLocation();
  const [cvInput, setCvInput] = useState<CvInput | null>(null);
  const { setToastError } = useErrorToast();

  const {
    data: cvInfoData,
    refetch,
    loading: getCvInfoLoading,
  } = useQuery<CvInfoData>(GET_CV_INFO, {
    variables: {
      id: cvId,
    },

    onError: (error) => {
      setError(error.message);
    },
    fetchPolicy: "network-only",
  });

  useLayoutEffect(() => {
    if (cvInfoData) {
      const { name, description, user, projects } = cvInfoData.cv;

      console.log("user id", user?.id);

      setCvInput({
        name,
        description,
        userId: user?.id,
        projectsIds: projects.map((p) => p.id),
        skills: [],
        languages: [],
        is_template: false,
      });
    }
  }, [cvInfoData]);

  const [saveCv, { loading: saveCvLoading }] = useMutation<
    UpdateCvOutput,
    UpdateCvInput
  >(UPDATE_CV, {
    onCompleted: (data) => {
      navigate(pathname.split("/").includes("cvs") ? "/cvs" : "/employees");
    },
    onError: (error) => {
      setToastError(error.message);
    },
  });

  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<CvInput> = useCallback(
    (data) => {
      const { name, description, projectsIds } = data;

      saveCv({
        variables: {
          id: cvId!,
          cv: {
            name,
            description,
            projectsIds,
            skills: [],
            languages: [],
            is_template: false,
          },
        },
        optimisticResponse: {
          updateCv: {
            name,
            description,
            id: cvId!,
            projects: [],
            user: null, // TODO: user can assign cv to himself only, admin to everyone
            skills: [],
            languages: [],
            is_template: false,
          },
        },
      });
    },
    [cvId, cvInfoData?.cv.user, saveCv],
  );

  const handleCancel: React.MouseEventHandler = (e) => {
    navigate(pathname.split("/").includes("cvs") ? "/cvs" : "/employees");
  };

  const handleAddProject: React.MouseEventHandler = (e) => {
    // TODO: Fetch projects. Show projects select component.
    // Not a table.
  };

  const handleTryAgain = () => {
    refetch();
  };

  return (
    <PageWrapper>
      <PageTop>
        <Breadcrumb
          config={{
            cvs: "Cvs",
          }}
        />
      </PageTop>
      <PageBody>
        {getCvInfoLoading || saveCvLoading ? (
          <Loader />
        ) : error ? (
          <InlineError
            message="Something went wrong when trying to fetch form data"
            tryAgainFn={handleTryAgain}
          />
        ) : (
          cvInput && (
            <>
              <CvInfo
                cv={cvInput}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
                onAddProject={handleAddProject}
              />
            </>
          )
        )}
      </PageBody>
    </PageWrapper>
  );
});
