const express = require('express');
const controllers = require('../controllers/tasksControllers');

const tasksRouters = express();

tasksRouters.post('/tasks', controllers.createTask);

tasksRouters.get('/tasks', controllers.listAllTasks);

tasksRouters.put('/tasks/:id', controllers.editTaskById);

tasksRouters.delete('/tasks/:id', controllers.deleteTaskById);

module.exports = tasksRouters;
