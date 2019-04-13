const path = require('path');
const express = require('express');

const router = express.Router();

const courseController = require('../controllers/course');

router.get('/courselists', courseController.getCourseLists);
router.get('/course/:courseId', courseController.getCourse);
router.get('/courseAnalysis', courseController.getCourseAnalysis);
router.get('/learnerAnalysis', courseController.getLearnerAnalysis);
router.get('/relationship', courseController.getRelationship);
router.get('/add-course', courseController.getAddCourse);
router.post('/add-course', courseController.postAddCourse);
router.get('/edit-course/:courseId', courseController.getEditCourse);
router.post('/edit-course', courseController.postEditCourse);
router.post('/delete-course', courseController.postDeleteCourse);
module.exports = router;