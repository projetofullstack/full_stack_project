const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const { log } = console;

app.get('/', (_req, res) => {
  res.status(200).send('Olá mundo!');
});

const PORT = 3001;

app.listen(3001, () => {
  log(`Rodando na porta ${PORT}`);
});
