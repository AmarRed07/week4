// 1. Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘firstName lastName’
const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
 
console.log (createFullName('firstName', 'lastName'));

// 2. Write the same function as above as an arrow function with a different name.

const differentName = (differentFirstName, differentLastName) => `${differentFirstName} ${differentLastName}`;

console.log (differentName('Different First Name ', 'Different Last Name'));

// 3.	Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// a.

setTimeout(() => alert('Time is up! '), 2);

// b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. 
//  call setInterval,pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for 
//  the interval.

askAreWeThereYet = setInterval (() => alert('Are we there yet? '), 5000);


// 4. In this step you are going to write a function that takes a callback to better understand how callbacks work.

// a, b, c

const sportsArray = ['football', 'basketball', 'baseball'];
const elementSpliced = sportsArray.splice(1, 1);

function processSplicedValue(sportsArray, index, callBack) {
    console.log(sportsArray); 
}
processSplicedValue(() => { console.log(sportsArray, elementSpliced)});


// -----------------------------------------------------------------------------------
// 5:

// a.
alert(processSplicedValue, 5000);
// b.
setTimeout(() => alert(processSplicedValue), 5000);
// c.
console.log(processSplicedValue(elementSpliced)); // confused