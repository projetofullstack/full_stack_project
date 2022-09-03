const express = require('express');

const { loginController } = require('../controllers');
const { userController } = require('../controllers');

const loginRoute = express.Router();
const userRoute = express.Router();

// start * USER ROUTE *
userRoute.post('/', userController.create);
userRoute.delete('/:id', userController.deleteById);
// end * USER ROUTE *

// start * LOGIN ROUTE *
loginRoute.post('/', loginController.login);
// end * LOGIN ROUTE *

module.exports = {
  loginRoute,
  userRoute,
};
