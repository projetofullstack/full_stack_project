const { v4: uuidv4 } = require('uuid');
const CryptoJS = require('crypto-js');
const { userModel } = require('../models');
const { userSchema } = require('../schemas');
const { ErrorClient } = require('../utils');

const { SECRET_CRYPTO } = process.env;

const create = async (dataUser) => {
  const check = userSchema.validateCreateUser(dataUser);

  const Gambler = new ErrorClient();

  if (check.ok === false) throw Gambler.badRequest(check.message);

  const user = await userModel.getUserByEmail(dataUser.email);

  if (user !== null) throw Gambler.conflict('Email already registered');

  const { password } = dataUser;

  const cryptoPassword = CryptoJS.AES.encrypt(password, SECRET_CRYPTO).toString();

  const result = await userModel.create({ id: uuidv4(), ...dataUser, password: cryptoPassword });

  if (result === null) throw Gambler.internalServerError();

  return {
    statusCode: 201,
    message: result,
  };
};

const deleteById = async (dataId) => {
  const { error } = userSchema.deleteById.validate(dataId);
  if (error !== undefined) {
    return {
      statusCode: 400,
      message: error.details[0].message,
    };
  }

  const result = await userModel.deleteById(dataId);
  if (result === null) {
    return {
      type: 'error',
      statusCode: 404,
      message: 'Usuário não encontrado',
    };
  }

  if (result.error) {
    return {
      type: 'error',
      statusCode: 500,
      message: 'Internal Server Error',
    };
  }

  return {
    type: 'success',
    statusCode: 200,
    message: `Id ${result} deleted`,
  };
};

const deleteByEmail = async (email) => userModel.deleteByEmail(email);

module.exports = {
  create,
  deleteByEmail,
  deleteById,
};
