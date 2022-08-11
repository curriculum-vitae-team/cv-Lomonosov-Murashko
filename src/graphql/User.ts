import { gql } from "@apollo/client";

export interface User {
  id: string;
  email: string;
  profile: {
    first_name: string;
    last_name: string;
    department: string;
    specialization: string;
  };
}

export interface UserVars {
  id: string;
}

export interface UserCvs {
  user: {
    cvs: [
      {
        id: string;
        name: string;
      },
    ];
  };
}

export interface UserUpdateResponse {
  id: string;
}

export interface UserDeleteResponse {
  affected: number;
}

const USER_INFO = gql`
  fragment UserInfo on User {
    id
    email
    profile {
      first_name
      last_name
      department
      specialization
    }
  }
`;

export const GET_USERS = gql`
  ${USER_INFO}
  query GetUsers {
    users {
      ...UserInfo
    }
  }
`;

export const GET_USER_INFO = gql`
  ${USER_INFO}
  query GetUser($id: ID!) {
    user(id: $id) {
      ...UserInfo
    }
  }
`;

export const GET_USER_CVS = gql`
  query GetUserCvs($id: ID!) {
    user(id: $id) {
      cvs {
        id
        name
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $userInput: UserInput!) {
    id
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    affected
  }
`;
