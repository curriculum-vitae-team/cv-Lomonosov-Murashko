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

export const ProjectInfo = () => {
  const { projectId } = useParams();
  const project = proj.find(({ id }) => id === projectId)!;

  const { control, handleSubmit, reset } = useForm<IProject>({
    defaultValues: {
      name: project.name,
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
