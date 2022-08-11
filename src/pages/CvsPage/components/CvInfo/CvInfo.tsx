import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { ButtonWrapper, StyledDialogActions } from "./CvInfo.styles";
import { Button } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { Fieldset } from "@components/Fieldset";
import { CvInfoProps } from "./CvInfo.types";
import { useState } from "react";
import { PdfWrapperWithOverlay } from "@components/PdfWrapper";

export const CvInfo = ({ cvId }: CvInfoProps) => {
  const [isPdfVisible, setIsPdfVisible] = useState(false);
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

  const shopPreview = () => {
    setIsPdfVisible(true);
  };

  const hidePreview = () => {
    setIsPdfVisible(false);
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
          <Button onClick={shopPreview} variant="outlined">
            Preview
          </Button>
        </StyledDialogActions>
      </form>
      {isPdfVisible && <PdfWrapperWithOverlay onClose={hidePreview} />}
    </>
  );
};
