const { TOO_MANY_REQUESTS } = require('../common/constants');
require('dotenv').config();

const { MAX_RATE_CONECTIONS } = process.env;

const rateLimitOptions = {
    windowMs: 15 * 60 * 1000,
    max: MAX_RATE_CONECTIONS,
    handler: (req, res, next) => {
        return res.status(TOO_MANY_REQUESTS).json({
            status: 'error',
            code: TOO_MANY_REQUESTS,
            message: 'Too many requests...',
        });
    },
};

module.exports = rateLimitOptions;
