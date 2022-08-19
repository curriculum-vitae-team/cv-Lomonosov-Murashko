import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { IProject } from "@interfaces/IProject";
import { ProjectInfoProps } from "./ProjectInfo.types";
import {
  CREATE_PROJECT,
  GET_PROJECT_INFO,
  UPDATE_PROJECT,
} from "@graphql/Project/Project.queries";
import { useMutation, useQuery } from "@apollo/client";
import {
  CreateProjectInput,
  CreateProjectOutput,
  ProjectInfoData,
  UpdateProjectInput,
  UpdateProjectOutput,
} from "@graphql/Project/Project.interface";
import { format } from "date-fns";
import { ProjectInfoForm } from "./components/ProjectInfoForm/ProjectInfoForm";

export const ProjectInfo = ({ projectId }: ProjectInfoProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const navigate = useNavigate();

  const { data } = useQuery<ProjectInfoData>(GET_PROJECT_INFO, {
    variables: {
      id: projectId,
    },
    onCompleted: (data) => {
      setIsLoading(false);
    },
    onError: (error) => {
      setIsLoading(false);
      setFetchError(error.message);
    },
  });

  const [updateProject] = useMutation<UpdateProjectOutput, UpdateProjectInput>(
    UPDATE_PROJECT,
    {
      onCompleted: () => {
        navigate("/projects");
      },
      onError: (error) => {
        setFetchError(error.message);
      },
    },
  );

  const [createProject] = useMutation<CreateProjectOutput, CreateProjectInput>(
    CREATE_PROJECT,
    {
      onCompleted: () => {
        navigate("/projects");
      },
      onError: (error) => {
        setFetchError(error.message);
      },
    },
  );

  const onSubmit: SubmitHandler<IProject> = (data) => {
    setIsLoading(true);

    if (!projectId) {
      createProject({
        variables: {
          project: {
            name: data.name,
            internal_name: data.internalName,
            description: data.description,
            domain: data.domain,
            start_date: format(Number(data.startDate), "yyyy-MM-dd"),
            end_date: format(Number(data.endDate), "yyyy-MM-dd"),
          },
        },
      });
    } else {
      updateProject({
        variables: {
          id: projectId,
          project: {
            name: data.name,
            internal_name: data.internalName,
            description: data.description,
            domain: data.domain,
            start_date: format(Number(data.startDate), "yyyy-MM-dd"),
            end_date: format(Number(data.endDate), "yyyy-MM-dd"),
          },
        },
      });
    }
  };

  return (
    <>
      {isLoading
        ? "loading"
        : fetchError
        ? fetchError
        : data && <ProjectInfoForm data={data} onSubmit={onSubmit} />}
    </>
  );
};
