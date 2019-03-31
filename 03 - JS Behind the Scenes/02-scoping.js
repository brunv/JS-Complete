/***************************************
 * Scoping and Scope Chain
*/

// Why it's called Lexical Scoping:
var a = 'Hello!';
first();

function first()
{
    var b = 'Hi!';
    second();

    function second()
    {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

// Here's the difference between Execution Stack and Scope Chain:
var x = 'Hello!';
first();

function first()
{
    var y = 'Hi!';
    second();

    function second()
    {
        var z = 'Hey!';
        console.log(x, y, z);
        third();
    }
}

function third()
{
    var w = 'John';
    // console.log(z); // error: is not defined
    // console.log(y); // error: is not defined
    console.log(x, w);
}