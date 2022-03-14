const router = require('express').Router();
const { User } = require('../../models')

router.get('/login', async (req, res) => {
    console.log('login works')
    res.status(200).json({ message: req.session })
})

router.get('/logout', async (req, res) => {
    console.log('logout works')
    res.status(200).json({ message: req.session })
})

// login
router.post('/login', async (req, res) => {
    console.log(req.session);
    res.status(200).json({ massage: req.session })
    try {
        const response = await User.findOne({
            where: { email: req.body.email, }
        });
        if (!response) {
            res.status(401).json({ message: 'Invalid Email!' });
            return;
        }
        const validPassword = response.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(401).json({ message: 'Invalid Password!' });
            return;
        }
        req.session.save(() => {
            req.session.username = response.username;
            req.session.user_id = response.id;
            req.session.loggedIn = true;
            res.json(response, req.session);
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
});

// logout
router.post('/logout', (req, res) => {
    console.log(req.session);
    // try {
    //     if (!req.session.loggedIn) {
    //         res.status(404).end();
    //     }
    //     req.session.destroy(() => {
    //         res.status(200).end();
    //     });
    // }
    // catch (err) {
    //     res.status(500).json(err);
    // }
});

module.exports = router;