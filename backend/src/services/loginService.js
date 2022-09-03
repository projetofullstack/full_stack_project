const CryptoJS = require('crypto-js');
const { loginModel } = require('../models');
const { loginSchema } = require('../schemas');
const { ErrorClient } = require('../utils');

const { SECRET_CRYPTO } = process.env;

const login = async (dataLogin) => {
  const Gambler = new ErrorClient();

  const check = loginSchema.validateDataLogin(dataLogin);

  if (check.ok === false) {
    throw Gambler.badRequest(check.message);
  }

  const result = await loginModel(dataLogin);

  if (result === null) {
    throw Gambler.badRequest('User not found');
  }

  if (result.error === true) {
    throw Gambler.internalServerError();
  }

  const { password } = dataLogin;

  const decryptPassword = CryptoJS
    .AES
    .decrypt(result.userPassword, SECRET_CRYPTO).toString(CryptoJS.enc.Utf8);

  if (decryptPassword === password) {
    return {
      statusCode: 200,
      token: 'xablau',
    };
  }

  throw Gambler.unauthorized('Invalid email or password');
};

module.exports = login;
