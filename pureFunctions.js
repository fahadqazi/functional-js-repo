// Since a pure function always gives the same output for a given input,
// we can use a technique called memoization.

var memoize = function(f) {
    var cache = {};
    console.log('first arguments ', arguments);
    return function() {
        console.log('second arguments ', arguments)
        var arg_str = JSON.stringify(arguments);
        console.log('args ',arg_str);
        cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
        console.log('cache ', cache);
        return cache[arg_str];
    };
};

var square = memoize(function(x){
    return x * x
})

console.log(square(4))   // 16 calculated
console.log(square(4))   // 16 from cache
