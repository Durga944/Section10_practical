
// Store funtion in variale or properties:
const add = (a,b) => a+b;

const counter = {
    value:23,
    inc: function (){this.value++;}
}

// Pass function as argumnet to OTHER Funtion:

const great = () => console.log('Hey Jonas');
btnClose.addEventListener('click',great);

