// Since a pure function always gives the same output for a given input,
// we can use a technique called memoization.

var memoize = function(f) {
    var cache = {};
    return function() {
        var arg_str = JSON.stringify(arguments);
        cache[arg_str] = cache[arg_str] || f.apply(f, arguments);
        return cache[arg_str];
    };
};

var square = memoize(function(x){
    return x * x
})
console.log('sq', square);
console.log(square(4))   // 16 calculated
console.log(square(5))   // 16 from cache


console.log('');
console.log('');

// immutability

var createPoint = (x,y) => Object.freeze([x,y]);

var movePoint = ([x,y], dx, dy) => {
    return Object.freeze([x+dx, y+dy]);
}

var point = createPoint(1,1);

point = movePoint(point, 1,3);
console.log('Point: ', point);
point = movePoint(point, 2,4);
console.log('Point: ', point);