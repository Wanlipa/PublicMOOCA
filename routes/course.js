const path = require('path');
const express = require('express');

const router = express.Router();

const courseController = require('../controllers/course');

router.get('/course', courseController.getCourse);
router.get('/customize', courseController.getCustomize);
router.get('/courseAnalysis', courseController.getCourseAnalysis);
router.get('/learnerAnalysis', courseController.getLearnerAnalysis);
router.get('/relationship', courseController.getRelationship);

module.exports = router;