import { gql } from '@apollo/client';

export const ADD_SCORE = gql`
  mutation addScore($userId: String!, $guesses: Float!, $word: String!, $type: String! ) {
    addScore(userId: $userId, guesses: $guesses, word: $word, type: $type ) {
      userID
      guesses
      createdAt
    }
  }
`;