const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find()
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args)
            return user
        }
    }
}

module.exports = resolvers;