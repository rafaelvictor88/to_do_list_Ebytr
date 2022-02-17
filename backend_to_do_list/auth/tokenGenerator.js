const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

const jwtConfig = {
  // expiresIn: '7d',
  algorithm: 'HS256',
};

const tokenGenerator = (data) => jwt.sign({ data }, secret, jwtConfig);

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);

    const user = decoded.data;

    return user;
  } catch (error) {
    return null;
  }
};

module.exports = {
  tokenGenerator,
  verifyToken,
};
