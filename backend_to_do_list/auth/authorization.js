/* eslint-disable consistent-return */
const { unauthorized } = require('../utils/statusCode');
const { verifyToken } = require('./tokenGenerator');
const errorHandler = require('../middlewares/errorHandler');

const authCreateTask = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) throw errorHandler(unauthorized, { message: 'Token is required' });

    const user = verifyToken(authorization);

    if (!user) throw errorHandler(unauthorized, { message: 'Token inválido' });

    req.user = user;

    next();
  } catch (error) {
    return next(error);
  }
};

// const authUpdateAndDeleteRecipe = (req, res, next) => {
//   try {
//     const { authorization } = req.headers;

//     if (!authorization) return res.status(401).json({ message: 'missing auth token' });

//     const user = verifyToken(authorization);
//     // console.log(user);
//     if (!user) return res.status(401).json({ message: 'jwt malformed' });

//     req.user = user;

//     next();
//   } catch (error) {
//     return next(error);
//   }
// };

module.exports = {
  authCreateTask,
  // authUpdateAndDeleteRecipe,
};
