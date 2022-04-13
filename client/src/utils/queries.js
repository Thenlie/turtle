import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query Users {
        users {
            _id
            username
            email
            country
            createdAt
            lastActive
            age
        }
    }
`

export const QUERY_USER = gql`
    query User($id: String!) {
        user(id: $id) {
            _id
            username
            email
            country
            createdAt
            lastActive
            age
        }
    }
`

export const QUERY_USERNAME = gql`
    query Username($username: String!) {
        username(username: $username) {
            _id
        }
    }
`

export const QUERY_ME = gql`
    query Me {
        me {
            username
            _id
            email
            country
            createdAt
        }
    }
`

export const QUERY_SCORE = gql`
    query ScoresByUser($userId: String!) {
        scoresByUser(userId: $userId) {
            userId
            word
            guesses
            createdAt
            type
        }
    }
`

