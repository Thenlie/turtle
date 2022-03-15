const express = require("express");
const router = express.Router();
const passport = require("passport");
const { User } = require('../../models');

router.post("/login", (req, res, next) => {
    passport.authenticate("local", function(err, user, info) {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(400).json({ errors: "No user found" });
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({ errors: err });
            }
            console.log(req.session)
            return res.status(200).json({ success: `logged in ${user.id}` });
        });
    })(req, res, next);
});

router.post("/signup", async (req, res, next) => {
    try {
        const response = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        });
        const user = {
            'email': req.body.email,
            '_id': response.id
        }
        req.login(user, function(err) {
            if (err) { return next(err); }
            console.log(req.session)
            res.json({ user: response.username, message: 'Signup Successful!' });
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', (req, res) => {
    try {
        if (!req.session.passport.user) {
            console.log('not logged in')
            res.status(404).end();
        }
        req.logout();
        console.log(req.session);
        res.status(200).end();
        
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;