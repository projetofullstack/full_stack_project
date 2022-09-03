const { v4: uuidv4 } = require('uuid');
const CryptoJS = require('crypto-js');
const { User } = require('../database/models');
const { userSchema } = require('../schemas'); // validateCreateUser
const { ErrorClient } = require('../utils');
const createToken = require('../auth/createToken');

const { SECRET_CRYPTO } = process.env;

const create = async ({ email, name, password }) => {
  console.log('Nossas informações no Service', email, name, password);
  const errorClient = new ErrorClient();
  const checkData = userSchema.validateCreateUser({ email, name, password });
  if (checkData.ok === false) throw errorClient.badRequest(checkData.message);

  const checkEmailDb = await User.findOne({
    where: { email },
  });

  console.log('resposta da validação do id', checkEmailDb);

  if (checkEmailDb !== null) throw errorClient.conflict('Email já utilizado');

  const passwordEncript = CryptoJS.AES.encrypt(password, SECRET_CRYPTO).toString();

  const { id } = await User.create({
    email, name, password: passwordEncript, id: uuidv4(),
  });

  if (id === undefined) throw errorClient.internalServerError();

  return {
    statusCode: 201,
    payload: {
      id,
      token: createToken({ id, email, name }),
    },
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

  const result = await User.deleteById(dataId);
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

const deleteByEmail = async (email) => User.deleteByEmail(email);

module.exports = {
  create,
  deleteByEmail,
  deleteById,
};
