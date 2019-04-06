/* 
 * Passing functions as arguments:
*/

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn)
{
    var arrRes = [];

    for (var i = 0; i < arr.length; i++)
    {
        arrRes.push(fn(arr[i])); 
    }

    return arrRes;
}

// callback functions:

function calculateAge(el)
{
    return 2019 - el;
}

function isFullAge(el)
{
    return el >= 18;
}

function maxHeartRate(el)
{
    if (el >= 18 && el <= 81)
    {
        return Math.round(206.9 - (0.67 * el));
    }
    else
    {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

/* 
 * Functions returning functions:
*/

function interviewQuestion(job)
{
    if (job === 'designer')
    {
        return function(name)
        {
            console.log(name + ', can you please explain what UX design is?');
        }
    }
    else if (job === 'teacher')
    {
        return function(name)
        {
            console.log(name + ', what subject do you teach?');
        }
    }
    else
    {
        return function(name)
        {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
// console.log(teacherQuestion);
teacherQuestion('John');

var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');

interviewQuestion('teacher')('Mark');