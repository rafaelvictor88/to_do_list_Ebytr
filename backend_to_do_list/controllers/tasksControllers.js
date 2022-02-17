const services = require('../services/tasksServices');

const createTask = async (req, res, next) => {
  try {
    const newTask = await services.createTask(req.body, req.headers);

    return res.status(201).json(newTask);
  } catch (error) {
    return next(error);
  }
};

const listAllTasks = async (req, res, next) => {
  try {
    const allTasks = await services.listAllTasks();

    return res.status(200).json(allTasks);
  } catch (error) {
    return next(error);
  }
};

const editTaskById = async (req, res, next) => {
  try {
    const editedTask = await services.editTaskById(req.params.id, req.headers, req.body);

    return res.status(200).json(editedTask);
  } catch (error) {
    return next(error);
  }
};

const deleteTaskById = async (req, res, next) => {
  try {
    const response = await services.deleteTaskById(req.params, req.headers);

    return res.status(200).json(response);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createTask,
  listAllTasks,
  editTaskById,
  deleteTaskById,
};
