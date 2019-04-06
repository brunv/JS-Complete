# JS Objects and Functions

## Everything is an Object
Actually everything is an object except the primitive types (numbers, strings, booleans, undefined and null).

## Inheritance and the Prototype Chain
In other programming languages, this is many times called a class, but in JS we call it Constructor or Prototype.

JavaScript is a Prototype based language which means that inheritance works by using something called prototypes. In practice, it means that each and every JavaScript object has a prototype property.

Each and every object that we ever create is an instance of the Objects constructor which has a bunch of methods in its prototype property, like hasOwnProperty(), isPrototypeOf(), constructor(), toString(), valueOf() and so on.

When we try to access a certain method, or property on an object, JavaScript will first try to find that method on that exact object. But if cannot find it, in will look in the object's prototype, which is the prototype property if its parent. So it moves up in the prototype chain. If the method is still not there, this continue until there is no more prototype to look at, which is null. Null is the only one that has no prototype, and is therefore the final link in the prototype chain. And in this case, undefined is returned.

## Summary
- Every JS object has a __prototype property__, which makes inheritance possivel in JavaScript;
- The prototype property of an object is where we put methods an properties that we want __other objects to inherit__;
- The Constructor's prototype property is __not__ the prototype of the Constructor itself, it's the prototype of __all__ instances that are created through it;
-  When a certain method (or property) is called, the search starts in the object itself, and if it cannot be found, the search moves on to the object's prototype. This continues until the method is found: __prototype chain__.

## Object.create vs new Obejct()
The difference between them is that _Objecte.create_ builds an object that inherits directly from the one that we passed into the first argument. While, on the other hand, the function constructor, the newly created object inherits from the constructor's prototype property.

## Functions are also Objects in JavaScript
- A function is an instance of the Object type;
- A function behaves like any other object;
- We can store functions in a variable;
- We can pass a function as an argument to another function;
- We can return a function from a function.

That's why we call the functions of JavaScript as First Class Functions.