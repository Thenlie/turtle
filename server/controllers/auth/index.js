const router = require('express').Router();

router.get('/login', (req, res, next) => {
    res.render('login')
})

router.get('/test', (req, res, next) => {
    res.status(200).json({ message: 'it works!' })
})

module.exports = router;