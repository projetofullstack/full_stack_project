const jwt = require('jsonwebtoken');

const validateToken = (token) => {
  try {
    const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT || 'secret';
    return jwt.verify(token, SECRET_KEY_JWT);
  } catch (err) {
    const { error } = console;
    error(err);
    return false;
  }
};

module.exports = validateToken;
