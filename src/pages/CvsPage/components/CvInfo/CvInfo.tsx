import { Button, DialogActions } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { Fieldset } from "@components/Fieldset";
import { CvInfoProps } from "./CvInfo.types";
import { useMutation, useQuery } from "@apollo/client";
import { memo, useEffect, useLayoutEffect, useState } from "react";
import { CvInput } from "@graphql/Cv/Cv.interface";
import { ButtonWrapper } from "./CvInfo.styles";
import { ProjectAccordion } from "@components/ProjectAccordion";

export const CvInfo = memo(
  ({ cv, onSubmit, onAddProject, onCancel }: CvInfoProps) => {
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
        </ButtonWrapper>
        {/* cv.projects.map ...  */}
        <ProjectAccordion />

        <DialogActions>
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
        </DialogActions>
      </form>
    );
  },
);
