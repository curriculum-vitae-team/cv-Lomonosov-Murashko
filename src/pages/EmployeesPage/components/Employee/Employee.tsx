import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from "@mui/material";
import { IEmployee } from "../../../../interfaces/employeesInterface";
import { StyledWrapperGrid } from "./Employee.styles";
import { ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";

type EmployeeProps = {
  info: IEmployee;
};

export const Employee = ({ info }: EmployeeProps) => {
  const deleteEmployee = (id: number) => {
    // TODO: delete employee
  };

  return (
    <Accordion>
      <AccordionSummary
        id="header"
        aria-controls="content"
        expandIcon={<ExpandMore />}
      >
        <StyledWrapperGrid container>
          <Grid item xs={2.4}>
            {info.name}
          </Grid>
          <Grid item xs={2.4}>
            {info.lastName}
          </Grid>
          <Grid item xs={2.4}>
            {info.email}
          </Grid>
          <Grid item xs={2.4}>
            {info.department}
          </Grid>
          <Grid item xs={2.1}>
            {info.specialization}
          </Grid>
          <Grid item xs={0.3}></Grid>
        </StyledWrapperGrid>
      </AccordionSummary>
      <AccordionDetails>
        <Button>
          <Link to={info.id.toString()}>Profile</Link>
        </Button>
        <Button onClick={() => deleteEmployee(info.id)}>Delete</Button>
      </AccordionDetails>
    </Accordion>
  );
};
