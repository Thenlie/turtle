const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        createdAt: String!
    }

    type Query {
        users: [User]
        me: User
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): User
        logout: User
    }
`

module.exports = typeDefs;