import { Button, DialogActions, TextField } from "@mui/material";
import { useForm, SubmitHandler, useFormState } from "react-hook-form";

import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { IProject } from "@interfaces/IProject";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";

import { projects } from "../../../../pages/ProjectsPage/ProjectsPage";
import { DatePicker } from "@mui/x-date-pickers";
import { Fieldset } from "@components/Fieldset";
import { ProjectInfoProps } from "./ProjectInfo.types";

export const ProjectInfo = ({ projectId }: ProjectInfoProps) => {
  const project = projects.find(({ id }) => id === projectId)!;

  const { control, handleSubmit, reset } = useForm<IProject>({
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
          required="Please, specify the field"
          render={({ field }) => (
            <DatePicker
              label="Select date"
              {...field}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  helperText={errors.startDate?.message || " "}
                  error={!field.value}
                />
              )}
            />
          )}
        />
        <Fieldset
          control={control}
          name="endDate"
          label="Select date"
          required="Please, specify the field"
          render={({ field }) => (
            <DatePicker
              label="Select date"
              {...field}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  error={!!errors.endDate}
                  helperText={errors.endDate?.message || " "}
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
