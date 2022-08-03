import { Button, TextField, Typography } from "@mui/material";
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

import { proj } from "../../ProjectsPage";
import { FormActions } from "@components/FormActions";
import { StyledFieldsetWrapper } from "@components/styled/StyledFieldsetWrapper";

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
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InfoFormWrapper>
          <StyledFieldsetWrapper>
            <Typography>Project name</Typography>
            <Controller
              control={control}
              rules={{ required: "Please, specify the field" }}
              name="name"
              defaultValue={project.name}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.name?.message}
                  helperText={errors.name?.message || " "}
                  size="small"
                />
              )}
            />
          </StyledFieldsetWrapper>
          <StyledFieldsetWrapper>
            <Typography>Start date</Typography>
            <Controller
              control={control}
              rules={{ required: "Please, specify the field" }}
              name="name"
              defaultValue={project.name}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.name?.message}
                  helperText={errors.name?.message || " "}
                  size="small"
                />
              )}
            />
          </StyledFieldsetWrapper>
          <StyledFieldsetWrapper>
            <Typography>End date</Typography>
            <Controller
              control={control}
              rules={{ required: "Please, specify the field" }}
              name="name"
              defaultValue={project.name}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.name?.message}
                  helperText={errors.name?.message || " "}
                  size="small"
                />
              )}
            />
          </StyledFieldsetWrapper>
        </InfoFormWrapper>
        <FormActions>
          <Button type="submit" value="Save">
            Save
          </Button>
          <Button
            onClick={() => navigate(ROUTE.EMPLOYEES)}
            type="reset"
            value="Cancel"
          >
            Cancel
          </Button>
        </FormActions>
      </form>
    </>
  );
};
