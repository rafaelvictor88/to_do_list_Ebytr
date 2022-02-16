const models = require('../models/loginModel');
const { notFound } = require('../utils/statusCode');
const validations = require('./validations/loginValidations');
const errorHandler = require('../middlewares/errorHandler');

const loginUser = async (body) => {
  const { email, password } = body;

  validations.loginValidation(email, password);

  const response = await models.loginUser(body);

  if (!response) throw errorHandler(notFound, { message: 'Usuário não encontrado!' });

  return response;
};

module.exports = { loginUser };
