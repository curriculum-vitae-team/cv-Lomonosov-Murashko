import { Stack } from "@mui/material";
import { Breadcrumb } from "../../components/Breadcrumb";
import { StyledTable } from "./EmployeesPage.styles";

const emp = [
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
];

const head = [
  { columnKey: "name", columnName: "First Name", isSortable: true },
  { columnKey: "lastName", columnName: "Last Name", isSortable: true },
  { columnKey: "email", columnName: "Email", isSortable: false },
  { columnKey: "department", columnName: "Department", isSortable: false },
  {
    columnKey: "specialization",
    columnName: "Specialization",
    isSortable: true,
  },
];

export const EmployeesPage = () => {
  return (
    <Stack>
      <Breadcrumb />
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
