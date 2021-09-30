const express = require('express');
const use = require('../middleware/catchExceptions');
const newController = require('../controller/newRoute.controller');

const router = express.Router();
router.get('/', use(newController.get));
router.post('/', use(newController.post));
router.put('/', use(newController.put));
router.patch('/', use(newController.patch));
router.delete('/', use(newController.delete));

module.exports = router;
