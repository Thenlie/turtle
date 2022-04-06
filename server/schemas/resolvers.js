const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
    Query: {
        users: async (parent, args, context) => {
            return await User.find()
        },
        user: async (parent, { id }, context) => {
            return await User.findOne({ id: id});
        },
        me: async (parent, args, context) => {
            return await User.findOne({ _id: context.session.passport.user})
        },
        loggedIn: async (parent, args, context) => {
            if (context.session.passport.user) {
                return context.session.passport.user;
            } else {
                return null;
            }
        }
    },
    Mutation: {
        signup: async (parent, args, context) => {
            const user = await User.create(args);
            return user;
        },
        login: async (parent, { email, password }, context) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found');
            }
            const validPassword = await user.isCorrectPassword(password);
            if(!validPassword) {
                throw new AuthenticationError('Incorrect credentials');
            }
            context.login(user, (err) => {
                if (err) {
                    return err;
                }
                return user;
            });
            return user;
        },
        logout: async (parent, args, context) => {
            const user = await User.findOne({ _id: context.session.passport.user});
            if (!user) {
                throw new AuthenticationError('No user found');
            }
            return user;
        }
    }
}

module.exports = resolvers;