import { Button, TextField, Typography } from "@mui/material";
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
import { StyledLabel } from "@components/styled/StyledLabel";
import { StyledFormActions } from "@components/FormActions/FormActions.styles";

export const EmployeeInfo = () => {
  const { control, handleSubmit, reset } = useForm<IEmployee>();
  const { errors, isValid } = useFormState({ control });
  const { employeeId } = useParams();

  const navigate = useNavigate();

  const employee = emp.find(({ id }) => id === employeeId)!;

  const onSubmit: SubmitHandler<IEmployee> = (data) => {
    // save employee info
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InfoFormWrapper>
          <StyledLabel>
            <Typography>First Name</Typography>
            <Controller
              control={control}
              rules={{ required: "Please, specify the field" }}
              name="name"
              defaultValue={employee.name}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.name}
                  helperText={errors.name?.message || " "}
                  size="small"
                />
              )}
            />
          </StyledLabel>

          <StyledLabel>
            <Typography>Last Name</Typography>
            <Controller
              control={control}
              rules={{
                required: "Please, specify the field",
              }}
              name="lastName"
              defaultValue={employee.lastName}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message || " "}
                  size="small"
                />
              )}
            />
          </StyledLabel>
          <StyledLabel>
            <Typography>Email</Typography>
            <Controller
              control={control}
              rules={{ required: "Please, specify the field" }}
              name="email"
              defaultValue={employee.email}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.email}
                  helperText={errors.email?.message || " "}
                  size="small"
                />
              )}
            />
          </StyledLabel>
          <StyledLabel>
            <Typography>Department</Typography>
            <Controller
              control={control}
              rules={{ required: "Please, specify the field" }}
              name="department"
              defaultValue={employee.department}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.department}
                  helperText={errors.department?.message || " "}
                  size="small"
                />
              )}
            />
          </StyledLabel>
          <StyledLabel>
            <Typography>Specialization</Typography>
            <Controller
              control={control}
              rules={{ required: "Please, specify the field" }}
              name="specialization"
              defaultValue={employee.specialization}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.specialization}
                  helperText={errors.specialization?.message || " "}
                  size="small"
                />
              )}
            />
          </StyledLabel>
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
    </>
  );
};
