import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query Users {
        users {
            _id
            username
            email
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
        createdAt
        lastActive
        age
        }
    }
`

export const QUERY_ME = gql`
    query Me {
        me {
            username
            _id
            email
            createdAt
        }
    }
`
