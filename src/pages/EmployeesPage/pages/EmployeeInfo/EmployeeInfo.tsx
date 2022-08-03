import { Button, TextField, Typography } from "@mui/material";
import {
  useForm,
  Controller,
  SubmitHandler,
  useFormState,
} from "react-hook-form";
import { StyledDiv } from "./EmployeeInfo.styles";

import { emp } from "../../EmployeesPage";
import { useParams } from "react-router";

interface IEmployee {
  name: string;
  lastName: string;
  email: string;
  department: string;
  specialization: string;
}

export const EmployeeInfo = () => {
  const { control, handleSubmit, reset } = useForm<IEmployee>();
  const { errors } = useFormState({ control });
  const { employeeId } = useParams();

  let employ = {
    name: "",
    lastName: "",
    email: "",
    department: "",
    specialization: "",
  };

  emp.forEach((employee: any) => {
    if (employee.id === employeeId) {
      employ = {
        name: employee.name,
        lastName: employee.lastName,
        email: employee.email,
        department: employee.department,
        specialization: employee.specialization,
      };
    }
  });

  const onSubmit: SubmitHandler<IEmployee> = (data) => {
    // save employee info
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledDiv>
          <div className="textfield-wrapper">
            <Typography>First Name</Typography>
            <Controller
              control={control}
              rules={{ required: "Please, specify the field" }}
              name="name"
              defaultValue={employ.name}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.name?.message}
                  helperText={errors.name?.message || " "}
                  size="small"
                />
              )}
            />
          </div>

          <div className="textfield-wrapper">
            <Typography>Last Name</Typography>
            <Controller
              control={control}
              rules={{
                required: "Please, specify the correct pattern",
              }}
              name="lastName"
              defaultValue={employ.lastName}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.lastName?.message}
                  helperText={errors.lastName?.message || " "}
                  size="small"
                />
              )}
            />
          </div>
          <div className="textfield-wrapper">
            <Typography>Email</Typography>
            <Controller
              control={control}
              rules={{ required: "Please, specify the field" }}
              name="email"
              defaultValue={employ.email}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.email?.message}
                  helperText={errors.email?.message || " "}
                  size="small"
                />
              )}
            />
          </div>
          <div className="textfield-wrapper">
            <Typography>Department</Typography>
            <Controller
              control={control}
              rules={{ required: "Please, specify the field" }}
              name="department"
              defaultValue={employ.department}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.department?.message}
                  helperText={errors.department?.message || " "}
                  size="small"
                />
              )}
            />
          </div>
          <div className="textfield-wrapper">
            <Typography>Specialization</Typography>
            <Controller
              control={control}
              rules={{ required: "Please, specify the field" }}
              name="specialization"
              defaultValue={employ.specialization}
              render={({ field }) => (
                <TextField
                  {...field}
                  error={!!errors.specialization?.message}
                  helperText={errors.specialization?.message || " "}
                  size="small"
                />
              )}
            />
          </div>
        </StyledDiv>
        <div className="buttons">
          <Button type="submit" value="Save">
            Save
          </Button>
          <Button onClick={() => reset()} type="reset" value="Cancel">
            Cancel
          </Button>
        </div>
      </form>
    </>
  );
};
