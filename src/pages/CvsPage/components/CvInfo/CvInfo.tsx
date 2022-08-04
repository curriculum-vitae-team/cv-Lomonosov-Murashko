import { StyledFormActions } from "@components/FormActions/FormActions.styles";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { StyledFieldsetWrapper } from "@components/styled/StyledFieldsetWrapper";
import { ICV } from "@interfaces/ICV";
import { ButtonWrapper } from "./CvInfo.styles";
import { Button, FormLabel, TextField } from "@mui/material";
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
import { Fieldset } from "@components/Fieldset";

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
        <Fieldset
          isError={!!errors.email}
          helperText={errors.email?.message || " "}
          control={control}
          required={true}
          label="Email"
          rules={{ required: "Please, specify the field" }}
          name="email"
        />
        <Fieldset
          isError={!!errors.lastName}
          helperText={errors.lastName?.message || " "}
          control={control}
          required={true}
          label="Last Name"
          rules={{ required: "Please, specify the field" }}
          name="lastName"
        />
        <Fieldset
          isError={!!errors.skills}
          helperText={errors.skills?.message || " "}
          control={control}
          required={true}
          label="Skills"
          rules={{ required: "Please, specify the field" }}
          name="skills"
        />
        <Fieldset
          isError={!!errors.specialization}
          helperText={errors.specialization?.message || " "}
          control={control}
          required={true}
          label="Specialization"
          rules={{ required: "Please, specify the field" }}
          name="specialization"
        />
        <Fieldset
          isError={!!errors.department}
          helperText={errors.department?.message || " "}
          control={control}
          required={true}
          label="Department"
          rules={{ required: "Please, specify the field" }}
          name="department"
        />
      </InfoFormWrapper>

      <ButtonWrapper>
        <Button onClick={addProjectClickHandler} variant="contained">
          Add Project
        </Button>
      </ButtonWrapper>
      {/* cvs.projects.map ...  */}
      <ProjectAccordion />

      <StyledFormActions>
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
      </StyledFormActions>
    </form>
  );
};
