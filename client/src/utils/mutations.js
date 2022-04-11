import { gql } from '@apollo/client';

export const ADD_SCORE = gql`
  mutation addScore($userID: String!, $guesses: Float!, $word: String!, $type: String! ) {
    addScore(userID: $userID, guesses: $guesses, word: $word, type: $type ) {
      userID
      guesses
      createdAt
    }
  }
`;