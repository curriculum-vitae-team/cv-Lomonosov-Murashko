import { Button, FormLabel, TextField, Typography } from "@mui/material";
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
import { FormActions } from "@components/FormActions";
import { StyledFieldsetWrapper } from "@components/styled/StyledFieldsetWrapper";
import { StyledFormActions } from "@components/FormActions/FormActions.styles";

export const ProjectInfo = () => {
  const { control, handleSubmit, reset } = useForm<IProject>();
  const { errors } = useFormState({ control });
  const { projectId } = useParams();

  const navigate = useNavigate();

  const project = proj.find(({ id }) => id === projectId)!;

  const onSubmit: SubmitHandler<IProject> = (data) => {
    // save employee info
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InfoFormWrapper>
        <StyledFieldsetWrapper>
          <FormLabel required={true}>First Name</FormLabel>
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
          <FormLabel required={true}>Last Name</FormLabel>
          <Controller
            control={control}
            rules={{
              required: "Please, specify the field",
            }}
            name="lastName"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.lastName}
                helperText={errors.lastName?.message || " "}
                size="small"
              />
            )}
          />
        </StyledFieldsetWrapper>
        <StyledFieldsetWrapper>
          <FormLabel required={true}>Email</FormLabel>
          <Controller
            control={control}
            rules={{ required: "Please, specify the field" }}
            name="email"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message || " "}
                size="small"
              />
            )}
          />
        </StyledFieldsetWrapper>
        <StyledFieldsetWrapper>
          <FormLabel required={true}>Department</FormLabel>

          <Controller
            control={control}
            rules={{ required: "Please, specify the field" }}
            name="department"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.department}
                helperText={errors.department?.message || " "}
                size="small"
              />
            )}
          />
        </StyledFieldsetWrapper>
        <StyledFieldsetWrapper>
          <FormLabel required={true}>Specialization</FormLabel>
          <Controller
            control={control}
            rules={{ required: "Please, specify the field" }}
            name="specialization"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.specialization}
                helperText={errors.specialization?.message || " "}
                size="small"
              />
            )}
          />
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
