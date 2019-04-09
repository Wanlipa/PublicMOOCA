const path = require('path');
const express = require('express');

const router = express.Router();

const courseController = require('../controllers/course');

router.get('/courselists', courseController.getCourseLists);
router.get('/course/:courseId', courseController.getCourse);
router.get('/customize', courseController.getCustomize);
router.get('/courseAnalysis', courseController.getCourseAnalysis);
router.get('/learnerAnalysis', courseController.getLearnerAnalysis);
router.get('/relationship', courseController.getRelationship);
router.get('/addcourse', courseController.getAddCourse);

module.exports = router;