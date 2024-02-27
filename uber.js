class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distanceInMiles, durationInMinutes) {
        const fareFromDistance = distanceInMiles * this.costPerMile;
        const fareFromDuration = durationInMinutes * this.costPerMinute;
        const totalPrice = this.baseFare + fareFromDistance + fareFromDuration;
        return totalPrice;
    }
}

// Example usage
const uberXPriceCalculator = new UberPriceCalculator(5, 10, 15);
const distance = 10; // in miles
const duration = 20; // in minutes
const totalPrice = uberXPriceCalculator.calculatePrice(distance, duration);
console.log("Total price for the ride:", totalPrice);