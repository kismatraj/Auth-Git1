const express = require('express');
const use = require('../middleware/catchExceptions');
const rootController = require('../controller/root.controller');

const router = express.Router();
router.get('/', use(rootController.get));
router.post('/', use(rootController.post));
router.put('/', use(rootController.put));
router.patch('/', use(rootController.patch));
router.delete('/', use(rootController.delete));

module.exports = router;
