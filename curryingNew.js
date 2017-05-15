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