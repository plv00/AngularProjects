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

module.exports = GingerKingBoatsBL;
