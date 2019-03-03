exports.getIndex = (req, res, next) => {
    res.render('index', {pageTitle: 'Main',path: '/'});
};

exports.getImport = (req, res, next) => {
    res.render('import', {pageTitle: 'Import', path: '/import'});
};