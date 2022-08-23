import { gql } from "@apollo/client";

export const GET_ALL_CVS = gql`
  query GetAllCvs {
    cvs {
      name
      description
      id
    }
  }
`;

/* TODO: Add skills and languages */
export const GET_CV_INFO = gql`
  query GetCvInfo($id: ID!) {
    cv(id: $id) {
      id
      name
      description
      projects {
        id
        name
        internal_name
      }
      user {
        id
      }
    }
  }
`;

export const GET_CV_NAME = gql`
  query GetCvName($id: ID!) {
    cv(id: $id) {
      name
    }
  }
`;

export const CREATE_CV = gql`
  mutation CreateCv($cv: CvInput!) {
    createCv {
      id
    }
  }
`;

export const UPDATE_CV = gql`
  mutation UpdateCv($id: ID!, $cv: CvInput!) {
    updateCv(id: $id, cv: $cv) {
      id
      name
      description
      projects {
        id
        name
        internal_name
      }
    }
  }
`;

export const DELETE_CV = gql`
  mutation DeleteCv($id: ID!) {
    deleteCv(id: $id) {
      affected
    }
  }
`;

export const UNBIND_CV = gql`
  mutation UnbindCv($id: ID!) {
    unbindCv(id: $id) {
      id
    }
  }
`;
