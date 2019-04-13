/* The Spread Operator */

function addFourAges (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages); // spread elements of an array in sepate variables
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Luke', ...familyMiller, 'Lily'];
console.log(bigFamily);

// the spread operator also works with nodeList:
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box'); // nodeList
const all = [h, ...boxes];
console.log(all);

Array.from(all).forEach(cur => cur.style.color = 'purple');
// Array.from(all) is the same as 'all'