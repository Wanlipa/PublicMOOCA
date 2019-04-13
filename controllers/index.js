// const Import = require('../models/clustermodel');

exports.getIndex = (req, res, next) => {
    res.render('index', { pageTitle: 'Main', path: '/' });
};

exports.getRecommendation = (req, res, next) => {
    res.render('recommendation', { pageTitle: 'Recommendation', path: '/recommendation', recom: false })
};

exports.postRecommendation = (req, res, next) => {
    const clusterType = req.body.clusterType;
    const totalHour = req.body.totalHour;
    const effort = req.body.effort;
    const remember = req.body.remember;
    const understand = req.body.understand;
    const apply = req.body.apply;
    const analyze = req.body.analyze;
    const evaluate = req.body.evaluate;
    const create = req.body.create;
    const chapter = req.body.chapter;
    const video = req.body.video;
    const html = req.body.html;
    const problem = req.body.problem;
    const discussion = req.body.discussion;
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
        clusterArray = [chapter, video, html, problem, discussion];
    }
    // Providing data from node.js to python
    const { PythonShell } = require('python-shell');
    const pyshell = new PythonShell(myPythonScriptPath);
    pyshell.send(JSON.stringify([clusterArray]));

    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
        res.render('recommendation', {
            pageTitle: 'recommendation',
            path: '/recommendation',
            recom: true,
            cType: clusterType,
            message: message
        });
    });

    // end the input stream and allow the process to exit
    pyshell.end(function (err) {
        if (err) {
            throw err;
        };
        console.log('finished!!!');
    });
};

exports.getImport = (req, res, next) => {
    res.render('import', { pageTitle: 'Import', path: '/import' });
};

exports.getVisualize = (req, res, next) => {
    res.render('visualize', { pageTitle: 'visualize', path: '/visualize' })
};

exports.postImport = (req, res, next) => {
    // const title = req.body.title;
    // const csvfile = req.body.csvfile;
    // console.log('UPLOAD File !!!!!!!!!!!!!!!!!!!!');
    // console.log(title);
    // res.render('import', { pageTitle: 'Import', path: '/import' })

    const title = req.body.title;
    // if (title ==
    // const file = req.body.myFile= undefined) {
    //     const error = new Error(' title undefinded')
    //     error.httpStatusCode = 400
    //     return next(error)
    // }
    // if (!file) {
    //     const error = new Error('Please upload a file')
    //     error.httpStatusCode = 400
    //     return next(error)
    // }
    console.log(title);
    // res.send(file)


};

