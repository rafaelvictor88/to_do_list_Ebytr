const connection = require('./connection');

const createUser = async ({ name, email }) => {
  const connect = await connection();

  const response = await connect.collection('users').insertOne({ name, email });

  return response;
};

module.exports = {
  createUser,
};
