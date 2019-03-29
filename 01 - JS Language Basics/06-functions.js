/**************************************
 * Functions
*/

function calculateAge(birthYear)
{
    return 2019 - birthYear;
}

var birthYear = 1995;
var ageJohn = calculateAge(birthYear);
console.log(ageJohn);

function yearsUntilRetirement(birthYear, firstName)
{
    var age = calculateAge(birthYear);
    var retirement = 65 - age;

    if (retirement > 0)
    {
        console.log(firstName + ' retires on ' + retirement + ' years.');
    }
    else
    {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'Mike');
yearsUntilRetirement(1951, 'Jane');