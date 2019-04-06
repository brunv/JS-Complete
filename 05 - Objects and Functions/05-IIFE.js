/*
 * Immediately Invoked Function Expressions (IIFE)
 */

// Normal Function

// function game()
// {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// IIFE
// In JS what is inside a parentheses cannot be a statement.
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);     // undefined

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);