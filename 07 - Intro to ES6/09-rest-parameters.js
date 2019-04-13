/* Rest Parameters */

// Rest Parameters are the exact opposite of the Spread Operator

// ES5
function isFullAge5(limit) {
    console.log(arguments); // this is a special variable; it's not an array
    var argsArr = Array.prototype.slice.call(arguments, 1); // exclude the first argument
    console.log(argsArr);

    argsArr.forEach(function(current) {
        console.log((2019 - current) >= limit);
    });
}

isFullAge5(21, 1990, 2002, 1965);
// isFullAge5(18, 1990, 2002, 1965, 2008, 1920);


// ES6
function isFullAge6(limit, ...years) {
    console.log(years);     // this is an array
    
    years.forEach(cur => console.log((2019 - cur) >= limit));
}

isFullAge6(18, 1990, 2002, 1965);
// isFullAge6(18, 1990, 2002, 1965, 2008, 1920);