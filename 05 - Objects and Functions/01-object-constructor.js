// Function Constructor

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     job: 'teacher'
// };

// ? It's a convention that we always write function constructors with a capital letter!
var Person = function(name, yearOfBirth, job)
{
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');

john.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);