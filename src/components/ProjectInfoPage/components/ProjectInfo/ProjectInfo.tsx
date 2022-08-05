import { Button, DialogActions, TextField } from "@mui/material";
import { useForm, SubmitHandler, useFormState } from "react-hook-form";

import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { IProject } from "@interfaces/IProject";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";

import { projects } from "@pages/ProjectsPage/ProjectsPage";
import { DatePicker } from "@mui/x-date-pickers";
import { Fieldset } from "@components/Fieldset";
import { ProjectInfoProps } from "./ProjectInfo.types";
import { useState } from "react";

export const ProjectInfo = ({ projectId }: ProjectInfoProps) => {
  const project = projects.find(({ id }) => id === projectId)!;

  const { control, handleSubmit, reset, setError } = useForm<IProject>({
    defaultValues: {
      internalName: project.internalName,
      name: project.name,
      startDate: project.startDate,
      endDate: project.endDate,
      teamSize: project.teamSize,
      techStack: project.techStack,
      domain: project.domain,
      description: project.description,
    },
  });

  const { errors } = useFormState({ control });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IProject> = (data) => {
    // save employee info
    reset();
  };

  return (
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
        <Fieldset
          control={control}
          name="startDate"
          label="Select date"
          render={({ field, fieldState }) => (
            <DatePicker
              label="Select date"
              minDate={new Date("1980-01-01")}
              maxDate={new Date("2099-01-01")}
              onError={() => {
                setError("startDate", {
                  type: "required",
                  message: "Please, specify the correct date",
                });
              }}
              {...field}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  helperText={errors.startDate?.message || " "}
                  error={!!fieldState.error}
                />
              )}
            />
          )}
        />
        <Fieldset
          control={control}
          name="endDate"
          label="Select date"
          render={({ field, fieldState }) => (
            <DatePicker
              label="Select date"
              minDate={new Date("1980-01-01")}
              maxDate={new Date("2099-01-01")}
              onError={() => {
                setError("endDate", {
                  type: "required",
                  message: "Please, specify the correct date",
                });
              }}
              {...field}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  helperText={errors.endDate?.message || " "}
                  error={!!fieldState.error}
                />
              )}
            />
          )}
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
  );
};
