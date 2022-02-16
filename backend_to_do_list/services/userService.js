const models = require('../models/userModel');
const validations = require('./validations/userValidations');

const createUser = async (body) => {
  const { name, email, password } = body;

  validations.userValidation(name, email, password);

  const { acknowledged, insertedId } = await models.createUser(body);

  validations.newUserValidation(acknowledged, insertedId);

  const newUser = {
    _id: insertedId,
    name,
    email,
  };

  return newUser;
};

module.exports = {
  createUser,
};
