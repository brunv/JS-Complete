/******************************************
 * If / Else statements
*/

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married')
{
    console.log(firstName + ' is married!');
}
else
{
    console.log(firstName + ' is single!');
}

var isMarried = false;



/********************************************
 * Boolean Logic
 */

var age = 45;

if (age < 13)
{
    console.log(firstName + ' is a boy.');
}
else if (age >= 13 && age < 20)
{   
    console.log(firstName + ' is a teenager.');
}
else
{
    console.log(firstName + ' is a man.');
}



/***********************************************
 * Ternary Operator and Switch Statements
 */

// Ternary operator:
isMarried ? console.log('He\'s married!') : console.log('He\'s single!');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Switch statement:
var job = 'teacher';

switch(job)
{
    case 'instructor':
    case 'teacher':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'programmer':
        console.log(firstName + ' turns coffee into code.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

// Making the Switch work as an If/Else with ranges:
switch (true)
{
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    default:
        console.log(firstName + ' is a man.');
}