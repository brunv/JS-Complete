/**
 * The IIFE, the immediately-invoked function expression, returns immediately
 * and so it's effectively gone. But the publicTest function that we return here
 * will always have access to the x variable and the add function because a
 * closure was created.
 */

/* BUDGET CONTROLLER */
var budgetController = (function() {


})();

/* UI CONTROLLER */
var UIController = (function() {

    // Some code

})();

/* GLOBAL APP CONTROLLER */
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function() {
        
        // 1. Get the filled input data
    
        // 2. Add the item to the budget controller
    
        // 3. Add the item to the UI
    
        // 4. Calculate the budget
    
        // 5. Display the budget on the UI
        
        console.log('asdasdd');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        
        // 'which' property for older browsers
        if (event.keyCode === 13 || event.which === 13)
        {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);