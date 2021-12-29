const addTax = (rate,value) => value + value*rate;
console.log(addTax(0.1,200));

const addVAT = addTax.bind(null,0.23);

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
