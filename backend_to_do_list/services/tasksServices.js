const models = require('../models/tasksModels');

const createTask = async (task, token) => {
  const newTask = await models.createTask(task, token);

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
