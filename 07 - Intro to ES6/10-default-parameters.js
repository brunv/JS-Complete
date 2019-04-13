/* Default Parameters */

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Smith' : lastName;
    nationality === undefined ? nationality = 'american' : nationality;
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
console.log(emily);


// ES6
function SmithPerson6(firstName, yearOfBirth, lastName='Smith', nationality='American') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john6 = new SmithPerson6('John', 1990);
console.log(john6);
var emily6 = new SmithPerson6('Emily', 1983, 'Diaz', 'spanish');
console.log(emily6);