import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { StyledFieldsetWrapper } from "@components/styled/StyledFieldsetWrapper";
import { ICV } from "@interfaces/ICV";
import { ButtonWrapper } from "./CvInfo.styles";
import { Button, DialogActions, FormLabel, TextField } from "@mui/material";
import {
  Controller,
  SubmitHandler,
  useForm,
  useFormState,
} from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { cvs } from "@pages/CvsPage/CvsPage";
import { ROUTE } from "@constants/route";
import { ProjectAccordion } from "@components/ProjectAccordion";

export const CvInfo = () => {
  const { cvId } = useParams();
  const cv = cvs.find(({ id }) => id === cvId)!;

  const { control, handleSubmit, reset } = useForm<ICV>({
    defaultValues: {
      id: cv.id,
      name: cv.name,
      description: cv.description,
      email: cv.email,
      lastName: cv.lastName,
      skills: cv.skills,
      specialization: cv.specialization,
      department: cv.department,
    },
  });

  const { errors } = useFormState({ control });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ICV> = (data) => {
    // save cv info
    reset();
  };

  const addProjectClickHandler = () => {
    // show projects table
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InfoFormWrapper>
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
          <FormLabel required={true}>Skills</FormLabel>
          <Controller
            control={control}
            rules={{ required: "Please, specify the field" }}
            name="skills"
            render={({ field }) => (
              <TextField
                {...field}
                error={!!errors.skills}
                helperText={errors.skills?.message || " "}
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
      </InfoFormWrapper>

      <ButtonWrapper>
        <Button onClick={addProjectClickHandler} variant="contained">
          Add Project
        </Button>
      </ButtonWrapper>
      {/* cvs.projects.map ...  */}
      <ProjectAccordion />

      <DialogActions>
        <Button type="submit" value="Save" variant="contained">
          Save
        </Button>
        <Button
          onClick={() => navigate(ROUTE.CVS)}
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
