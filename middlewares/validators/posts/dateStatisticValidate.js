const Joi = require("joi");

const dateStatisticValidate = async (req, res, next) => {
  try {
    const validator = Joi.object({
      date: Joi.string()
        .regex(/^[0-9]{4}[-]{1}[0-1]{1}[0-9]{1}[-]{1}[0-3]{1}[0-9]{1}$/)
        .message("Wrong 'date' type. Example: 'yyyy-mm-dd'"),
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

module.exports = dateStatisticValidate;
