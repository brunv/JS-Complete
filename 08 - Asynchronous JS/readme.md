# Asynchronous JavaScript
A synchronous code means that one statement is processed after the other, line by line, in a single thread in the JS engine.

- Allow asynchronous functinos to run in the "background';
- We pass in callbacks that run once the functino has finished its work;
- Move on immediately: Non-blocking!

### The Event Loop
The Event Loop is part of the bigger picture of what happens behind the scenes of JavaScript, when we call functions and handle events like DOM events.

The Event Loop, as well as the Web APIs, which together with the Execution Stack and the Message Queue make up our JS runtime. This runtime is responsible for how JS works behind the scenes as it executes our code.

What are those Web APIs? They're basically functions that live outside the JavaScript engine itself. Stuff like DOM manipulation methods, setTimeOut, HTTP requests for AJAX, geolocation, local storage and many other things.

What happens to our callback functinos after our setTimeOut is over? It simply moves to the Message Queue, where it waits to be executed as soon as the Execution Stack is empty. This is exactly what happens with DOM events as well. And that's because it actually works the exact same way. In the case of DOM events our event listeners sit in the Web APIs environment, waiting for certain event to happen. And as soon as that event then happens, then the callback function is placed on a Message Queue, ready to be executed.

How these callback functions in the Message Queue executed? That's where the Event Loop comes in. The job of the Event Loop is to constantly monitor the Message Queue and the Execution Stack, and to push the first callback function in line onto the Execution Stack, as soon as the stack is empty.

## Promises

## Async/Await

## AJAX