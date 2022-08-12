import { gql } from "@apollo/client";

const USER_INFO = gql`
  fragment UserInfo on User {
    id
    email
    profile {
      first_name
      last_name
      specialization
    }
  }
`;

export const GET_USER_FULLNAME = gql`
  query GetUserFullname($id: ID!) {
    user(id: $id) {
      id
      profile {
        first_name
        last_name
      }
    }
  }
`;

export const GET_USERS = gql`
  ${USER_INFO}
  query GetUsers {
    users {
      ...UserInfo
      profile {
        department {
          name
          id
        }
      }
    }
  }
`;

export const GET_USER_INFO = gql`
  ${USER_INFO}
  query GetUser($id: ID!) {
    user(id: $id) {
      ...UserInfo
      profile {
        department {
          name
          id
        }
      }
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
  mutation UpdateUser($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, user: $user) {
      id
      email
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
