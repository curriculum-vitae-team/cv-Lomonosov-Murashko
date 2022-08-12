import { useMutation, useQuery } from "@apollo/client";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { createTable } from "@components/Table/Table";
import { DELETE_USER, GET_USERS } from "@graphql/User";
import {
  DeleteUserOutput,
  UsersData,
  DeleteUserInput,
} from "@graphql/User.interfaces";
import { IEmployeeTable } from "@interfaces/IEmployee";
import { useState } from "react";
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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { data } = useQuery<UsersData>(GET_USERS, {
    onCompleted: () => {
      setLoading(false);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const [deleteUser] = useMutation<DeleteUserOutput, DeleteUserInput>(
    DELETE_USER,
  );

  const handleItemDelete = (id: string) => {
    deleteUser({
      variables: { id },
      update(cache, { data }) {
        const existingUsers = cache.readQuery<UsersData>({ query: GET_USERS });

        if (existingUsers && data?.deleteUser.affected) {
          cache.writeQuery({
            query: GET_USERS,
            data: {
              users: existingUsers.users.filter((user) => user.id !== id),
            },
          });

          cache.evict({ id });
        }
      },
    });
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
