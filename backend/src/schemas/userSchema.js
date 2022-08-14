const Joi = require('joi');

const createUser = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
}).required(
  ({
    'any.required': 'O campo {#label} é obrigatório',
  }),
);

const deleteByEmail = Joi.object({
  email: Joi.string().email().required(),
}).required(({
  'any.required': 'O campo {#label} é obrigatório',
}));

const deleteById = Joi.object({
  id: Joi.string().regex(/[0-9]+/).required(),
}).required(({
  'any.required': 'O campo {#label} é obrigatório',
}));

const validateCreateUser = (data) => {
  const { error } = createUser.validate(data);
  if (error) {
    return {
      ok: false,
      message: error.details[0].message,
    };
  }
  return { ok: true };
};

module.exports = {
  validateCreateUser,
  deleteByEmail,
  deleteById,
};
