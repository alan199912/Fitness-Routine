import { gql } from 'apollo-angular';

export const QUERY_GET_USER = gql`
  query getUser {
    getUser {
      id
      email
      username
      days {
        id
        name
      }
    }
  }
`;
