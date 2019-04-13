/* Classes in ES6 */

/* Important things:
- class definitions are not hoisted!
- we can only add methods to classes, but not properties (inheriting properties through the object instances is not a best practice).
*/

// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');
john5.calculateAge();

// ES6
class Person6 {

    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    /* Static Methods:
    These methods are simply attached to the class, but not inherited by
    the class instances, so by objects that we create through that class.
    */
   static greeting() {
       console.log('Hey there!');
   }
}

let john6 = new Person6('John', 1990, 'designer');
john6.calculateAge();

console.log(john5);
console.log(john6);

Person6.greeting();
// john6.greeting(); // doesn't work!