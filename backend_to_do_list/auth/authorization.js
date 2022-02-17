const { ERROR_TOKEN_INVALID } = require('../middlewares/errorConstructor');
const { verifyToken } = require('./tokenGenerator');

const authRegisterRecipe = (req, res, next) => {
  const { status, message } = ERROR_TOKEN_INVALID;
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(status).json(message);

    const user = verifyToken(authorization);

    if (!user) return res.status(status).json(message);
    
    req.user = user;
    
    next();
  } catch (error) {
    return next(error);
  }
};

const authUpdateAndDeleteRecipe = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.status(401).json({ message: 'missing auth token' });

    const user = verifyToken(authorization);
    // console.log(user);
    if (!user) return res.status(401).json({ message: 'jwt malformed' });

    req.user = user;

    next();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  authRegisterRecipe,
  authUpdateAndDeleteRecipe,
};