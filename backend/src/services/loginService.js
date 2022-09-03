const CryptoJS = require('crypto-js');
const { User } = require('../database/models');
const { loginSchema } = require('../schemas');
const { ErrorClient } = require('../utils');
const createToken = require('../auth/createToken');

const { SECRET_CRYPTO } = process.env;

const login = async (dataLogin) => {
  const Gambler = new ErrorClient();

  const check = loginSchema.validateDataLogin(dataLogin);

  if (check.ok === false) {
    throw Gambler.badRequest(check.message);
  }

  const { email, password } = dataLogin;

  const result = await User.findOne({
    where: { email },
    raw: true,
  });

  if (result === null) {
    throw Gambler.badRequest('User not found');
  }

  const decrypt = CryptoJS.AES
    .decrypt(result.password, SECRET_CRYPTO)
    .toString(CryptoJS.enc.Utf8);

  if (decrypt === password) {
    return {
      statusCode: 200,
      payload: {
        id: result.id,
        token: createToken({ id: result.id, name: result.name, email }),
      },
    };
  }

  throw Gambler.unauthorized('Invalid email or password');
};

module.exports = login;
