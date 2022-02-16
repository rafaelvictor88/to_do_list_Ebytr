/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!!!'));

app.use(userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
