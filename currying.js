// Curried Functions
// A function tht will return a new function until it receives
// all it's arguments.

function add(x){
    return function(y){
        return x + y;
    }
}

var add3 = add(3)
var add4 = add3(4)
console.log(add4);

// OR

console.log(add(3)(4));
