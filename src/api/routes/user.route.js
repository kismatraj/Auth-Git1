const express = require('express');
const use = require('../middleware/catchExceptions');
const validateJsonSchema = require('../middleware/validateJsonSchema');
const userSchema = require('../validation/schemas/user.dto');
const userController = require('../controller/user.controller');

const router = express.Router();
router.get('/', use(userController.get));
router.post('/register', use(userController.register));
router.post(
  '/login',
  validateJsonSchema(userSchema),
  use(userController.login)
);
router.put('/', use(userController.put));
router.patch('/', use(userController.patch));
router.delete('/', use(userController.delete));

module.exports = router;
