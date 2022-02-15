const models = require('../models/userModel');

const createUserService = async (body) => {
  const newUser = await models.createUserModel(body);

  return newUser;
};

module.exports = {
  createUserService,
};
