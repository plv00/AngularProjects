var fs = require('fs');

var reqLog = function (req, res, next) {
    var logMsg = new Date() + ": " + req.method + "used on URL " + req.url + "\n";
    fs.appendFile('reqLog.txt', logMsg, function (err) {
        if (err) return next(err);
    });
    next();
}

module.exports = reqLog;
