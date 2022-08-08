import { Button, DialogActions } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { employeesMock } from "@mock/emp";
import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { IEmployee } from "@interfaces/IEmployee";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { Fieldset } from "@components/Fieldset";
import { EmployeeInfoProps } from "./EmployeeInfo.types";

export const EmployeeInfo = ({ employeeId }: EmployeeInfoProps) => {
  const employee = employeesMock.find(({ id }) => id === employeeId)!;

  const { control, handleSubmit, reset } = useForm<IEmployee>({
    defaultValues: {
      name: employee.name,
      lastName: employee.lastName,
      email: employee.email,
      department: employee.department,
      specialization: employee.specialization,
    },
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IEmployee> = (data) => {
    // save employee info
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InfoFormWrapper>
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="First Name"
          name="name"
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
          label="Email"
          name="email"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Department"
          name="department"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Specialization"
          name="specialization"
        />
      </InfoFormWrapper>
      <DialogActions>
        <Button type="submit" value="Save" variant="contained">
          Save
        </Button>
        <Button
          onClick={() => navigate(ROUTE.EMPLOYEES)}
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
