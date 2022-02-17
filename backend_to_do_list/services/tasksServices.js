const models = require('../models/tasksModels');
const validations = require('./validations/tasksValidations');

const createTask = async (task, user) => {
  const response = await models.createTask(task, user);

  validations.newTaskValidation(response.acknowledged);

  const newTask = await models.getTaskById(response.insertedId);

  return newTask;
};

const listAllTasks = async () => {
  const allTasks = await models.listAllTasks();

  return allTasks;
};

const editTaskById = async (taskId, token, task) => {
  const editedTask = await models.editTaskById(taskId, token, task);

  return editedTask;
};

const deleteTaskById = async (taskId, token) => {
  const response = await models.deleteTaskById(taskId, token);

  return response;
};

module.exports = {
  createTask,
  listAllTasks,
  editTaskById,
  deleteTaskById,
};
