/*************************************
 * Variables and Data Types
*/

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);   // undefined

job = 'Teacher';
console.log(job);

// var 5years = 5;  //invalid
var _test = 'test';
console.log(_test);

var $test = 'testing';
console.log($test);



/***************************************
 * Variable Mutation and Type Coercion
*/

// variable 'age' coerced to string:
console.log(firstName + ' ' + age);

var hometown, isMarried;
hometown = 'Washington';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + ' raised in ' + hometown + '. Is he married? ' + isMarried);

// variable mutation:
age = 'twenty eight';
console.log(firstName + ' ' + age);

// var middleName = prompt('What is his middle name?');
// console.log(firstName + ' ' + middleName + ' ' + lastName);



/*****************************************
 * Basic Operators
*/

var year = 2019;
var ageJohn = 28;
var ageMark = 33;
var x;

// Math Operators
var yearJohn = year - ageJohn;

console.log(yearJohn);
console.log(year + 28);
console.log(year * 3);
console.log(year / 3);

// Logical Operators
console.log(ageJohn > ageMark);
console.log(ageJohn < ageMark);

// typeof Operator
console.log(typeof year);
console.log(typeof x);
console.log(typeof 'John Smith');
console.log(typeof (ageJohn > ageMark));



/******************************************
 * Operator Precedence
*/

var fullAge = 18;

var ifFullAge = year - yearJohn >= fullAge;
console.log(ifFullAge);

var average = (ageJohn + ageMark) / 2;
console.log(average);

// This next example works because assignments works from right to left
var a, b;
a = b = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(a,b);

// More Operators
a *= 2; // a = a * 2
console.log(a);
b += 2
console.log(b);
a++;
b--;
console.log(a,b);