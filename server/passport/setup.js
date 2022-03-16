const bcrypt = require('bcrypt');
const { User } = require('../models');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});

// Local Strategy
passport.use(new LocalStrategy({ usernameField: 'email' }, async (username, password, done) => {
    try {
            const user = await User.findOne({ email: username })
            if (!user) {
                return done(null, false, { message: 'No user found!!'})
            } else {
                const validPassword = await user.isCorrectPassword(password);
                if (!validPassword) {
                    return done(null, false, { message: 'wrong password'})
                } else {
                    return done(null, user)
                }
            }
        }
        catch(err) {
            return done(null, false, { message: err });
        };
    })
);

module.exports = passport;