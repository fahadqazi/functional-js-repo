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


// An example of functional programming

// associativity add(a, add(b,v)) === add(add(a,b), c);
// commutativity add(a,b) === add(b,a)
// identity add(x,0) === x
// distributive multiply(x, add(y,z)) === add(multiply(x, y), multiply(x, z));

var add = function(flock_x, flock_y){ return flock_x + flock_y };
var multiply = function(flock_x, flock_y){ return flock_x * flock_y };

var flock_a = 4;
var flock_b = 2;
var flock_c = 0;

var result = add(
    multiply(flock_b, add(flock_a, flock_c)), multiply(flock_a, flock_b)
);
console.log(result);

var result1 = add(
    multiply(flock_b, flock_a), multiply(flock_a, flock_b)
);
console.log(result1);

var result2 = multiply(flock_b, add(flock_a, flock_a));
console.log(result2);



