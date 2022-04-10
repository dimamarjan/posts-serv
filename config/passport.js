const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
require('dotenv').config();
const Users = require('../schemas/users');

const { JWT_SECRET } = process.env;

const optionsJWT = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
};

passport.use(
    new JwtStrategy(optionsJWT, async (payload, done) => {
        try {
            const user = await Users.findById(payload.id);
            if (!user) {
                return done(new Error('Not found'));
            }
            if (!user.token) {
                return done(null, false);
            }
            return done(null, user);
        } catch (err) {
            done(err, false);
        }
    })
);
