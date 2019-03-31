# JavaScript Behind the Scenes

## Execution Contexts

### Global Execution Context
Is the default execution context in which the code that is not inside any function is executed. Basically, it's for variables and functions that are not inside any function. The global execution context is associated with the global object, which in case of the browser, that's the window object.

So everything that we declare in the global context automatticaly gets attached to the __window__ object in the browser.

```
lastName === window.lastName
// true
```

It's like __lastName__ is a property of the window object. And properties are just variables attached to objects.

### Execution Stack
Each time that we call a function, it gets its own brand-new execution context.

```
var name = 'John';

function first() {
    var a = 'Hello!';
    second();
    var x = a + name;
}

function second() {
    var b = 'Hi!';
    third();
    var z = b + name;
}

function third() {
    var c = 'Hey!';
    var z = c + name;
}

first();
```

The above code example has an execution stack that looks like this:

| Exec. Context third() |
| Exec. Context second()|
| Exec. Context first() |
| Global Execution      |

### Hoisting
Each execution context has an object which stores a lot of important data that the function will use while it's running, and this happens even before the code is executed.

1. Code is scanned for *function declarations*: for each function, a property is created in the Variable Object, *pointing to the function*.
2. COde is scanned for *variable declarations*: for each variable, a property is created in the Variable Object, and to __undefined__.

## Scoping and the Scope Chain
Scoping answers the question "where can we access a certain variable?". You must know that each new function creates a scope which is the space/environment in which the variable it defines is accessible.

In JavaScript the only way to create a new scope is to write a new function. It does not create a new scope using ___for__, __while__, or __if__ blocks.

In JavaScript we have *Lexical Scoping*: a function that is lexically within another function gets access to the scope of the outer function, also called the parent function. And with that is also gets access to the variables and functions that the parent function defines.

Scope Chain works in only one direction: locally scoped variables are not visible to theur parent scopes.

## The 'this' Keyword
- In a *Regular funcion call*: the __this__ keyword points at the global object, which is the __window__ object, in the browser.
- In a *Method call*: the __this__ variable points to the object that is calling the method.

The __this__ keyword is not assigned a value until a function where it is defined is actually called.