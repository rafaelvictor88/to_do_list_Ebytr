const Joi = require('joi');
const errorHandler = require('../../middlewares/errorHandler');
const { badRequest } = require('../../utils/statusCode');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

const loginValidation = (email, password) => {
  const { error } = loginSchema.validate({ email, password });

  if (error) throw errorHandler(badRequest, { message: error.message });
};

module.exports = { loginValidation };
