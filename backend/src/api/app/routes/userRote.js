const express = require('express');
const { userController } = require('../../../controllers');

const userRote = express.Router();

userRote.post('/', userController.create);
userRote.delete('/:id', userController.deleteById);

module.exports = userRote;
