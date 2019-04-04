/**************************************
 * How Hoisting works:
*/

// Note that the order doesn't matters when using function declations:

calculateAge(1990);
function calculateAge(year)
{
    console.log(2019 - year);
}
calculateAge(1984);

// but matters when using funcion expressions:

// retirement(1984); // does not work!
var retirement = function(year)
{
    console.log(65 - (2019 - year));
}
retirement(1990);

// Note that order matters for variables:

console.log(age); // undefined
var age = 23;
console.log(age);

function foo()
{
    console.log(age);   // undefined
    var age = 65;
    console.log(age);
}
foo();
console.log(age);