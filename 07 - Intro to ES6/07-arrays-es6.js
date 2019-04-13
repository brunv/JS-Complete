/* Arrays in ES6 */

const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(current) {
    current.style.backgroundColor = 'dodgerblue';
});
console.log(boxesArr5);


// ES6
const boxesArr6 = Array.from(boxes); // nodeList into Array
boxesArr6.forEach(current => current.style.backgroundColor = 'dodgerblue');
console.log(boxesArr6);


// ES5
// for (var i=0; i<boxesArr5.length; i++) {
//     if(boxesArr5[i].className === 'box blue') {
//         continue;
//     }
//     boxesArr5[i].textContent = 'I changed to blue!';
// }


// ES6: For Of
for (const current of boxesArr6) {
    if(current.className.includes('blue')) {
        continue;
    }
    current.textContent = 'I changed to blue!';
}


// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6
console.log(ages.findIndex(cur => cur >= 18));  // 3
console.log(ages.find(cur => cur >= 18));       // 21