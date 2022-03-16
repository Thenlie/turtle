const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            return await User.find()
        },
        me: async (parent, args, context) => {
            return await User.findOne({ _id: context.session.passport.user})
        },
        loggedIn: async (parent, args, context) => {
            return context.session.passport.user
        }
    },
    Mutation: {
        signup: async (parent, args, context) => {
            console.log(context.session);
            const user = await User.create(args)
            return user
        },
        login: async (parent, { email, password }, context) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found');
            }
            const validPassword = await user.isCorrectPassword(password)
            if(!validPassword) {
                throw new AuthenticationError('Incorrect credentials');
            }
            return user
        },
        logout: async (parent, args, context) => {
            const user = await User.findOne({ _id: context.session.passport.user});
            if (!user) {
                throw new AuthenticationError('No user found');
            }
            return user
        }
    }
}

module.exports = resolvers;