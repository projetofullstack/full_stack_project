const rescue = require('express-rescue');
const { userService } = require('../services');

const create = rescue(async (req, res) => {
  const { email, name, password } = req.body;
  const result = await userService.create({ email, name, password });

  return res.status(result.statusCode).json({
    id: result.message,
  });
});

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  const result = await userService.deleteById({ id });

  if (result.type === 'error') return next(result);

  const { message } = result;

  return res.status(result.statusCode).json({ message });
};

const deleteByEmail = async (req, res, next) => {
  const { email } = req.body;
  const result = await userService.deleteByEmail({ email });

  if (result.type === 'error') return next(result);

  const { message } = result;

  return res.status(result.statusCode).json({ message });
};

module.exports = {
  create,
  deleteById,
  deleteByEmail,
};
