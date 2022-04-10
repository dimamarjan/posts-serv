const Joi = require('joi');

const findPostValidate = async (req, res, next) => {
    try {
        const validator = Joi.object({
            query: Joi.string().required(),
        });
        const { error } = validator.validate(req.body);
        if (error) {
            next(error);
        } else {
            next();
        }
    } catch (err) {
        next(err);
    }
};

module.exports = findPostValidate;
