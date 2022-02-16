const models = require('../models/loginModel');

const loginUser = async (body) => {
  const response = await models.loginUser(body);

  return response;
};

module.exports = { loginUser };
