const path = require('path');
const express = require('express');

const router = express.Router();

const courseController = require('../controllers/course');

router.get('/course', courseController.getCourse);
router.get('/customize', courseController.getCustomize);

module.exports = router;