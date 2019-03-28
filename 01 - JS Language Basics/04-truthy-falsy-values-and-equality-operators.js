/******************************************************
* Truthy and Falsy Values and Equality Operators 
*/

// Falsy values: undefined, null, 0, '', NaN
// Truthy values: NOT falsy values

var height;
height = '';

if (height || height === 0 )
{
    console.log(height);
    console.log('variable is defined.');
}
else
{
    console.log(height);
    console.log('the variable has NOT been defined.');
}


// Diference between Equality Operetors:
height = 23;

// 23 == '23' is true
// 23 === '23' is false (BEST PRACTICE!!)
if (height == '23')
{
    console.log('The == operator does type coercion!');
}
