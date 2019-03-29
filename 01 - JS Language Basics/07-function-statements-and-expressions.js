/******************************************
 * Function Statements and Expressions
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression
var whatDoYouDo = function(job, firstName)
{
    switch(job)
    {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives an uber';
        case 'designer':
            return firstName + ' design beatiful things';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mike'));