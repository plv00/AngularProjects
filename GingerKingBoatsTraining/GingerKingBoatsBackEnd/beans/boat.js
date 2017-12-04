var Boat = function (boatId, allowedDays, basePrice, discount, description, boatType, location, bookingStart) {
    this.boatId = boatId;
    this.allowedDays = allowedDays;
    this.basePrice = basePrice;
    this.discount = discount;
    this.description = description;
    this.boatType = boatType;
    this.bookingStart = bookingStart;
}

Boat.toObject = function (result) {
    return new Boat(result.boatId, result.allowedDays, result.basePrice, result.discount, result.description, result.boatType, result.location, result.bookingStart)
}

module.exports = Boat;

