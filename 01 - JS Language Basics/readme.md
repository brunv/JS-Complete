# JavaScript Language Basics

## What is JavaScript?
JavaScript is a lightweight, cross-platform, object-oriented computer programming language. It's also one of the three core technologies of web development.

Today, JS can be used in different places:
- Client-side: JS was traditionally only used in the browser
- Server-side: Thanks to node.js, we can use JS on the server as well

JavaScript is what made modern and complex web development possible:
- Dynamic effects and interactivity
- Modern webapps that we can interact with

## Variables and Data Types

#### Primitive JS Data Types:
1. **Number:** Floating point numbers, for decimals and integers
2. **String:** Sequence of characters, used for text
3. **Boolen:** Logical data type that can only be _true_ or _false_
4. **Undefined:** Data type of a variable that does not have a value yet
5. **Null:** Also means 'non-existent'

JavaScript has Dynamic Typing: this means that we do not have to manually define the data type of a variable.

#### Variable Mutation and Type Coercion
In the following example the variable 'age' will be automatically converted (coerced) to string:
```
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age); // 'John 28'
```
And in this example we can see a Viariable Mutation:
```
var age = 45;
console.log(age); // 28

age = 'forty five';
console.log(age); // 'forty five'
```

## Basic Operators and Precedence
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

## Functions
Functions are the bread and butter of JavaScript programming. The concept of wrapping a piece of program in a value has many uses. It gives us a way to structure larger programs, to reduce repetition, to associate names with subprograms, and to isolate these subprograms from each other.

A function definition is a regular binding where the value of the binding is a function. For example, this code defines square to refer to a function that produces the square of a given number:

```
const square = function(x) {
  return x * x;
};

console.log(square(12));
>>> 144
```

A function is created with an expression that starts with the keyword function. Functions have a set of parameters (in this case, only x) and a body, which contains the statements that are to be executed when the function is called. The function body of a function created this way must always be wrapped in braces, even when it consists of only a single statement. A function can have multiple parameters or no parameters at all.

There is a slightly shorter way to create a function binding. When the function keyword is used at the start of a statement, it works differently.

```
console.log(square(4));

function square(x) {
  return x * x;
}

>>> 16
```

This is a function declaration. The statement defines the binding square and points it at the given function. It is slightly easier to write and doesn’t require a semicolon after the function.

The preceding code works, even though the function is defined below the code that uses it. Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offers the freedom to order code in a way that seems meaningful, without worrying about having to define all functions before they are used.

## Bindings and Scopes
Each binding has a scope, which is the part of the program in which the binding is visible. For bindings defined outside of any function or block, the scope is the whole program—you can refer to such bindings wherever you want. These are called global.

But bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as local bindings. Every time the function is called, new instances of these bindings are created. This provides some isolation between functions—each function call acts in its own little world (its local environment) and can often be understood without knowing a lot about what’s going on in the global environment.

Bindings declared with let and const are in fact local to the block that they are declared in, so if you create one of those inside of a loop, the code before and after the loop cannot “see” it. In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the var keyword, are visible throughout the whole function that they appear in—or throughout the global scope, if they are not in a function.

```
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
>>> 40
```

JavaScript distinguishes not just global and local bindings. Blocks and functions can be created inside other blocks and functions, producing multiple degrees of locality.

The set of bindings visible inside a block is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.

## Loops and Iteration
Loops can be writen in three ways:

- While:
```
var i = 3;
while (i > 0)
{
    console.log(i);
    i--;
}
>>> 3
>>> 2
>>> 1
```

- Do... While:
```
var i = 3;
do
{
    console.log(i);
    i--;
} while (i>0);
>>> 3
>>> 2
>>> 1
```

- For loop:
```
for (var i=0; i<3; i++)
{
    console.log(i);
}
>>> 0
>>> 1
>>> 2
```


## JavaScript Versions: ES5, ES6/ES2015 and ES6+
- ECMAScript: The language standard
- JavaScript: The language itself

Modern browser usually supports the lastest language's updates. You can use most features in production with transpiling and polyfilling (converting to ES5) if you want your code to be compatible with older browsers.