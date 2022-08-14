const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { loginRoute, userRote } = require('./routes');
const { handleError } = require('../../middlewares');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', loginRoute);

app.use('/user', userRote);

app.all('*', (_req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use(handleError);

app.get('/', (_req, res) => {
  res.status(200).send('Hello  World');
});

module.exports = app;
