// eslint-disable-next-line no-unused-vars
const handleError = (err, _req, res, _next) => {
  if (err.statusCode !== undefined) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  const { log } = console;
  log('Gerado pelo middleware de error', err);
  return res.status(500).json({ message: 'Internal Server Error' });
};

module.exports = handleError;
