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

export const GET_FULL_CV_INFO = gql`
  query GetFullCvInfo($id: ID!) {
    cv(id: $id) {
      name
      user {
        email
        profile {
          full_name
          position_name
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
      projects {
        name
        internal_name
        description
        start_date
        end_date
        team_size
        tech_stack {
          name
        }
      }
      skills {
        skill_name
      }
      languages {
        language_name
      }
    }
  }
`;

export const CREATE_CV = gql`
  mutation CreateCv($cv: CvInput!) {
    createCv {
      name
      description
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
