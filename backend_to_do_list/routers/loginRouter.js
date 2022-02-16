const express = require('express');
const controllers = require('../controllers/loginController');

const loginRouter = express();

loginRouter.post('/login', controllers.loginUser);

module.exports = loginRouter;
