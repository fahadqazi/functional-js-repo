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