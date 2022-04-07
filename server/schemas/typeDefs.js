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
    }

    type Query {
        users: [User]
        user(username: String!): User
        me: User
        loggedIn: String
        scores: [Scores]
        scoresByUser(userID: String!): [Scores]
    }

    type Mutation {
        signup(username: String!, email: String!, password: String!): User
        login(email: String!, password: String!): User
        logout: User
        addScore(userID: String!, guesses: Float!, word: String! ): Scores
    }
`

module.exports = typeDefs;