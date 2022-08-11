import { gql } from "@apollo/client";

export interface User {
  id: string;
  email: string;
  profile: {
    first_name: string;
    last_name: string;
    department: {
      name: string;
    };
    specialization: string;
  };
}

export interface UsersData {
  users: User[];
}

export interface UserVars {
  id: string;
}

export interface UserCvsData {
  user: {
    cvs: [
      {
        id: string;
        name: string;
      },
    ];
  };
}

export interface UserUpdateData {
  id: string;
}

export interface UserDeleteData {
  affected: number;
}

const USER_INFO = gql`
  fragment UserInfo on User {
    id
    email
    profile {
      first_name
      last_name
      department {
        name
      }
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
  mutation UpdateUser($id: ID!, $userInput: UserInput!) {
    updateUser(id: $id, userInput: $userInput) {
      id
    }
  }
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: ID!) {
    deleteUser(id: $id) {
      affected
    }
  }
`;
