import { Button, FormLabel, TextField } from "@mui/material";
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

import { proj } from "../../pages/ProjectsPage/ProjectsPage";
import { StyledFieldsetWrapper } from "@components/styled/StyledFieldsetWrapper";
import { StyledFormActions } from "@components/FormActions/FormActions.styles";
import { DatePicker } from "@mui/x-date-pickers";

export const ProjectInfo = () => {
  const { projectId } = useParams();
  const project = proj.find(({ id }) => id === projectId)!;

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
        <StyledFieldsetWrapper isFullWidth={true} inputWidth="100%">
          <FormLabel required={true}>Internal name</FormLabel>
          <Controller
            control={control}
            rules={{ required: "Please, specify the field" }}
            name="internalName"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.internalName}
                helperText={errors.internalName?.message || " "}
              />
            )}
          ></Controller>
        </StyledFieldsetWrapper>
      </InfoFormWrapper>
      <InfoFormWrapper>
        <StyledFieldsetWrapper>
          <FormLabel required={true}>Name</FormLabel>
          <Controller
            control={control}
            rules={{ required: "Please, specify the field" }}
            name="name"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.name}
                helperText={errors.name?.message || " "}
                size="small"
              />
            )}
          />
        </StyledFieldsetWrapper>
        <StyledFieldsetWrapper>
          <FormLabel required={true}>Start date</FormLabel>
          <Controller
            control={control}
            rules={{ required: "Please, specify the field" }}
            name="startDate"
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
          ></Controller>
        </StyledFieldsetWrapper>
        <StyledFieldsetWrapper>
          <FormLabel required={true}>End date</FormLabel>
          <Controller
            control={control}
            rules={{ required: "Please, specify the field" }}
            name="endDate"
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
          ></Controller>
        </StyledFieldsetWrapper>
      </InfoFormWrapper>
      <InfoFormWrapper>
        <StyledFieldsetWrapper inputWidth="50%" isFullWidth={true}>
          <FormLabel required={true}>Domain</FormLabel>
          <Controller
            control={control}
            rules={{ required: "Please, specify the field" }}
            name="domain"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.domain}
                helperText={errors.domain?.message || " "}
                size="small"
              />
            )}
          />
        </StyledFieldsetWrapper>
      </InfoFormWrapper>
      <InfoFormWrapper>
        <StyledFieldsetWrapper isFullWidth={true} inputWidth="100%">
          <FormLabel required={true}>Description</FormLabel>
          <Controller
            control={control}
            rules={{ required: "Please, specify the field" }}
            name="description"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.description}
                helperText={errors.description?.message || " "}
                multiline
                rows={3}
              />
            )}
          ></Controller>
        </StyledFieldsetWrapper>
      </InfoFormWrapper>

      <StyledFormActions>
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
      </StyledFormActions>
    </form>
  );
};
