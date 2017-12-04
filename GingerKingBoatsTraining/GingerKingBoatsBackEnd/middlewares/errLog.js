var fs = require('fs');

var errLog = function (err, req, res, next) {
    if (err) {
        fs.appendFile('errLog.txt', err.stack + "\n", function (err) {
            if (err) {
                console.log("Error could not be logged");
            }
        });
        res.status(500);
        res.json({ "message":err.message })
    }
    next();
}

module.exports = errLog;
