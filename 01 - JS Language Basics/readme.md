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

