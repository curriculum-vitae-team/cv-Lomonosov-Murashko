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

export interface UserInfo {
  id: string;
  email: string;
  profile: {
    first_name: string;
    last_name: string;
    department: {
      name: string;
      id: string;
    };
    specialization: string;
  };
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

export interface UsersData {
  users: User[];
}

export interface UserInfoData {
  user: UserInfo;
}

export interface UserFullnameData {
  user: {
    id: string;
    profile: {
      first_name: string;
      last_name: string;
    };
  };
}

export interface UserInput {
  id: string;
  user: {
    profile: ProfileInput;
  };
}

interface ProfileInput {
  first_name: string;
  last_name: string;
  departmentId: string;
  specialization: string;
  skills: string[];
  languages: string[];
}

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
  mutation UpdateUser($id: ID!, $user: UserInput!) {
    updateUser(id: $id, user: $user) {
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
