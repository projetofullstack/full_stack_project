const rescue = require('express-rescue');
const { loginService } = require('../services');

const login = rescue(async (req, res) => {
  const { email, password } = req.body;

  const result = await loginService({ email, password });

  const { statusCode, token } = result;
  return res.status(statusCode).json({ token });
});

module.exports = { login };
