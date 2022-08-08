import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { StyledTable } from "@components/styled/StyledTable";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import { Breadcrumb } from "../../components/Breadcrumb";
import { TableEntry } from "../../constants/table";

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
  const employees = useSelector((state: RootState) => state.employees);

  const handleItemDelete = (id: string) => {
    // TODO:
  };

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
      <PageBody>
        <StyledTable
          onDelete={handleItemDelete}
          head={head}
          items={employees}
          redirectButtonText="Profile"
          deleteButtonText="Delete"
          entryType={TableEntry.EMPLOYEE}
        />
      </PageBody>
    </PageWrapper>
  );
};
