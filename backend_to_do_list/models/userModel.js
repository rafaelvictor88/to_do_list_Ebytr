const connection = require('./connection');

const createUser = async ({ name, email, password }) => {
  const connect = await connection();

  const response = await connect.collection('users').insertOne({ name, email, password });

  return response;
};

module.exports = {
  createUser,
};
