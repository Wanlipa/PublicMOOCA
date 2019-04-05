const path = require('path');
const express = require('express');

const router = express.Router();

const indexController = require('../controllers/index');

router.get('/', indexController.getIndex);
router.get('/import', indexController.getImport);
router.post('/import', indexController.postImport);

module.exports = router;