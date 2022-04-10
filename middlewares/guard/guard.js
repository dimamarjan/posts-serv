const passport = require('passport');
const jwt = require('jsonwebtoken');
require('../../config/passport');
const { UNAUTH } = require('../../common/constants');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const guard = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user) => {
        const token = req.get('Authorization')?.split(' ')[1];
        jwt.verify(token, JWT_SECRET);
        if (!user || err || token !== user.token) {
            return res.status(UNAUTH).json({
                status: 'error',
                code: UNAUTH,
                message: 'Not authorized',
            });
        }
        req.user = user;
        return next();
    })(req, res, next);
};

module.exports = guard;
