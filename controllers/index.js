// const Import = require('../models/clustermodel');

exports.getIndex = (req, res, next) => {
    res.render('index', { pageTitle: 'Main', path: '/' });
};

exports.getRecommendation = (req, res, next) => {
    res.render('recommendation', { pageTitle: 'Recommendation', path: '/recommendation', recom: false })
};

exports.postRecommendation = (req, res, next) => {
    const totalHour = req.body.totalHour;
    const effort = req.body.effort;
    console.log('Recommendation!');
    console.log(totalHour);
    console.log(effort);

    const recomMode = true;
    const myPythonScriptPath = 'data/clustermodel.py';

    // Providing data from node.js to python
    const { PythonShell } = require('python-shell');
    const pyshell = new PythonShell(myPythonScriptPath);

    // pyshell.send(JSON.stringify([[8, 15]]));
    pyshell.send(JSON.stringify([[effort, totalHour]]));

    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message);
        // res.redirect('/recommendation');
        res.render('recommendation', {
            pageTitle: 'recommendation',
            path: '/recommendation',
            recom: recomMode,
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

