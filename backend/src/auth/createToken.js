const jwt = require('jsonwebtoken');

const headers = {
  algorithm: 'HS256',
  expiresIn: '14d',
};

// expiresIn: aceita ms, s, m, h, d, w, y (ex: 1d, 1h, 1y)
// ou seconds, minutes, hours, days, weeks, years (ex: 1 days, 1 hours, 1 years)
// por padrão uma numeração será considerada milessegundos

module.exports = (payload) => jwt.sign(payload, process.env.SECRET_KEY_JWT, headers);
