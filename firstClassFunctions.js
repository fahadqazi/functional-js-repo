var hi = function(name){
    return 'Hi, ' + name;
}

var greeting = function(name){
    return hi(name);
}

var result = greeting('fahad');
console.log(result);

greeting = hi;
console.log(greeting);

var greeting = hi;

var res = greeting('times');
console.log(res);