import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { IProject } from "@interfaces/IProject";
import { ProjectInfoUpdateProps } from "./ProjectInfoUpdate.types";
import {
  GET_PROJECT_INFO,
  UPDATE_PROJECT,
} from "@graphql/Project/Project.queries";
import { useMutation, useQuery } from "@apollo/client";
import {
  ProjectInfoData,
  UpdateProjectInput,
  UpdateProjectOutput,
} from "@graphql/Project/Project.interface";
import { format } from "date-fns";
import { ProjectInfoForm } from "../../components/ProjectInfoForm/ProjectInfoForm";
import { ROUTE } from "@constants/route";

export const ProjectInfoUpdate = ({ projectId }: ProjectInfoUpdateProps) => {
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
        navigate(ROUTE.PROJECTS);
      },
      onError: (error) => {
        setFetchError(error.message);
      },
    },
  );

  const onSubmit: SubmitHandler<IProject> = useCallback(
    (data) => {
      setIsLoading(true);
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
            tech_stack: data.techStack,
          },
        },
      });
    },
    [projectId, updateProject],
  );

  return (
    <>
      {isLoading ? (
        "loading"
      ) : fetchError ? (
        fetchError
      ) : (
        <ProjectInfoForm data={data} onSubmit={onSubmit} />
      )}
    </>
  );
};
