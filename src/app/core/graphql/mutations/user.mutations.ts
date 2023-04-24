import { gql } from 'apollo-angular';

export const MUTATION_CHOOSE_DAY = gql`
  mutation ChoiseDay($dayId: ID!) {
    choiseDay(dayId: $dayId) {
      id
      email
      days {
        id
        name
      }
      username
    }
  }
`;
