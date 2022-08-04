import { Button, FormLabel, TextField } from "@mui/material";
import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from "react-hook-form";

import { emp } from "../../EmployeesPage";
import { useNavigate, useParams } from "react-router";
import { ROUTE } from "@constants/route";
import { IEmployee } from "@interfaces/IEmployee";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { StyledFieldsetWrapper } from "@components/styled/StyledFieldsetWrapper";
import { StyledFormActions } from "@components/FormActions/FormActions.styles";
import { Fieldset } from "@components/Fieldset";

export const EmployeeInfo = () => {
  const { employeeId } = useParams();
  const employee = emp.find(({ id }) => id === employeeId)!;

  const { control, handleSubmit, reset } = useForm<IEmployee>({
    defaultValues: {
      name: employee.name,
      lastName: employee.lastName,
      email: employee.email,
      department: employee.department,
      specialization: employee.specialization,
    },
  });

  const { errors } = useFormState({ control });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IEmployee> = (data) => {
    // save employee info
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InfoFormWrapper>
        <Fieldset
          isError={!!errors.name}
          helperText={errors.name?.message || " "}
          control={control}
          required={true}
          label="First Name"
          rules={{ required: "Please, specify the field" }}
          name="name"
        />
        <Fieldset
          isError={!!errors.lastName}
          helperText={errors.lastName?.message || " "}
          control={control}
          required={true}
          label="Last Name"
          rules={{ required: "Please, specify the field" }}
          name="lastName"
        />
        <Fieldset
          isError={!!errors.email}
          helperText={errors.email?.message || " "}
          control={control}
          required={true}
          label="Email"
          rules={{ required: "Please, specify the field" }}
          name="email"
        />
        <Fieldset
          isError={!!errors.department}
          helperText={errors.department?.message || " "}
          control={control}
          required={true}
          label="Department"
          rules={{ required: "Please, specify the field" }}
          name="department"
        />
        <Fieldset
          isError={!!errors.specialization}
          helperText={errors.specialization?.message || " "}
          control={control}
          required={true}
          label="Specialization"
          rules={{ required: "Please, specify the field" }}
          name="specialization"
        />
      </InfoFormWrapper>
      <StyledFormActions>
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
      </StyledFormActions>
    </form>
  );
};
