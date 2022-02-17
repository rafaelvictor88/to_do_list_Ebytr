const models = require('../models/loginModel');
const { notFound } = require('../utils/statusCode');
const validations = require('./validations/loginValidations');
const errorHandler = require('../middlewares/errorHandler');
const { tokenGenerator } = require('../auth/tokenGenerator');

const loginUser = async (body) => {
  const { email, password } = body;

  validations.loginValidation(email, password);

  const userFound = await models.loginUser(body);

  if (!userFound) throw errorHandler(notFound, { message: 'Usuário não encontrado!' });

  // eslint-disable-next-line no-unused-vars
  const { password: _password, ...userWithoutPassword } = userFound;

  const token = await tokenGenerator(userWithoutPassword);

  return { token };
};

module.exports = { loginUser };
