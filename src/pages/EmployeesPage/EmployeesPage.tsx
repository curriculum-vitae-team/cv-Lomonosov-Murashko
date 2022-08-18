import { useMutation, useQuery } from "@apollo/client";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { createTable } from "@components/Table/Table";
import { DELETE_USER, GET_USERS } from "@graphql/User/User.queries";
import {
  DeleteUserOutput,
  UsersData,
  DeleteUserInput,
} from "@graphql/User/User.interface";
import { IEmployeeTable } from "@interfaces/IEmployee";
import { useState } from "react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { TableEntry } from "../../constants/table";
import { getEmployees } from "./helpers";
import { deleteUserCacheUpdate } from "@graphql/User/User.cache";
import { Loader } from "@components/Loader";
import { InlineError } from "@components/InlineError";

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
  const [isLoading, setIsLoading] = useState(true);

  const { data, refetch } = useQuery<UsersData>(GET_USERS, {
    onCompleted: () => {
      setIsLoading(false);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const [deleteUser] = useMutation<DeleteUserOutput, DeleteUserInput>(
    DELETE_USER,
    {
      optimisticResponse: {
        deleteUser: {
          affected: 1,
        },
      },
    },
  );

  const handleItemDelete = (id: string) => {
    deleteUser({
      variables: { id },
      update: deleteUserCacheUpdate(id),
    });
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
        {isLoading ? (
          <Loader />
        ) : error ? (
          <InlineError
            message="Something went wrong when trying to fetch employees data"
            tryAgainFn={() => {
              refetch();
            }}
          />
        ) : (
          data?.users && (
            <Table
              onDelete={handleItemDelete}
              head={head}
              items={getEmployees(data.users)}
              redirectButtonText="Profile"
              deleteButtonText="Delete"
              entryType={TableEntry.EMPLOYEE}
            />
          )
        )}
      </PageBody>
    </PageWrapper>
  );
};
