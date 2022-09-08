import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { IProject } from "@interfaces/IProject";
import { CREATE_PROJECT } from "@graphql/Project/Project.queries";
import { useMutation } from "@apollo/client";
import {
  CreateProjectInput,
  CreateProjectOutput,
} from "@graphql/Project/Project.interface";
import { format } from "date-fns";
import { ProjectInfoForm } from "../../components/ProjectInfoForm/ProjectInfoForm";
import { ROUTE } from "@constants/route";
import { useCallback } from "react";
import { createProjectCacheUpdate } from "@graphql/Project/Project.cache";

export const ProjectInfoCreate = () => {
  const navigate = useNavigate();

  const [createProject] = useMutation<CreateProjectOutput, CreateProjectInput>(
    CREATE_PROJECT,
    {
      onCompleted: () => {
        navigate(ROUTE.PROJECTS);
      },
    },
  );

  const onSubmit: SubmitHandler<IProject> = useCallback(
    (data) => {
      createProject({
        variables: {
          project: {
            name: data.name,
            internal_name: data.internalName,
            description: data.description,
            domain: data.domain,
            start_date: format(Number(data.startDate), "yyyy-MM-dd"),
            end_date: data.endDate ? format(Number(data.endDate), "yyyy-MM-dd") : null,
          },
        },
        update: createProjectCacheUpdate(),
      });
    },
    [createProject],
  );

  return <ProjectInfoForm onSubmit={onSubmit} />;
};