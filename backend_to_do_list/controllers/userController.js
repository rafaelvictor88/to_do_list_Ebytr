const services = require('../services/userService');

const createUser = async (req, res, next) => {
  try {
    const newUser = await services.createUser(req.body);

    return res.status(201).json(newUser);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createUser,
};
