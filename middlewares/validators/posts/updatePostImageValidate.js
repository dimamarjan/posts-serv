const Joi = require("joi");

const updatePostImageValidate = async (req, res, next) => {
  try {
    const fileValidator = Joi.object({
      fieldname: Joi.string(),
      originalname: Joi.string(),
      encoding: Joi.string(),
      mimetype: Joi.string().equal("image/jpeg"),
      buffer: Joi.any(),
      size: Joi.number().max(2000000),
    });
    const bodyValidator = Joi.object({
      oldImage: Joi.string().uri().required(),
    });
    const fileValidation = fileValidator.validate(req.file);
    const bodyValidation = bodyValidator.validate(req.body);

    if (fileValidation.error || bodyValidation.error) {
      next(fileValidation.error || bodyValidation.error);
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = updatePostImageValidate;
