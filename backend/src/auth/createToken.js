const jwt = require('jsonwebtoken');

const SECRET_KEY_JWT = process.env.SECRET_KEY_JWT || 'secret';

const headers = {
  algorithm: 'HS256',
  expiresIn: '1d',
};

const createToken = (payload) => jwt.sign(payload, SECRET_KEY_JWT, headers);

module.exports = createToken;
