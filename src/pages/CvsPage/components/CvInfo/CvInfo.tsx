import { useState } from "react";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { ButtonWrapper, StyledDialogActions } from "./CvInfo.styles";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { Fieldset } from "@components/Fieldset";
import { CvInfoProps } from "./CvInfo.types";
import { CvPatternsWithOverlay } from "@components/CvPatterns";

export const CvInfo = ({ cvId }: CvInfoProps) => {
  const [isPatternsVisible, setIsPatternsVisible] = useState(false);
  const cv = cvsMock.find(({ id }) => id === cvId)!;

  const { control, handleSubmit, reset } = useForm<ICV>({
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
            label="Email"
            name="email"
          />
          <Fieldset
            control={control}
            required="Please, specify the field"
            label="Last Name"
            name="lastName"
          />
          <Fieldset
            control={control}
            required="Please, specify the field"
            label="Skills"
            name="skills"
          />
          <Fieldset
            control={control}
            required="Please, specify the field"
            label="Specialization"
            name="specialization"
          />
          <Fieldset
            control={control}
            required="Please, specify the field"
            label="Department"
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

        <StyledDialogActions>
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
          <Button onClick={showPreview} variant="outlined">
            Preview
          </Button>
        </StyledDialogActions>
      </form>
      {isPatternsVisible && <CvPatternsWithOverlay onClose={hidePreview} />}
    </>
  );
};
