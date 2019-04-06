const myPythonScriptPath = 'data/clustermodel.py';

// Providing data from node.js to python
const {PythonShell} = require('python-shell');
const pyshell = new PythonShell(myPythonScriptPath);

pyshell.send(JSON.stringify([[8,15]]));

pyshell.on('message', function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function (err) {
    if (err){
        throw err;
    };

    console.log('finished!!!');
});

