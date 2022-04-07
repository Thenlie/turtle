import { gql } from '@apollo/client';

export const SIGNUP = gql`
    mutation Signup($username: String!, $email: String!, $password: String!) {
        signup(username: $username, email: $email, password: $password) {
            _id
            username
            email
            createdAt
        }
    }
`

export const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            _id
            username
            email
            createdAt
        }
    }
`

export const LOGOUT = gql`
    mutation Logout {
        logout {
            _id
            username
            email
            createdAt
        }
    }
`

export const ADD_SCORE = gql`
  mutation addScore($userID: String!, $guesses: Float!, $word: String! ) {
    addScore(userID: $userID, guesses: $guesses, word: $word ) {
      userID
      guesses
      createdAt
    }
  }
`;