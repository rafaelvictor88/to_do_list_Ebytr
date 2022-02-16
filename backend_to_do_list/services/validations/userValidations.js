const Joi = require('joi');
const { ObjectId } = require('mongodb');

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
});

const userValidation = (name, email, password) => {
  const { error } = userSchema.validate({ name, email, password });

  if (error) throw new Error(error.message);
};

const newUserValidation = (acknowledged, insertedId) => {
  if (acknowledged === true) return 'Usuário criado com sucesso';

  if (!ObjectId.isValid(insertedId)) return 'Id inválido';

  return true;
};

module.exports = {
  userValidation,
  newUserValidation,
};
