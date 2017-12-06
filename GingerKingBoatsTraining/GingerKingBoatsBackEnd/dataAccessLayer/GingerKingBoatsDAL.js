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


module.exports = GingerKingBoatsDAL;
