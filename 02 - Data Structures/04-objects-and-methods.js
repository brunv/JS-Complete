/**********************************
 * Object and Methods
*/

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Emily'],
    isMarried: false,
    job: 'teacher',
    calculateAge: function() {
        // return 2019 - this.birthYear;
        this.age = 2019 - this.birthYear;
    }
};

john.calculateAge();
console.log(john.age);