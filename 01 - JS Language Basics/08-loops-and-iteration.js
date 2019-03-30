/********************************
 * Loops and iteration
*/

// For Loop:
for (var i=0; i<10; i++){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer'];

for (var i=0; i<john.length; i++)
{
    console.log(john[i]);
}

// While:
var i = 0;
while (i < john.length)
{
    console.log(john[i]);
    i++;
}

// continue and break statements:
for (var i=0; i<john.length; i++)
{
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i=0; i<john.length; i++)
{
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}