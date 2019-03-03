const path = require('path');
const express = require('express');

const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.getIndex);
router.get('/import', indexController.getImport);

module.exports = router;