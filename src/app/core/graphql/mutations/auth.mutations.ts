import { gql } from 'apollo-angular';

export const MUTATION_LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const MUTATION_REGISTER = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      id
      username
      email
    }
  }
`;
