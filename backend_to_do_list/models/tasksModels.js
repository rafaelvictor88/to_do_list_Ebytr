const { ObjectId } = require('mongodb');
const connection = require('./connection');

const createTask = async (task) => {
  const connect = await connection();

  const newTask = await connect.collection('tasks').insertOne({ task, status: 'pendente' });

  return newTask;
};

const listAllTasks = async () => {
  const connect = await connection();

  const allTasks = await connect.collection('tasks').find({}).toArray();

  return allTasks;
};

const editTaskById = async (taskId, userId, task) => {
  const connect = await connection();

  const editedTask = await connect.collection('tasks').updateOne(
    { _id: ObjectId(taskId) },
    { $set: task },
  );

  return editedTask;
};

const deleteTaskById = async (taskId) => {
  const connect = await connection();

  const response = await connect.collection('tasks').deleteOne({ _id: ObjectId(taskId) });

  return response;
};

module.exports = {
  createTask,
  listAllTasks,
  editTaskById,
  deleteTaskById,
};
