const connection = require('./connection');

const loginUser = async ({ email, password }) => {
  const connect = await connection();

  const userFound = await connect.collection('users').findOne({ email, password });

  return userFound;
};

module.exports = { loginUser };
