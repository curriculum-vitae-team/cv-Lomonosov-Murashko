import { gql } from "@apollo/client";

export const GET_DEPARTMENTS = gql`
  query GetDepartments {
    departments {
      name
      id
    }
  }
`;

export const DELETE_DEPARTMENT = gql`
  mutation DeleteDepartment($id: ID!) {
    deleteDepartment(id: $id) {
      affected
    }
  }
`;

export const UPDATE_DEPARTMENT = gql`
  mutation UpdateDepartment($id: ID!, $department: DepartmentInput!) {
    updateDepartment(id: $id, department: $department) {
      name
      id
    }
  }
`;
