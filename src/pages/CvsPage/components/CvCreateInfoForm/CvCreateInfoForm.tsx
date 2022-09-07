import { CvInput } from "@graphql/Cv/Cv.interface";
import { ROUTE } from "@constants/route";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { CvCreateInfoFormProps } from "./CvCreateInfoForm.types";
import { ErrorToast } from "@components/ErrorToast";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { Fieldset } from "@components/Fieldset";
import { Button, Checkbox, DialogActions } from "@mui/material";
import { SaveButtonWithAdminAccess } from "@components/FormSaveButton";
import { FormContolLabelWrapper } from "./CvCreateInfoForm.styles";

export const CvCreateInfoForm = ({
  onSubmit,
  error,
}: CvCreateInfoFormProps) => {
  const navigate = useNavigate();

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
          <Controller
            name="is_template"
            control={control}
            render={({ field }) => (
              <Checkbox
                onChange={(e) => field.onChange(e.target.checked)}
                checked={field.value}
              />
            )}
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
