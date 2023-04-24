import { gql } from 'apollo-angular';

export const QUERY_VERIFY_TOKEN = gql`
  query {
    verifyToken
  }
`;

export const QUERY_GET_ID_BY_TOKEN = gql`
  query {
    getIdByToken
  }
`;
