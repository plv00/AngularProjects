var db = require('./database');
var Boat = require('../beans/boat');
var Booking = require('../beans/booking');

var GingerKingBoatsDAL = {}

GingerKingBoatsDAL.listBoats = function () {
    var boatData = [];
    return db.then(function (conn) {
        console.log("listBoats - CONNECTED to DB");
        result = conn.query("SELECT DISTINCT boatType, description FROM boat");
        console.log("listBoats - Query Executed")
        return result;
    }).then(function (result) {
        for (i = 0; i < result.length; i++) {
            boatData[i] = Boat.toObject(result[i]);
        }
        console.log("listBoats - SUCCESS");
        return boatData
        }).catch(function (err) {
            throw new Error("Unable to fetch boat list.");
        })
}

GingerKingBoatsDAL.searchNow = function(boatType){
    return db.then(function(conn) {
        console.log("searchNow - CONNECTED TO DB")
        result = conn.query("SELECT location FROM boat WHERE boatType = ?", [boatType]);
        console.log("searchNow - QUERY EXECUTED");
        return result;
    }).then(function(result){
        console.log("searchNow - SUCESS");
        return result;
    }).catch(function(err){
        throw new Error("Unable to fetch boat locations.");
    })
}

GingerKingBoatsDAL.displayTxnId = function(txnId){
    return db.then(function(conn) {
        console.log("displayTxnId - CONNECTED TO DB");
        result = conn.query("SELECT * FROM booking where txnId = ?", [txnId]);
        console.log("displayTxnId - QUERY EXECUTED");
        return result;
    }).then(function(result) {
        console.log("displayTxnId - SUCCESS");
        return result;
    }).catch(function(err) {
        throw new Error("Unable to fetch transaction ID.");
    })
}

GingerKingBoatsDAL.confirmBooking = function(boatType, location){
    var confirmBoatData = [];
    return db.then(function(conn) {
        console.log("confirmBooking - CONNECTED TO DB");
        result = conn.query("SELECT * FROM boat WHERE boatType = ? AND location = ?", [boatType, location]);
        console.log("ConfirmBooking -  QUERY EXECUTED");
        return result;
    }).then(function(result) {
        for(i = 0; i < result.length; i++) {
            confirmBoatDat[i] = Boat.toObject(result[i]);
        }
        console.log("confirmBooking - SUCCESS");
        return confirmBoatData;
    }).catch(function(err){
        throw new Error("Unable to continue to bookNow.");
    })
}

GingerKingBoatsDAL.checkUserId = function(userId){
    return db.then(function(conn){
        console.log("checkid - CONNECTED TO DB");
        result = conn.query("SELECT * FROM users WHERE userId = ?", [userId]);
        console.log("checkid - QUERY EXECUTED");
        return result;
    }).then(function(result) {
        if(result.length == 1) {
            console.log("checkid - SUCCESS");
            return result[0].userId;
        }
    }).catch(function(err){
        throw new Error("User not registerd.");
    })
}

GingerKingBoatsDAL.bookNow = function(boatBooking){
    return db.then(function(conn) {
        console.log("bookNow - CONNECTED TO DB");
        result = conn.query("INSERT INTO booking (boatId, userId, startDate, endDate, mobileNo, totalCost) VALUES (?, ?, ?, ?, ?, ?)",
        [boatBooking.boatId, boatBooking.userId, boatBooking.startDate, boatBooking.endDate, boatBooking.mobileNo, boatBooking.totalCost ]);
        console.log("bookNow - QUERY EXECUTED");
        return result;
    }).then(function(result){
        if(result.affectedRows == 1) {
            console.log("bookNow - SUCCESS");
            return result;
        }
    }).catch(function(err) {
        throw new Error("Booking not successful.");
    })
}

GingerKingBoatsDAL.displayAllBookings = function(){
    var allBookingData = [];
    return db.then(function(conn) {
        console.log("displayAllBooking - CONNECTED TO DB");
        result = conn.query("SELECT DISTINCT txnId, userId, boatId, toatalCost FROM booking");
        console.log("displayAllBooking - QUERY EXECUTED");
        return result;
    }).then(function (result){
        for (i = 0; i < result.length; i++) {
            allBookingData[i] = Booking.toObject(result[i]);
        }
        console.log("displayAllBooking - SUCCESS");
        return allBookingData;
    }).catch(function(err) {
        throw new Error("Unable to fetch bookings list.");
    })
}

GingerKingBoatsDAL.updateDetails = function(txnDetail){
    return db.then(function(conn){
        console.log("updateDetails - CONNECTED TO DB");
        result = conn.query("UPDATE booking SET startDate = ?, endDate = ?, mobileNo = ? WHERE txnID = ?", [txnDetail.startDate, txnDetail.endDate,txnDetail.mobileNo,txnDetail.txnId]);
        console.log("updateDetails - QUERY EXECUTED");
        return result;
    }).then(function(result){
        console.log("updateDetails - SUCCESS");
        return result;
    }).catch(function(err){
        throw new Error("Unable to update booking details.");
    });
}
GingerKingBoatsDAL.deleteBooking = function(txnDetail){
    return db.then(function(conn){
        console.log("deleteBooking - CONNECTED TO DB")
        result = conn.query("DELETE FROM booking WHERE txnId = ?",[txnDetail]);
        console.log("deleteBooking - QUERY EXECUTED")
        return result;
    })
    .catch(function(err){
        throw new Error("Unable to delete booking details.")
    })
}






module.exports = GingerKingBoatsDAL;
