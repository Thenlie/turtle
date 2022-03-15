const withAuth = async (req, res, next) => {
    if (!req.session.passport.user) {
        res.redirect('/login');
    } else {
        next();
    }
}

module.exports = withAuth;