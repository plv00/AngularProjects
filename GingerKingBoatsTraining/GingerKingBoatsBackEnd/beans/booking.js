var Booking = function (txnId, boatId, mobileNo, startDate, endDate, userId, totalCost) {
    this.txnId = txnId;
    this.boatId = boatId;
    this.mobileNo = mobileNo;
    this.startDate = startDate;
    this.endDate = endDate;
    this.userId = userId;
    this.totalCost = totalCost;
}

Booking.toObject = function (result) {
    return new Booking(result.txnId, result.boatId, result.mobileNo, result.startDate, result.endDate, result.userId, result.totalCost)
}

module.exports = Booking;

