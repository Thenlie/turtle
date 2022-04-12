const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        createdAt: String!
    }

    type Scores {
        userID: String
        word: String
        guesses: Int
        createdAt: String
        type: String
    }

    type Query {
        users: [User]
        user(id: String!): User
        me: User
        loggedIn: String
        scores: [Scores]
        scoresByUser(userID: String!): [Scores]
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): User
        logout: User
        addScore(userID: String!, guesses: Float!, word: String!, type: String! ): Scores
    }
`

module.exports = typeDefs;