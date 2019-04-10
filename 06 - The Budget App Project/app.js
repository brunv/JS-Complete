/**
 * The IIFE, the immediately-invoked function expression, returns immediately
 * and so it's effectively gone. But the publicTest function that we return here
 * will always have access to the x variable and the add function because a
 * closure was created here.
 */

var budgetController = (function() {

    // private
    var x = 23;

    // private
    var add = function(a) {
        return x + a;
    }

    // public
    return {
        testing: 'Public Test',
        publicTest: function(b) {
            return add(b);
        }
    }
})();

var UIController = (function() {

    // Some code

})();

var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);