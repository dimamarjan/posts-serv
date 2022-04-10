const Joi = require("joi");

const updatePostValidate = async (req, res, next) => {
  try {
    const validator = Joi.object({
      title: Joi.string().required(),
      text: Joi.string().required(),
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

module.exports = updatePostValidate;
