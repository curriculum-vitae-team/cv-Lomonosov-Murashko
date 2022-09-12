import { gql } from "@apollo/client";

export const GET_POSITIONS_NAMES_IDS = gql`
  query GetPositionNamesIds {
    positions {
      id
      name
    }
  }
`;
