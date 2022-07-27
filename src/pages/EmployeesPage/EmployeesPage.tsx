import { useState } from "react";
import { Typography, Grid } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { StyledDiv, StyledGrid } from "./EmployeesPage.styles";
import { Employees } from "./components/Employees";
import { IEmployee } from "../../interfaces/employesInterface";

const emp = [
  {
    id: 1,
    name: "Ilya",
    lastName: "Murashko",
    email: "123@qwe.com",
  },
  {
    id: 2,
    name: "Iaan",
    lastName: "Lamanosau",
    email: "1dsdcs23@qwe.ru",
  },
  {
    id: 3,
    name: "Denis",
    lastName: "Bogush",
    email: "1cddfcdsdcs23@qwe.ru",
  },
  {
    id: 4,
    name: "aNNa",
    lastName: "qwe",
    email: "dlkvndfv@qwe.com",
  },
];

export const EmployeesPage = () => {
  const [employees, setEmployees] = useState(emp);
  const [isNameSortedByOrder, setIsNameSortedByOrder] = useState(false);
  const [isLastNameSortedByOrder, setIsLastNameSortedByOrder] = useState(false);

  const sortEmployeesByOrder = (sortingField: string) => {
    return employees.sort((a: IEmployee, b: IEmployee) => {
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

  const sortEmployeesInReverseOrder = (sortingField: string) => {
    return employees.sort((a: IEmployee, b: IEmployee) => {
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
      <Typography>Employees</Typography>
      <StyledGrid container>
        <Grid container item xs={4}>
          <Typography>Name</Typography>
          <FilterListIcon onClick={sortByName} />
        </Grid>
        <Grid container item xs={4}>
          <Typography>Last Name</Typography>
          <FilterListIcon onClick={sortByLastName} />
        </Grid>
        <Grid container item xs={4}>
          <Typography>Email</Typography>
        </Grid>
      </StyledGrid>
      <Employees employees={employees} />
    </StyledDiv>
  );
};
