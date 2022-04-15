const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        country: String!
        createdAt: String!
        lastActive: String!
        age: String
    }

    type Scores {
        userId: String
        word: String
        guesses: Int
        createdAt: String
        type: String
    }

    type Query {
        users: [User]
        user(id: String!): User
        username(username: String!): User
        me: User
        loggedIn: String
        scores: [Scores]
        scoresByUser(userId: String!): [Scores]
    }

    type Mutation {
        addScore(userId: String!, guesses: Float!, word: String!, type: String! ): Scores
    }
`

module.exports = typeDefs;