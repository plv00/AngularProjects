var GingerKingBoatsDAL = require('../dataAccessLayer/GingerKingBoatsDAL');
var Boat = require('../beans/boat');
var Booking = require('../beans/booking');

var GingerKingBoatsBL = {}

GingerKingBoatsBL.listBoats = function () {
    return GingerKingBoatsDAL.listBoats().then(function (result) {
        return result;
    }).catch(function (err) {
        throw err;
    })
}

GingerKingBoatsBL.searchNow = function(boatType){
    if(boatType == undefined){
        throw new Error();
    } else{
        return GingerKingBoatsDAL.searchNow(boatType)
    }
}

GingerKingBoatsBL.displayTxnId = function(txnId){
    if(txnId == undefined) {
        throw new Error();
    } else {
        return GingerKingBoatsDAL.displayTxnId(txnId);
    }
}

GingerKingBoatsBL.confirmBooking = function(boatType, location){
    if(boatType == undefined || location == undedfined){
        throw new Error();
    } else {
        return GingerKingBoatsDAL.confirmBooking(boatType, location);
    }
}

GingerKingBoatsBL.bookNow = function(boatBooking){
    return GingerKingBoatsDAL.checkUserId(boatBooking.userId).then(function(userId){
        today = new Date();
        if(userId == null){
            throw new Error("User Not registerd.");
        } else if(boatBooking.startDate < today) {
            throw new Error("Invalid date.");
        } else if(boatBooking.endDate < boatBooking.startDate){
            throw new Error("Invalid date.");
        } else {
            return GingerKingBoatsDAL.bookNow(boatBooking);
        }
    }).catch(err => {
        throw err;
    })
}

GingerKingBoatsBL.displayAllBookings = function() {
    return GingerKingBoatsDAL.displayAllBookings().then(function(result){
        return result;
    }).catch(function(err){
        throw err;
    })
}

GingerKingBoatsBL.updateDetails = function(updateDetail){
    return GingerKingBoatsDAL.updateDetails(updateDetail).then(function(result){
        today = new Date();
        if(result == null) {
            throw new Error("Update Details, txnId Not registered.")
        } else if(result.startDate < today) {
            throw new Error("Invalid date.")
        } else if(result.endDate < result.startDate) {
            throw new Error("Invalid date")
        } else {
            return result;
        }
    }).catch(function(err) {
        throw err;
    })
}

GingerKingBoatsBL.deleteDetails = function(deleteDetails){
    return GingerKingBoatsDAL.deleteBooking(deleteDetails).then(function(result){
        return result;
    })
    .catch(function(err){
        throw err;
    })
}



module.exports = GingerKingBoatsBL;
