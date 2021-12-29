'use strict';

const bookings = [];

const createBooking = function(flightNum,numPassengers=1,price=199*numPassengers){
    // numPassengers = numPassengers||1;
    // price = price||199;

    const booking = {
        flightNum,
        numPassengers ,
        price 
    };
    console.log(booking);
    bookings.push(booking);

}

// createBooking('LH123','Durga Dharwey',2000);
createBooking('LH123');
createBooking('LH123',2,800);
createBooking('LH123',2);
createBooking('LH123',5);
createBooking('LH123',undefined,1000);