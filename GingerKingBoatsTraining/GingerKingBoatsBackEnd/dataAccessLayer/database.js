var express = require('express');
var mysql = require('promise-mysql');

var connection = mysql.createConnection(
    {
        user: "root",
        password: "root",
        connectstring: "localhost",
        database: "GingerKingBoats_DB"
    }

)

module.exports = connection;
