import { Grid } from "@mui/material";
import { IEmployee } from "../../../../interfaces/employeesInterface";
import { StyledWrapperGrid, StyledGrid, StyledLink } from "./Employee.styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ROUTE } from "../../../../route/route";

type EmployeeProps = {
  info: IEmployee;
};

export const Employee = ({ info }: EmployeeProps) => {
  const deleteEmployee = (id: number) => {
    // TODO: move method to redux (employees.filter((employee: IEmployee) => employee.id !== id);)
  };

  return (
    <StyledLink to={ROUTE.EMPLOYEES + "/" + info.id}>
      <StyledWrapperGrid container>
        <Grid item xs={3}>
          {info.name}
        </Grid>
        <Grid item xs={3}>
          {info.lastName}
        </Grid>
        <Grid item xs={3}>
          {info.email}
        </Grid>
        <StyledGrid item xs={3}>
          <DeleteOutlineIcon onClick={() => deleteEmployee(info.id)} />
        </StyledGrid>
      </StyledWrapperGrid>
    </StyledLink>
  );
};
