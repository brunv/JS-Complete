/* Maps Data Structure */

const question = new Map();
question.set('question', 'What is the official name of the latest major JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong answer. Try again!');

console.log(question.get('question'));
console.log(question.size);     // 8

if (question.has(4)) {
    // question.delete(4);
}

// question.clear();    // deletes everything

// question.forEach((value, key) => console.log(`This is "${key}", and it's set to "${value}"`));

for (let [key, value] of question.entries()) {
    /* Using destructuring; Entries() returns an iterable key-value pairs for every entrie in the map */

    // console.log(`This is "${key}", and it's set to "${value}"`);

    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));
let attempt = question.get(ans === question.get('correct'));
console.log(attempt);