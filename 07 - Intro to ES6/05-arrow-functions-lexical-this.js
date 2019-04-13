/* Arrow Functions: Lexical 'this' Keyword */

/* Best Practice: always use arrow functions when you need to preserve
the value of the 'this' keyword. */

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;

        document.querySelector('.green').addEventListener('click', function() {
            // var str = 'This is box number ' + this.position + ' and it is ' + this.color;   // undefined
            
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;

            alert(str);

            /* Only in the method call that 'this' actually points to that
            object. In a regular function call, the 'this' keyword willl
            always point to the global object, which in this case ir the
            window object. */
        });
    }
}
// box5.clickMe();


// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;   // works

            alert(str);

            /* By using the arrow function we have access to the 'this'
            keyword of the clickMe method, because the arrow function shares
            the lexical 'this' keyword of its surroundings. */
        });
    }
}
// box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;   // undefined

            alert(str);

            /* This clickMe method does now also share the lexical 'this'
            keyword from its surroundings. And the surroundings of this is
            the global context. */
        });
    }
}
box66.clickMe();


// ES5
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}
new Person('Mike').myFriends6(friends);