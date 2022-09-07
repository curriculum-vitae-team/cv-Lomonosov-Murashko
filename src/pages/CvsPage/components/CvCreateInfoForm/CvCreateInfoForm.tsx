import { useState } from "react";
import { CvInput } from "@graphql/Cv/Cv.interface";
import { ROUTE } from "@constants/route";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { CvCreateInfoFormProps } from "./CvCreateInfoForm.types";
import { ErrorToast } from "@components/ErrorToast";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { Fieldset } from "@components/Fieldset";
import { Button, Checkbox, DialogActions, FormControlLabel } from "@mui/material";
import { SaveButtonWithAdminAccess } from "@components/FormSaveButton";
import { FormContolLabelWrapper } from "./CvCreateInfoForm.styles";

export const CvCreateInfoForm = ({
  onSubmit,
  error,
}: CvCreateInfoFormProps) => {
  const navigate = useNavigate();
  const [isTemplate, setIsTemplate] = useState(false);

  const handleTemplateFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTemplate(e.target.checked);
  };

  const { control, handleSubmit } = useForm<CvInput>({
    defaultValues: {
      name: "",
      description: "",
      userId: "",
      projectsIds: [],
      skills: [],
      languages: [],
      is_template: false,
    },
  });

  const onCancel: React.MouseEventHandler = (e) => {
    navigate(ROUTE.CVS);
  };

  return error ? (
    <ErrorToast message={error} />
  ) : (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
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
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="User ID"
          name="userId"
        />
        <FormContolLabelWrapper>
          <FormControlLabel
            control={
              <Checkbox
                checked={isTemplate}
                onChange={handleTemplateFieldChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            }
            label="Use as a template"
          />
        </FormContolLabelWrapper>

        {/* TODO: Add skills, projectsIds and languages here */}
      </InfoFormWrapper>
      <DialogActions>
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
      </DialogActions>
    </form>
  );
};
