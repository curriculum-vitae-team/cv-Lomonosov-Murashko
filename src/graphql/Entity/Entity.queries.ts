import { gql } from "@apollo/client";

export const GET_LANGUAGES = gql`
  query GetLanguages {
    languages {
      id
      iso2
      name
    }
  }
`;

export const DELETE_LANGUAGE = gql`
  mutation DeleteLanguage($id: ID!) {
    deleteLanguage(id: $id) {
      affected
    }
  }
`;

export const UPDATE_LANGUAGE = gql`
  mutation UpdateLanguage($id: ID, $language: LanguageInput!) {
    updateLanguage(id: $id, language: $language) {
      iso2
      name
      id
    }
  }
`;

export const GET_SKILLS = gql`
  query GetSkills {
    skills {
      id
      name
    }
  }
`;

export const DELETE_SKILL = gql`
  mutation DeleteSkill($id: ID!) {
    deleteSkill(id: $id) {
      affected
    }
  }
`;

export const UPDATE_SKILL = gql`
  mutation UpdateSkill($id: ID, $skill: SkillInput!) {
    updateSkill(id: $id, skill: $skill) {
      name
      id
    }
  }
`;
