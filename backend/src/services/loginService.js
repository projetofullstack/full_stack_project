const CryptoJS = require('crypto-js');
const { loginModel } = require('../models');
const { loginSchema } = require('../schemas');
const { createToken } = require('../auth');
const { ErrorClient } = require('../utils');

const { SECRET_CRYPTO } = process.env;

const login = async (dataLogin) => {
  const check = loginSchema.validateDataLogin(dataLogin);

  const Gambler = new ErrorClient();

  if (check.ok === false) {
    throw Gambler.badRequest(check.message);
  }

  const result = await loginModel(dataLogin);

  if (result.error === true) {
    throw Gambler.badRequest();
  }

  if (result === null) {
    throw Gambler.badRequest('User not found');
  }

  const { password } = dataLogin;
  const { email, userName } = result;

  const decryptPassword = CryptoJS
    .AES
    .decrypt(result.userPassword, SECRET_CRYPTO).toString(CryptoJS.enc.Utf8);

  if (decryptPassword === password) {
    return {
      statusCode: 200,
      token: createToken({ email, userName }),
    };
  }

  throw Gambler.unauthorized('Invalid email or password');
};

module.exports = login;
