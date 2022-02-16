const Joi = require('joi');
const errorHandler = require('../../middlewares/errorHandler');
const { badRequest } = require('../../utils/statusCode');

const validateEmailRgx = /\S+@\S+\.\S+/;

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().regex(validateEmailRgx).required(),
});

const userValidation = (name, email) => {
  const { error } = userSchema.validate({ name, email });

  if (error) throw errorHandler(badRequest, { message: error.message });
};

module.exports = {
  userValidation,
};
