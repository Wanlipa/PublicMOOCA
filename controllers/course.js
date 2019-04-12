const Course = require('../models/course');
var d3 = require("d3");

exports.getCourseLists = (req, res, next) => {
    Course.findAll().then(courses => {
        res.render('courselists', {
            cous: courses,
            pageTitle: 'Course Lists',
            path: '/courselists'
        });
    }).catch(err => {
        console.log(err);
    });
};

exports.getCourse = (req, res, next) => {
    const cousId = req.params.courseId;
    Course.findById(cousId)
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

exports.getAddCourse = (req, res, next) => {
    res.render('add-course', { pageTitle: 'Add Course', path: '/add-course', editing: false })
};

exports.postAddCourse = (req, res, next) => {
    const courseNumber = req.body.courseNumber;
    Course.create({
        courseNumber: courseNumber
    }).then(result => {
        // console.log(result);
        console.log('Created Course!');
        res.redirect('/courselists');
    }).catch(err => {
        console.log(err);
    });

};
