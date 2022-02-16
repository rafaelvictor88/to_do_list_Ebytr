const Joi = require('joi');
const { ObjectId } = require('mongodb');
const errorHandler = require('../../middlewares/errorHandler');
const { badRequest } = require('../../utils/statusCode');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

const userValidation = (name, email, password) => {
  const { error } = userSchema.validate({ name, email, password });

  if (error) throw errorHandler(badRequest, { message: error.message });
};

const newUserValidation = (acknowledged, insertedId) => {
  if (acknowledged !== true) throw errorHandler(badRequest, { message: 'Usuário não criado' });

  if (!ObjectId.isValid(insertedId)) return 'Id inválido';

  return true;
};

module.exports = {
  userValidation,
  newUserValidation,
};
