import { Button, DialogActions } from "@mui/material";
import { Fieldset } from "@components/Fieldset";
import { SaveButtonWithAdminAccess } from "@components/FormSaveButton";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { ROUTE } from "@constants/route";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { EmployeeCreateInfoFormProps } from "./EmployeeCreateInfoForm.types";
import { IEmployeeCore } from "@interfaces/IEmployee";
import { ErrorToast } from "@components/ErrorToast";

export const EmployeeCreateInfoForm = ({
  onSubmit,
  error,
}: EmployeeCreateInfoFormProps) => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<IEmployeeCore>({
    defaultValues: {
      auth: {
        email: "",
        password: "",
      },
      profile: {
        first_name: "",
        last_name: "",
        departmentId: "",
        positionId: "",
        skills: [],
        languages: [],
      },
      cvsIds: [],
    },
  });

  const onCancel: React.MouseEventHandler = (e) => {
    navigate(ROUTE.EMPLOYEES);
  };

  return error ? (
    <ErrorToast message={error} />
  ) : (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InfoFormWrapper>
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Email"
          type="email"
          name="auth.email"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Password"
          type="password"
          name="auth.password"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="First Name"
          name="profile.first_name"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Last Name"
          name="profile.last_name"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Department ID"
          name="profile.departmentId"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Position ID"
          name="profile.positionId"
        />
        {/* TODO: Add skills and languages here */}
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
