// ? Primitives vs Objects

var a = 23;
var b = a;
a = 46;

// * Primitives

// Each of the variables hold their own copy of the data.
// They do not reference anything.
console.log(a);     // 46
console.log(b);     // 23

var obj1 = {
    name: 'John',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;

// * Objects

// No copy of the object was created here.
// All we did was to create a new reference which points to the first object.
// So it's the exact same object.
console.log(obj1.age);  // 30
console.log(obj2.age);  // 30

// * Functions

// We do not pass an object into a function, but only the reference. 

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco'
}

change(age, obj);

console.log(age);       // 27 (primitive remains unchanged)
console.log(obj.city);  // San Francisco