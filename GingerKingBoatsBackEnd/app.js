var express = require('express');
var bodyParser = require("body-parser");
var router = require('./routes/routing');

var myErrLog = require('./middlewares/errLog');
var myReqLog = require('./middlewares/reqLog');

var cors = require('cors');

var app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use(myReqLog);

app.use('/', router);

app.use(myErrLog);

app.listen(3000);
console.log("Server LIVE on port 3000");