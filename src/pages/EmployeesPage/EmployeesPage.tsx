import { useState } from "react";
import { Typography, Grid } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Employees } from "./components/Employees";
import {
  StyledDiv,
  StyledGrid,
  StyledButton,
  DivContainer,
} from "./EmployeesPage.styles";
import { IEmployee } from "../../interfaces/employeesInterface";
import { Breadcrumb } from "../../components/Breadcrumb";

// TODO: delete later, fake employee data
const emp = [
  {
    id: 1,
    name: "Ilya",
    lastName: "Murashko",
    email: "123@qwe.com",
    department: "JavaScript",
    specialization: "React",
  },
  {
    id: 2,
    name: "Iaan",
    lastName: "Lamanosau",
    email: "1dsdcs23@qwe.ru",
    department: "JavaScript",
    specialization: "Angular",
  },
  {
    id: 3,
    name: "Denis",
    lastName: "Bogush",
    email: "1cddfcdsdcs23@qwe.ru",
    department: "TypesScript",
    specialization: "React",
  },
  {
    id: 4,
    name: "aNNa",
    lastName: "qwe",
    email: "dlkvndfv@qwe.com",
    department: "JavaScript",
    specialization: "React",
  },
];

export const EmployeesPage = () => {
  const [employees, setEmployees] = useState(emp);
  const [isNameSortedByOrder, setIsNameSortedByOrder] = useState(false);
  const [isLastNameSortedByOrder, setIsLastNameSortedByOrder] = useState(false);

  // TODO: move to redux

  const sortEmployeesByOrder = (sortingField: string) => {
    return [...employees].sort((a: IEmployee, b: IEmployee) => {
      if (
        a[sortingField as keyof IEmployee].toString().toLowerCase() >
        b[sortingField as keyof IEmployee].toString().toLowerCase()
      )
        return 1;
      if (
        a[sortingField as keyof IEmployee].toString().toLowerCase() <
        b[sortingField as keyof IEmployee].toString().toLowerCase()
      )
        return -1;
      return 0;
    });
  };

  // TODO: move to redux

  const sortEmployeesInReverseOrder = (sortingField: string) => {
    return [...employees].sort((a: IEmployee, b: IEmployee) => {
      if (
        a[sortingField as keyof IEmployee].toString().toLowerCase() <
        b[sortingField as keyof IEmployee].toString().toLowerCase()
      )
        return 1;
      if (
        a[sortingField as keyof IEmployee].toString().toLowerCase() >
        b[sortingField as keyof IEmployee].toString().toLowerCase()
      )
        return -1;
      return 0;
    });
  };

  const sortByName = () => {
    if (isNameSortedByOrder) {
      setIsNameSortedByOrder(false);
      setEmployees(() => [...sortEmployeesInReverseOrder("name")]);
      return;
    }

    setIsNameSortedByOrder(true);
    setEmployees(() => [...sortEmployeesByOrder("name")]);
  };

  const sortByLastName = () => {
    if (isLastNameSortedByOrder) {
      setIsLastNameSortedByOrder(false);
      setEmployees(() => [...sortEmployeesInReverseOrder("lastName")]);
      return;
    }

    setIsLastNameSortedByOrder(true);
    setEmployees(() => [...sortEmployeesByOrder("lastName")]);
  };

  return (
    <StyledDiv>
      <Breadcrumb />
      <DivContainer>
        <StyledButton>Add Employee</StyledButton>
        <StyledGrid container>
          <Grid container item xs={2.4}>
            <Typography>First Name</Typography>
            <FilterListIcon
              className={isNameSortedByOrder ? "active" : ""}
              onClick={sortByName}
            />
          </Grid>
          <Grid container item xs={2.4}>
            <Typography>Last Name</Typography>
            <FilterListIcon
              className={isLastNameSortedByOrder ? "active" : ""}
              onClick={sortByLastName}
            />
          </Grid>
          <Grid container item xs={2.4}>
            <Typography>Email</Typography>
          </Grid>
          <Grid container item xs={2.4}>
            <Typography>Department</Typography>
          </Grid>
          <Grid container item xs={2.1}>
            <Typography>Specialization</Typography>
          </Grid>
          <Grid container item xs={0.3}></Grid>
        </StyledGrid>
        <Employees employees={employees} />
      </DivContainer>
    </StyledDiv>
  );
};
