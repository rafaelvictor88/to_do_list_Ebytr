const models = require('../models/userModel');
const validations = require('./validations/userValidations');

const createUser = async (body) => {
  const { name, email } = body;

  validations.userValidation(name, email);

  const response = await models.createUser(name, email);

  const newUser = {
    name,
    email,
  };

  return newUser;
};

module.exports = {
  createUser,
};
