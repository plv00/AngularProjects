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

routing.post('/search-and-book', function(req,res,next){
    return GingerKingBoatsBL.searchNow(req.body.boatType).then(function(result){
        res.json(result);
    }).catch(err => {
        next(err)
    })
})

routing.post('/display-txnid', function(req,res,next){
    return GingerKingBoatsBL.displayTxnId(req.body.txnId).then(function(result){
        res.json(result);
    }).catch(err => {
        next(err)
    });
})

routing.post('/confirm-booking', function(req,res, next){
    var confBook = req.body;
    return GingerKingBoatsBL.confirmBooking(confBook.boatType, confBook.location).then(function(result) {
        res.json(result);
    }).catch(err => {
        next(err)
    })
})

routing.post('/book-now', function(req,res,next){
    var boatBooking = Booking.toObject(req.body);
    return GingerKingBoatsBL.bookNow(boatBooking).then(function(result){
        res.json({ "message" : "Booking Successful!" })
    }).catch(err => {
        next(err)
    })
})

routing.get('/display-all-bookings', function(req,res,next) {
    return GingerKingBoatsBL.displayAllBookings().then(function(result){
        res.json(result);
    }).catch(err => {
        next(err);
    })
})

routing.post('/updateDetails', function(req, res, next) {
    var boatBooking = Booking.toObject(req.body);
    return GingerKingBoatsBL.updateDetails(boatBooking).then(function(result) {
        res.json(result);
    }).catch(err =>{
        next(err)
    })
})

routing.delete('/deleteDetails/:txnId', function(req, res, next){
    console.log("INSIDE DELETE ROUTING")
    console.log("routing delete param: ",req.params.txnId)
    return GingerKingBoatsBL.deleteDetails(req.params.txnId).then(function(result){
        res.json(result);
    }).catch(err =>{
        next(err)
    })
})

module.exports = routing;
