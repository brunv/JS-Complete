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
ES6 brings Promises to put an end to the Callback Hell. Promise:

- Object that keeps track about whether a certain event has happened already or not;
- Determines what happens after the event has happened;
- Implements the concept of a future value that we're expecting; 

Since we're dealing with time sensitive code now a promise can have different states. So before the event has happened the promise is _pending_. Then after the event has happened the promise is called _settled_ or _resolved_. When the promise was actually successful, which means that a result is available, then the promise if _fulfilled_, but if there was an error, the promise is _rejected_.

## Async/Await
Async/Await was introduced in ES7 and ES8. It allows us to consume Promises, but without all the callbacks that we have with the callback hell.

Async functions will always run in the background and also automatically returns a promise with resolved value.

## AJAX and APIs
AJAX stands for **A**synchronous **J**avascript **A**nd **X**ML and basically it allows us to asynchronously communicate with remote servers. So let's say we have our JavaScript app running in the browser, which is called the client. And we want the app to get some data from our server. But of course, without having to reload the entire page. Well, with AJAX we can do a simple GET HTTP request, to our server, which will then send back a response containing the data that we requested. Also, of course, this not only works for getting data from the server, but also to send data to the server by doing a POST request.

API stands for **A**pplication **P**rogramming **I**nterface and on a very high level, it's basically a piece of software that can be used by another piece of software in order to allow applications to talk to each other.
