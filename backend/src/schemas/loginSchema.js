const Joi = require('joi');

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
}).required(({
  'any.required': 'O campo {#label} é obrigatório',
}));

const validateDataLogin = (data) => {
  const { error } = login.validate(data);
  if (error) {
    return {
      ok: false,
      message: error.details[0].message,
    };
  }
  return { ok: true };
};

module.exports = {
  validateDataLogin,
};

// message: error.details[0].message,
// vai dentro do objeto com key details
// é possível também acessar a msg
// apenas com
// também funciona// message: error.message,  <<<< i
