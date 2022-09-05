import { gql } from "@apollo/client";

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
  query GetUsers {
    users {
      id
      email
      profile {
        first_name
        last_name
        position_name
        position {
          name
          id
        }
        department {
          name
          id
        }
      }
    }
  }
`;

export const GET_USER_INFO = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      email
      profile {
        first_name
        last_name
        position_name
        position {
          name
          id
        }
        department {
          name
          id
        }
        languages {
          language_name
        }
        skills {
          skill_name
        }
      }
      cvs {
        id
        name
        description
        projects {
          name
          internal_name
          start_date
          end_date
          tech_stack {
            name
          }
        }
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
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
      profile {
        first_name
        last_name
        position_name
        position {
          name
          id
        }
        department {
          name
          id
        }
        languages {
          language_name
        }
        skills {
          skill_name
        }
      }
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
