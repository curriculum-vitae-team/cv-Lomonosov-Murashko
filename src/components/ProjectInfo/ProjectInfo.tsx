import { Button, DialogActions, FormLabel, TextField } from "@mui/material";
import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from "react-hook-form";

import { useNavigate, useParams } from "react-router";
import { ROUTE } from "@constants/route";
import { IProject } from "@interfaces/IProject";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";

import { projects } from "../../pages/ProjectsPage/ProjectsPage";
import { DatePicker } from "@mui/x-date-pickers";
import { Fieldset } from "@components/Fieldset";

export const ProjectInfo = () => {
  const { projectId } = useParams();
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
          required={true}
          label="Internal name"
          control={control}
          rules={{ required: "Please, specify the field" }}
          name="internalName"
          isError={!!errors.internalName}
          helperText={errors.internalName?.message}
        />
      </InfoFormWrapper>

      <InfoFormWrapper>
        <Fieldset
          required={true}
          label="Name"
          control={control}
          rules={{ required: "Please, specify the field" }}
          name="name"
          isError={!!errors.name}
          helperText={errors.name?.message}
        />
        <Fieldset
          control={control}
          rules={{ required: "Please, specify the field" }}
          name="startDate"
          label="Select date"
          isError={!!errors.startDate}
          required={true}
          render={({ field }) => (
            <DatePicker
              label="Select date"
              {...field}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label=""
                  error={!!errors.startDate}
                  helperText={errors.startDate?.message || " "}
                />
              )}
            />
          )}
        />
        <Fieldset
          control={control}
          rules={{ required: "Please, specify the field" }}
          name="endDate"
          label="Select date"
          isError={!!errors.endDate}
          required={true}
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
          required={true}
          label="Domain"
          control={control}
          rules={{ required: "Please, specify the field" }}
          name="domain"
          isError={!!errors.domain}
          helperText={errors.domain?.message}
        />
      </InfoFormWrapper>

      <InfoFormWrapper>
        <Fieldset
          inputWidth="50%"
          isFullWidth={true}
          required={true}
          label="Description"
          control={control}
          rules={{ required: "Please, specify the field" }}
          name="description"
          isError={!!errors.description}
          helperText={errors.description?.message}
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
