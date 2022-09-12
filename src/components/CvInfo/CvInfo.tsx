import { useState } from "react";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { ICV } from "@interfaces/ICV";
import { ButtonWrapper } from "./CvInfo.styles";
import { StyledDialogActions } from "../styled/StyledDialogActions";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { ProjectAccordion } from "@components/ProjectAccordion";
import { Fieldset } from "@components/Fieldset";
import { CvInfoProps } from "./CvInfo.types";
import { memo, useEffect } from "react";
import { CvInput } from "@graphql/Cv/Cv.interface";
import { CvPatternsWithOverlay } from "@components/CvPatterns";
import { SaveButtonWithAdminAccess } from "@components/FormSaveButton";

export const CvInfo = memo(
  ({ cv, onSubmit, onAddProject, onCancel }: CvInfoProps) => {
    const [isPatternsVisible, setIsPatternsVisible] = useState(false);

    const { control, handleSubmit, reset } = useForm<CvInput>({
      defaultValues: {
        name: cv.name,
        description: cv.description,
        projectsIds: cv.projectsIds,
      },
    });

    useEffect(() => {
      const { name, description, projectsIds } = cv;

      reset({ name, description, projectsIds });
    }, [cv, reset]);

    const addProjectClickHandler = () => {
      // show projects select component
    };

    const showPreview = () => {
      setIsPatternsVisible(true);
    };
    const hidePreview = () => {
      setIsPatternsVisible(false);
    };    

    return (
      <>
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
          </ButtonWrapper>
          <ProjectAccordion />

          <StyledDialogActions>
            <SaveButtonWithAdminAccess />
            <Button
              onClick={onCancel}
              type="reset"
              value="Cancel"
              variant="outlined"
              color="info"
            >
              Cancel
            </Button>
            <Button onClick={showPreview} variant="outlined">
              Preview
            </Button>
          </StyledDialogActions>
        </form>
        {isPatternsVisible && <CvPatternsWithOverlay onClose={hidePreview} />}
      </>
    );
  },
);
