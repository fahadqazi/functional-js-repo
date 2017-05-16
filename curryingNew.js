// Currying:
// You can call a function with fewer arguments than it expects, by
// returning a function and passing the remaining arguments to that function.

// Creating a partial function using ES6 syntax

var partialFromBind = (fn, ...args) => {
    return fn.bind(null, ...args);
}

// Can be created manually

var partial = (fn, ...args) => {
    return (...otherArgs) => {
        return fn(...args, ...otherArgs);
    }
}

// May be we don't need to call partial manually and function can do it themselves.
// This is called currying!

// Example

var adder = function(x){
    return function(y){
        return function(z){
            return x + y + z;
        }
    }
}

var result = adder(1)(2)(3);
console.log(result);

// ES6 way

var adder1 = x => y => z => x + y + z;
var result1 = adder1(1)(2)(3);
console.log(result1);

// Example
var double = x => x*2;

var map1 = fn => array => array.map(fn);

var res1 = map1(double)([1,2,3,4,5]);
console.log(res1);

//OR

var map2 = function(fn){
    return function(array){
        return array.map(fn);
    }
}

// Large example

var map = fn => array => array.map(fn);
var multiply = x => y => x * y;
var pluck = key => object => object[key];

var discount = multiply(0.98);
var tax = multiply(1.0925);

var obj = [
    {price: 5},
    {price: 10},
    {price: 15}
];

var newR = obj.map(pluck('price')).map(discount).map(tax);
console.log(newR);

