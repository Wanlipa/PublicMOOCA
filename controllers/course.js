const Course = require('../models/course');

exports.getCourse = (req, res, next) => {
    let courseId = 1;
    Course.findById(courseId)
        .then((course) => {
            res.render('course', { course: course, pageTitle: 'Course', path: '/course' });
        })
        .catch(err => console.log(err));

};

exports.getCustomize = (req, res, next) => {
    res.render('customize', { pageTitle: 'Customize', path: '/customize' })
};

exports.getCourseAnalysis = (req, res, next) => {
    res.render('courseAnalysis', { pageTitle: 'Courses Clustering', path: '/courseAnalysis' })
};

exports.getLearnerAnalysis = (req, res, next) => {
    res.render('learnerAnalysis', { pageTitle: 'Learners Clustering', path: '/learnerAnalysis' })
};

exports.getRelationship = (req, res, next) => {
    res.render('relationshipAnalysis', { pageTitle: 'Relationship', path: '/relationship' })
};

