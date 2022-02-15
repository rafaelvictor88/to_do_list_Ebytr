const express = require('express');
const controllers = require('../controllers/userController');

const userRouter = express();

userRouter.post('/', controllers.createUser);

module.exports = userRouter;
