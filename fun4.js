const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23,'Steven Williams');

const bookEW23 = book.bind(eurowings,23);

bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane);