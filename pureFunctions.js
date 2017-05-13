// Since a pure function always gives the same output for a given input,
// we can use a technique called memoization.

var square = memoize(function(x){
    return x * x
})

square(4)   // 16 calculated
square(4)   // 16 from cache