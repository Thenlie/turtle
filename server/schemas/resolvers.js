const { User, Scores } = require('../models');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            return await User.find({});
        },
        user: async (parent, args, context) => {
            return await User.findOne({ _id: args.id});
        },
        username: async (parent, { username }, context) => {
            return await User.findOne({ username });
        },
        email: async (parent, { email }, context) => {
            return await User.findOne({ email });
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
        scoresByUser: async (parent, { userId }, context) => {
            return await Scores.find({ userId });
        },
    },
    Mutation: {
        addScore: async (parent, args, context) => {
            const score = Scores.create(args);
            return score;
        }
    }
}

module.exports = resolvers;