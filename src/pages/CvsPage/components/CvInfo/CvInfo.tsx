import { useState } from "react";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { ICV } from "@interfaces/ICV";
import { ButtonWrapper, StyledDialogActions } from "./CvInfo.styles";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { cvsMock } from "@mock/cvs";
import { ROUTE } from "@constants/route";
import { ProjectAccordion } from "@components/ProjectAccordion";
import { Fieldset } from "@components/Fieldset";
import { CvInfoProps } from "./CvInfo.types";
import { useMutation, useQuery } from "@apollo/client";
import { memo, useEffect, useLayoutEffect } from "react";
import { CvInput } from "@graphql/Cv/Cv.interface";
import { CvPatternsWithOverlay } from "@components/CvPatterns";

export const CvInfo = memo(
  ({ cv, onSubmit, onAddProject, onCancel }: CvInfoProps) => {
    const [isPatternsVisible, setIsPatternsVisible] = useState(false);

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
