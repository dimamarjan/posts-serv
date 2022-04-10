const Joi = require("joi");

const addPostValidate = async (req, res, next) => {
  try {
    const bodyValidator = Joi.object({
      title: Joi.string().max(250).required(),
      text: Joi.string().max(3000).required(),
    });
    const filesValidator = Joi.array()
      .max(10)
      .items(
        Joi.object({
          fieldname: Joi.string(),
          originalname: Joi.string(),
          encoding: Joi.string(),
          mimetype: Joi.string().equal("image/jpeg"),
          buffer: Joi.any(),
          size: Joi.number().max(2000000),
        })
      );
    const filesValidation = filesValidator.validate(req.files);
    const bodyValidation = bodyValidator.validate(req.body);
    if (filesValidation.error || bodyValidation.error) {
      next(filesValidation.error || bodyValidation.error);
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = addPostValidate;
