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
    const courseName = req.body.courseName;
    const passRate = req.body.passRate;
    const subjectArea = req.body.subjectArea;
    const registered = req.body.registered;
    const totalHour = req.body.totalHour;
    const effort = req.body.effort;
    const cLength = req.body.cLength;
    const remember = req.body.remember;
    const understand = req.body.understand;
    const apply = req.body.apply;
    const analyze = req.body.analyze;
    const evaluate = req.body.evaluate;
    const create = req.body.create;
    const cBloom = req.body.cBloom;
    // const chapter = req.body.chapter;
    const video = req.body.video;
    const html = req.body.html;
    const problem = req.body.problem;
    const discussion = req.body.discussion;
    const cNumCom = req.body.cNumCom;
    const sequence = req.body.sequence;
    const cSeqCom = req.body.cSeqCom;
    const passLearner = req.body.passLearner;
    const failLearner = req.body.failLearner;

    Course.create({
        courseNumber: courseNumber,
        courseName: courseName,
        passRate: passRate,
        subjectArea: subjectArea,
        registered: registered,
        totalHour: totalHour,
        effort: effort,
        cLength: cLength,
        remember: remember,
        understand: understand,
        apply: apply,
        analyze: analyze,
        evaluate: evaluate,
        create: create,
        cBloom: cBloom,
        // chapter: chapter,
        video: video,
        html: html,
        problem: problem,
        discussion: discussion,
        cNumCom: cNumCom,
        sequence: sequence,
        cSeqCom: cSeqCom,
        passLearner: passLearner,
        failLearner: failLearner
    }).then(result => {
        // console.log(result);
        console.log('Created Course!');
        res.redirect('/courselists');
    }).catch(err => {
        console.log(err);
    });

};

exports.getEditCourse = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const cousId = req.params.courseId;
    Course.findById(cousId)
        .then(course => {
            // const course = courses[0];
            if (!course) {
                return res.redirect('/');
            }
            res.render('add-course', {
                pageTitle: 'Edit Course',
                path: '/edit-course',
                editing: editMode,
                course: course
            });
        }).catch(err => console.log(err));
};

exports.postEditCourse = (req, res, next) => {
    const cousId = req.body.courseId;
    const updatedcourseNumber = req.body.courseNumber;
    const updatedcourseName = req.body.courseName;
    const updatedpassRate = req.body.passRate;
    const updatedsubjectArea = req.body.subjectArea;
    const updatedregistered = req.body.registered;
    const updatedtotalHour = req.body.totalHour;
    const updatedeffort = req.body.effort;
    const updatedcLength = req.body.cLength;
    const updatedremember = req.body.remember;
    const updatedunderstand = req.body.understand;
    const updatedapply = req.body.apply;
    const updatedanalyze = req.body.analyze;
    const updatedevaluate = req.body.evaluate;
    const updatedcreate = req.body.create;
    const updatedcBloom = req.body.cBloom;
    // const updatedchapter = req.body.chapter;
    const updatedvideo = req.body.video;
    const updatedhtml = req.body.html;
    const updatedproblem = req.body.problem;
    const updateddiscussion = req.body.discussion;
    const updatedcNumCom = req.body.cNumCom;
    const updatedsequence = req.body.sequence;
    const updatedcSeqCom = req.body.cSeqCom;
    const updatedpassLearner = req.body.passLearner;
    const updatedfailLearner = req.body.failLearner;
    Course.findById(cousId)
        .then(course => {
            course.courseNumber = updatedcourseNumber;
            course.courseName = updatedcourseName;
            course.passRate = updatedpassRate;
            course.subjectArea = updatedsubjectArea;
            course.registered = updatedregistered;
            course.totalHour = updatedtotalHour;
            course.effort = updatedeffort;
            course.cLength = updatedcLength;
            course.remember = updatedremember;
            course.understand = updatedunderstand;
            course.apply = updatedapply;
            course.analyze = updatedanalyze;
            course.evaluate = updatedevaluate;
            course.create = updatedcreate;
            course.cBloom = updatedcBloom;
            // course.chapter = updatedchapter;
            course.video = updatedvideo;
            course.html = updatedhtml;
            course.problem = updatedproblem;
            course.discussion = updateddiscussion;
            course.cNumCom = updatedcNumCom;
            course.sequence = updatedsequence;
            course.cSeqCom = updatedcSeqCom;
            course.passLearner = updatedpassLearner;
            course.failLearner = updatedfailLearner;
            return course.save();
        })
        .then(result => {
            console.log('Updated Course!');
            res.redirect('/courselists');
        })
        .catch(err => console.log(err));
};

exports.postDeleteCourse = (req, res, next) => {
    const cousId = req.body.courseId;
    Course.findById(cousId)
        .then(course => {
            return course.destroy();
        })
        .then(result => {
            console.log('Deleted!');
            res.redirect('/courselists');
        })
        .catch(err => console.log(err));
};


exports.getAnalyzeCourse = (req, res, next) => {
    const cousId = req.params.courseId;
    Course.findById(cousId)
        .then(course => {
            if (!course) {
                return res.redirect('/');
            }
            res.render('analyzeCourse', {
                pageTitle: 'Analyze Course',
                path: '/analyzeCourse',
                course: course,
                recom: false
            });
        }).catch(err => console.log(err));
};

exports.postAnalyzeCourse = (req, res, next) => {
    const cousId = req.body.courseId;
    const clusterType = req.body.clusterType;
    const totalHour = req.body.totalHour;
    const effort = req.body.effort;
    const remember = req.body.remember;
    const understand = req.body.understand;
    const apply = req.body.apply;
    const analyze = req.body.analyze;
    const evaluate = req.body.evaluate;
    const create = req.body.create;
    // const chapter = req.body.chapter;
    const video = req.body.video;
    const html = req.body.html;
    const problem = req.body.problem;
    const discussion = req.body.discussion;

    console.log(cousId);
    console.log(clusterType);

    // Clustering Model Python   
    var myPythonScriptPath = '';
    var clusterArray = [];
    // Check cluster model
    if (clusterType == 'cLength') {
        myPythonScriptPath = 'data/cLengthModel.py';
        clusterArray = [effort, totalHour];
    } else if (clusterType == 'cBloom') {
        myPythonScriptPath = 'data/cBloomModel.py';
        clusterArray = [remember, understand, apply, analyze, evaluate, create];
    } else {
        myPythonScriptPath = 'data/cNumComModel.py';
        // clusterArray = [chapter, video, html, problem, discussion];
        clusterArray = [video, html, problem, discussion];
    }
    // Providing data from node.js to python
    const { PythonShell } = require('python-shell');
    const pyshell = new PythonShell(myPythonScriptPath);
    pyshell.send(JSON.stringify([clusterArray]));

    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);

        Course.findById(cousId)
        .then(course => {
            if (clusterType == 'cLength') {
                course.cLength = message;
                return course.save();
            } else if (clusterType == 'cBloom') {
                course.cBloom = message;
                return course.save();
            } else {
                course.cNumCom = message;
                return course.save();
            }
        })
        .then(course => {
            if (!course) {
                return res.redirect('/');
            }
            res.render('analyzeCourse', {
                pageTitle: 'Analyze Course',
                path: '/analyzeCourse',
                course: course,
                message: message,
                recom: true,
                cType: clusterType,
            });
        }).catch(err => console.log(err));
    });

    // end the input stream and allow the process to exit
    pyshell.end(function (err) {
        if (err) {
            throw err;
        };
        console.log('finished!!!');
    });

    
};
