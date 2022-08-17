import { useState } from "react";
import { Button, DialogActions } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { IProject } from "@interfaces/IProject";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { Fieldset } from "@components/Fieldset";
import { ProjectInfoProps } from "./ProjectInfo.types";
import { DatePickerFieldset } from "@components/DatePickerFieldset";
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
import { resetProject } from "./helpers";
import { format } from "date-fns";

export const ProjectInfo = ({ projectId }: ProjectInfoProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  const navigate = useNavigate();

  const { control, handleSubmit, reset, setError } = useForm<IProject>({});

  const { data } = useQuery<ProjectInfoData>(GET_PROJECT_INFO, {
    variables: {
      id: projectId,
    },
    onCompleted: (data) => {
      setIsLoading(false);
      reset(resetProject(data.project));
    },
    onError: (error) => {
      setFetchError(error.message);
    },
  });

  const [saveProject] = useMutation<UpdateProjectOutput, UpdateProjectInput>(
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

  const onSubmit: SubmitHandler<IProject> = (data) => {
    setIsLoading(true);
    saveProject({
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
  };

  return (
    <>
      {isLoading ? (
        "loader"
      ) : fetchError ? (
        fetchError
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <InfoFormWrapper>
            <Fieldset
              isFullWidth={true}
              inputWidth="100%"
              required="Please, specify the field"
              label="Internal name"
              control={control}
              name="internalName"
            />
          </InfoFormWrapper>

          <InfoFormWrapper>
            <Fieldset
              required="Please, specify the field"
              label="Name"
              control={control}
              name="name"
            />
            <DatePickerFieldset
              control={control}
              label="Start date"
              name="startDate"
              onError={() => {
                setError("startDate", {
                  type: "required",
                  message: "Please, specify the correct date",
                });
              }}
              required={"Please, specify the field"}
            />
            <DatePickerFieldset
              control={control}
              label="End date"
              name="endDate"
              onError={() => {
                setError("endDate", {
                  type: "required",
                  message: "Please, specify the correct date",
                });
              }}
              required={"Please, specify the field"}
            />
          </InfoFormWrapper>
          <InfoFormWrapper>
            <Fieldset
              inputWidth="50%"
              isFullWidth={true}
              required="Please, specify the field"
              label="Domain"
              control={control}
              name="domain"
            />
          </InfoFormWrapper>

          <InfoFormWrapper>
            <Fieldset
              inputWidth="50%"
              isFullWidth={true}
              required="Please, specify the field"
              label="Description"
              control={control}
              name="description"
            />
          </InfoFormWrapper>

          <DialogActions>
            <Button type="submit" value="Save" variant="contained">
              Save
            </Button>
            <Button
              onClick={() => navigate(ROUTE.EMPLOYEES)}
              type="reset"
              value="Cancel"
              variant="outlined"
              color="info"
            >
              Cancel
            </Button>
          </DialogActions>
        </form>
      )}
    </>
  );
};
