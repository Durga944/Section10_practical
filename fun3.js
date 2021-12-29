const great = function(greeting){
    return function(name){
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = great('Hey');
greeterHey('Jonas');
greeterHey('Steven');

great('Hello')('Jonas');

const greatArr = greeting => name => console.log(`${greeting} ${name}`);
greatArr('Hii')('Jonas');

