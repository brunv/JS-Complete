/*
 *  Closures
 */

// An inner function has always access to the variables and
// parameters of its outer function, even after the outer
// function has returned

function retirement(retirementAge)
{
    var a = ' years left until retirement.';

    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
// console.log(retirementUS);
retirementUS(1990);

retirement(66)(1990);

var retirementBR = retirement(65);
retirementBR(1995);


function interviewQuestion(job)
{
    return function(name)
    {
        if (job === 'designer')
        {
            console.log(name + ', can you please explain what UX design is?');
        }
        else if (job === 'teacher')
        {
            console.log(name + ', what subject do you teach?');
        }
        else
        {
            console.log(name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John');