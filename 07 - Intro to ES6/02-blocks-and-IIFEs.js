/** Blocks and IIFEs */

// creating a block in ES6:
{
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a + b); // Won't work!
console.log(c);
log


// in ES5:
(function() {
    var c = 3;
})();

// console.log(c); // Won't work either!