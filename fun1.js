const flight = 'LH123';

const jonas ={
    name:'jonas Schmedtman',
    passport:1234567
}

const checkIn = function(flightNum,passenger){
    flightNum = 'LH999';
    passenger.name = 'Mr.' + passenger.name;

    if(passenger.passport===1234567){
        console.log('Check in');
    }else{
        console.lo('Wrong passport!');
    }
}
checkIn(flight,jonas);
console.log(flight);
console.log(jonas);

const flightNum = flight;
const passenger = jonas;

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*10000000);

}
newPassport(jonas);
checkIn(flight,jonas);