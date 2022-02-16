const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!!!'));

app.use(userRouter);

app.use(errorMiddleware);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
