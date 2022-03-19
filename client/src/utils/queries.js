import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query Users {
        users {
            _id
            username
            email
            createdAt
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
<<<<<<< HEAD
`
=======
`

// export const QUERY_LOGIN = gql`
    
// `
>>>>>>> 75bde0385d78617463d8cd9dcfc65da62e8c53f6
