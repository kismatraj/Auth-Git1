const express = require('express');
const use = require('../middleware/catchExceptions');
const userController = require('../controller/user.controller');

const router = express.Router();
router.get('/', use(userController.get));
router.post('/register', use(userController.register));
router.post('/login', use(userController.login));
router.put('/', use(userController.put));
router.patch('/', use(userController.patch));
router.delete('/', use(userController.delete));

module.exports = router;
