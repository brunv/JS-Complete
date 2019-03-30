/*************************************
 * Objects and Properties
*/

// Object literal:
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Emily'],
    isMarried: false,
    job: 'teacher'
};
console.log(john.family);
console.log(john.lastName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

// Mutating object's data:
john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax:
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane[lastName] = 'Smith';

console.log(jane);