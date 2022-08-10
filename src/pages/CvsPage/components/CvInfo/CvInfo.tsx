import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { ButtonWrapper, StyledDialogActions } from "./CvInfo.styles";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { Fieldset } from "@components/Fieldset";
import { CvInfoProps } from "./CvInfo.types";
import { useMutation, useQuery } from "@apollo/client";
import { useLayoutEffect } from "react";
import { CvInput } from "@graphql/Cv/Cv.interface";
import { ProjectAccordion } from "@components/ProjectAccordion";

export const CvInfo = ({
  cv,
  onSubmit,
  onAddProject,
  onCancel,
}: CvInfoProps) => {
  const { control, handleSubmit, reset, getValues } = useForm<CvInput>({
    defaultValues: {
      name: cv.name,
      description: cv.description,
      projectsIds: cv.projectsIds,
    },
  });

  useLayoutEffect(() => {
    const { name, description, projectsIds } = cv;

    reset({ name, description, projectsIds });
  }, [cv, reset]);

  const previewHandler = () => {
    // navigate to preview
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InfoFormWrapper>
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Name"
          name="name"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Description"
          name="description"
        />
      </InfoFormWrapper>

      <ButtonWrapper>
        <Button onClick={onAddProject} variant="contained">
          Add Project
        </Button>
        <Button onClick={previewHandler} variant="outlined">
          Preview
        </Button>
      </ButtonWrapper>
      {/* cv.projects.map ...  */}
      <ProjectAccordion />

      <StyledDialogActions>
        <Button type="submit" value="Save" variant="contained">
          Save
        </Button>
        <Button
          onClick={onCancel}
          type="reset"
          value="Cancel"
          variant="outlined"
          color="info"
        >
          Cancel
        </Button>
      </StyledDialogActions>
    </form>
  );
};
