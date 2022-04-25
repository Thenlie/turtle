const express = require("express");
const router = express.Router();
const passport = require("passport");
const { User } = require('../../models');

router.get('/user', (req, res) => {
    if (!req.session.passport || !req.session.passport.user) {
        console.log('not logged in')
        return res.status(400).json({ message: 'not logged in'});
    }
    res.json(req.session.passport.user)
})

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            return res.status(400).json({ errors: err });
        }
        if (!user) {
            return res.status(404).json({ errors: "No user found" });
        }
        req.login(user, async (err) => {
            if (err) {
                return res.status(403).json({ errors: err });
            }
            await User.updateOne(
                { _id: user._id }, 
                { lastActive: Date.now() }
            );
            return res.status(200).json({ _id: user._id });
        });
    })(req, res, next);
});

router.post("/signup", async (req, res, next) => {
    try {
        const response = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
            country: req.body.country
        });
        const user = {
            'email': req.body.email,
            '_id': response.id
        }
        req.login(user, (err) => {
            if (err) { return next(err); }
            res.json({ _id: response._id, message: 'Signup Successful!' });
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
        res.status(200).end();
        
    }
    catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;