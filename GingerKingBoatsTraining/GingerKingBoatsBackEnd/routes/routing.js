var express = require('express');
var routing = express.Router();
var Boat = require('../beans/boat');
var Booking = require('../beans/booking');
var GingerKingBoatsBL = require('../businessLayer/GingerKingBoatsBL');

routing.get('/list-of-boats', function (req, res, next) {
    return GingerKingBoatsBL.listBoats().then(function (result) {
        res.json(result);
    }).catch(err => {
        next(err);
    })
})

module.exports = routing;
