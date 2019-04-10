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

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstring: function() {
            return DOMstrings;
        }
    };

})();

/* GLOBAL APP CONTROLLER */
var controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstring();

    var ctrlAddItem = function() {
        
        // 1. Get the filled input data
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add the item to the budget controller
    
        // 3. Add the item to the UI
    
        // 4. Calculate the budget
    
        // 5. Display the budget on the UI
        
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event) {
        
        // 'which' property for older browsers
        if (event.keyCode === 13 || event.which === 13)
        {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);