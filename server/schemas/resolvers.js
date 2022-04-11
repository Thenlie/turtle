const { User, Scores } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            return await User.find({});
        }, 
        user: async (parent, args, context) => {
            console.log(args)
            return await User.findOne({ _id: args.id});
        },
        username: async (parent, { username }, context) => {
            return await User.findOne({ username });
        },
        me: async (parent, args, context) => {
            return await User.findOne({ _id: context.session.passport.user })
        },
        loggedIn: async (parent, args, context) => {
            if (context.session.passport.user) {
                return context.session.passport.user;
            } else {
                return null;
            }
        },
        scores: async () => {
            return await Scores.find();
        },
        scoresByUser: async (parent, { userID }) => {
            const params = { userID };
            return Scores.find(params);
        },
    },
    Mutation: {
        addScore: async (parent, args, context) => {
            const score = Scores.create(args);
            console.log('true')
            return score;
        }
    }
}

module.exports = resolvers;