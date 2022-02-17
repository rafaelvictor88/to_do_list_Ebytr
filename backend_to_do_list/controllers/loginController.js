const services = require('../services/loginService');

const loginUser = async (req, res, next) => {
  try {
    const response = await services.loginUser(req.body);

    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
};

module.exports = { loginUser };
