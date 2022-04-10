const Joi = require('joi');

const registrationValidate = async (req, res, next) => {
    try {
        const validator = Joi.object({
            firstName: Joi.string()
                .regex(/^[a-zA-Z]+$/)
                .required()
                .messages({
                    'string.pattern.base':
                        "'firstName' can be only alphabetical",
                }),
            lastName: Joi.string()
                .regex(/^[a-zA-Z]+$/)
                .required()
                .messages({
                    'string.pattern.base':
                        "'lastName' can be only alphabetical",
                }),
            email: Joi.string()
                .email({
                    minDomainSegments: 2,
                    tlds: { allow: ['ua', 'com', 'net'] },
                })
                .required()
                .messages({
                    'string.email': "'email' type error",
                }),
            password: Joi.string()
                .regex(
                    /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*_]))/
                )
                .min(6)
                .required()
                .messages({
                    'string.pattern.base':
                        "'password' must contain at least 1 lowercase, 1 uppercase alphabetical, 1 numeric character and 1 special character. Must be longer than 6 chars.",
                }),
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

module.exports = registrationValidate;
