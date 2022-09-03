const app = require('./app');

const { log } = console;

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  log(`Server running on port ${PORT}`);
});
