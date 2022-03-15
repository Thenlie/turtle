const router = require('express').Router();

router.get('/login', (req, res, next) => {
    res.render('login')
})

module.exports = router;