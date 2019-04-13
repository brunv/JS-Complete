/* LET and CONST */

// ES5
var name5 = 'Jane Smith';
var age5 = 23;

name5 = 'Jane Miller';
console.log(name5);     // Jane Miller

// ES6
const name6 = 'Jane Smith';
let age6 = 23;

// name6 = 'Jane Miller';   // Assignment to constant variable

// ES5
function driversLicence5(passedTest) {

    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    // In ES5 this will work:
    console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence5(true);

// ES6
function driversLicence6(passedTest) {
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest) {
        firstName = 'John';
        // yearOfBirth = 1990;
    }

    console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}
driversLicence6(true);

// -----------------------------------
// There are two completely different variables:
let i = 23;

for (let i=0; i<5; i++) {
    console.log(i);
}

console.log(i);