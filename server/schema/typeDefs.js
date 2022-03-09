const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
    }

    type Query {
        users: [User]
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
    }
`

module.exports = typeDefs;