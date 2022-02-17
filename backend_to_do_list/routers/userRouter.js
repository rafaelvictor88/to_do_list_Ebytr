const express = require('express');
const controllers = require('../controllers/userController');

const userRouter = express();

userRouter.post('/newUser', controllers.createUser);

module.exports = userRouter;
