module.exports = function checkAuth(req, res, next) {
    if (req.session.user) {
        res.locals.loggedIn = true;
    } else {
        res.locals.loggedIn = false;
    }
    next();
}