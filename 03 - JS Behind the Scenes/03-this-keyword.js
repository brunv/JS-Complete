/*************************************
 * The 'this' Keyword
*/

console.log(this); // window object (if it's in the browser)

// calculateAge(1990);

// function calculateAge(year)
// {
//     console.log(2019 - year);
//     console.log(this);  // global object
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);  // Object John
        console.log(2019 - this.yearOfBirth);  // 1990

        // function innerFunction()
        // {
        //     console.log(this); // Global object because it's not a method, it's a regular function
        // }

        // innerFunction();
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

// METHOD BORROWING:
// it's possible because 'this' references the object that calls the method
mike.calculateAge = john.calculateAge;
mike.calculateAge();