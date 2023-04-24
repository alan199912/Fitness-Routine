import { gql } from 'apollo-angular';

export const QUERY_GET_DAYS = gql`
  query getDays {
    days {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
