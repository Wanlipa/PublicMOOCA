const Import = require('../models/clustermodel');

exports.getIndex = (req, res, next) => {
    res.render('index', { pageTitle: 'Main', path: '/' });
};

exports.getImport = (req, res, next) => {
    res.render('import', { pageTitle: 'Import', path: '/import' });
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

