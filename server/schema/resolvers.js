const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            console.log(context.session);
            return await User.find()
        },
        me: async (parent, args, context) => {
            console.log(context.session);
            return await User.findOne({ _id: context.session.userId})
        },
        loggedIn: async (parent, args, context) => {
            console.log(context.session);
            return context.session.userId
        }
    },
    Mutation: {
        signup: async (parent, args, context) => {
            console.log(context.session);
            const user = await User.create(args)
            return user
        },
        login: async (parent, { email, password }, context) => {
            console.log(context.session);
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found');
            }
            const validPassword = await user.isCorrectPassword(password)
            if(!validPassword) {
                throw new AuthenticationError('Incorrect credentials');
            }
            context.session.userId = user._id
            console.log(context.session);
            return user
        },
        logout: async (parent, args, context) => {
            const user = await User.findOne({ _id: context.session.userId});
            if (!user) {
                throw new AuthenticationError('No user found');
            }
            context.session.userId = null;
            console.log(context.session);
            return user
        }
    }
}

module.exports = resolvers;