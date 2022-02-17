// const { ObjectId } = require('mongodb');
const errorHandler = require('../../middlewares/errorHandler');
const { badRequest } = require('../../utils/statusCode');

const newTaskValidation = (acknowledged) => {
  if (acknowledged !== true) throw errorHandler(badRequest, { message: 'Tarefa não criada' });

  return true;
};

module.exports = { newTaskValidation };
