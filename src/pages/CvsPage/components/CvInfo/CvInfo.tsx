import { Button, DialogActions } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { Fieldset } from "@components/Fieldset";
import { CvInfoProps } from "./CvInfo.types";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import {
  CvInfoData,
  CvInput,
  UpdateCvInput,
  UpdateCvOutput,
} from "@graphql/Cv/Cv.interface";
import { ButtonWrapper } from "./CvInfo.styles";
import { ProjectAccordion } from "@components/ProjectAccordion";
import { GET_CV_INFO, UPDATE_CV } from "@graphql/Cv/Cv.queries";

export const CvInfo = ({ cvId }: CvInfoProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { control, handleSubmit, reset, getValues } = useForm<CvInput>({
    defaultValues: {
      name: "",
      description: "",
      projectsIds: [],
    },
  });

  const { data } = useQuery<CvInfoData>(GET_CV_INFO, {
    variables: {
      id: cvId,
    },
    onCompleted: (data) => {
      setLoading(false);

      const { name, description, projects } = data.cv;

      reset({
        name,
        description,
        projectsIds: projects.map((proj) => proj.id),
      });
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const [saveCv] = useMutation<UpdateCvOutput, UpdateCvInput>(UPDATE_CV, {
    onCompleted: (data) => {
      navigate("/cvs");
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<CvInput> = (data) => {
    setLoading(true);

    const { name, description, projectsIds } = data;

    console.log(data);

    saveCv({
      variables: {
        id: cvId,
        cv: {
          name,
          description,
          projectsIds,
        },
      },
    });
  };

  const onAddProject: React.MouseEventHandler = (e) => {
    // TODO: Fetch projects. Show projects select component.
    // Not a table.
  };

  return loading ? (
    <>loader</>
  ) : error ? (
    <>error</>
  ) : (
    <>
      {Object.values(getValues()).every((key) => !!key) && (
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
      )}
    </>
  );
};
