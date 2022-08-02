import { Stack, Typography } from "@mui/material";
import { Breadcrumb } from "../../components/Breadcrumb";
import { StyledTable, StyledTypography } from "./EmployeesPage.styles";

export const emp = [
  {
    id: "1",
    name: "Ilya",
    lastName: "Murashko",
    email: "murashko.ilya7399@gmail.com",
    department: "JavaScript",
    specialization: "React",
  },
  {
    id: "2",
    name: "Iaan",
    lastName: "Lamanosau",
    email: "1dsdcs23@qwe.ru",
    department: "JavaScript",
    specialization: "Angular",
  },
  {
    id: "3",
    name: "Denis",
    lastName: "Bogush",
    email: "1cddfcdsdcs23@qwe.ru",
    department: "TypesScript",
    specialization: "React",
  },
  {
    id: "4",
    name: "Anna",
    lastName: "qwe",
    email: "dlkvndfv@qwe.com",
    department: "JavaScript",
    specialization: "React",
  },
  {
    id: "5",
    name: "Ilya",
    lastName: "Murashko",
    email: "murashko.ilya7399@gmail.com",
    department: "JavaScript",
    specialization: "React",
  },
  {
    id: "6",
    name: "Ilya",
    lastName: "Murashko",
    email: "murashko.ilya7399@gmail.com",
    department: "JavaScript",
    specialization: "React",
  },
];

const head = [
  { name: "First Name", isSortable: true },
  { lastName: "Last Name", isSortable: true },
  { email: "Email", isSortable: false },
  { department: "Department", isSortable: false },
  { specialization: "Specialization", isSortable: true },
];

export const EmployeesPage = () => {
  return (
    <Stack>
      <Breadcrumb />
      <StyledTypography variant="h5">
        Employees
      </StyledTypography>
      <Typography padding="1rem" variant="body2">
        Employees list
      </Typography>
      <StyledTable
        onDelete={(id) => {
          console.log(id);
        }}
        head={head}
        items={emp}
        redirectButtonText={"Profile"}
        deleteButtonText={"Delete"}
      />
    </Stack>
  );
};
