/*********************************
 * Arrays
*/


// Creating arrays:
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

// Accessing elements:
console.log(names[0]);
console.log(names[2]);
console.log(names.length);

// Mutate array data:
names[1] = 'Ben';
names[5] = 'Mary';
console.log(names);

// Different data types:
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);
john.shift();
console.log(john);

console.log(john.indexOf(1990));        // returns the position of an element
console.log(john.indexOf('undefined')); // -1
