import { useQuery } from "@apollo/client";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { createTable } from "@components/Table/Table";
import { removed } from "@features/employees/empoloyeesSlice";
import { GET_USERS, UsersData } from "@graphql/User";
import { IEmployeeTable } from "@interfaces/IEmployee";
import { useDispatch } from "react-redux";
import { Breadcrumb } from "../../components/Breadcrumb";
import { TableEntry } from "../../constants/table";
import { getEmployees } from "./helpers";

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

const Table = createTable<IEmployeeTable>();

export const EmployeesPage = () => {
  const { data, loading, error } = useQuery<UsersData>(GET_USERS);
  const dispatch = useDispatch();

  const handleItemDelete = (id: string) => {
    dispatch(removed(id));
  };

  let pageContent: React.ReactNode;

  if (loading) {
    pageContent = "loader";
  } else if (error) {
    pageContent = "error";
  } else if (data?.users) {
    pageContent = (
      <Table
        onDelete={handleItemDelete}
        head={head}
        items={getEmployees(data.users)}
        redirectButtonText="Profile"
        deleteButtonText="Delete"
        entryType={TableEntry.EMPLOYEE}
      />
    );
  }

  return (
    <PageWrapper>
      <PageTop>
        <Breadcrumb
          config={{
            employees: "Employees",
          }}
        />
        <PageTopTypography title="Employees" caption="Employees list" />
      </PageTop>
      <PageBody>{pageContent}</PageBody>
    </PageWrapper>
  );
};
