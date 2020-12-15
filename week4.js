// 1. Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘firstName lastName’
const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
 
console.log (createFullName('firstName', 'lastName'));

// 2. Write the same function as above as an arrow function with a different name.

const differentName = (differentFirstName, differentLastName) => `${differentFirstName} ${differentLastName}`;

console.log (differentName('Different First Name ', 'Different Last Name'));

// 3.	Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// a.

setTimeout(() => alert('Time is up! '), 2);


// b. // b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. 
//  call setInterval,pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for 
//  the interval.


askAreWeThereYet = setInterval (() => alert('Are we there yet? '), 5000);





// 4. In this step you are going to write a function that takes a callback to better understand how callbacks work.

// a, b, c


// This is not an arrow function, this is a basic function, being 'called' <-- outside the brackets.

const sportsArray = ['football', 'basketball', 'baseball'];

const deleted = sportsArray.splice(1, 1);

function processSplicedValue(firstChair, secondPar, sportsArray) {
    console.log('string', 'this does not matter', firstChair, secondPar, sportsArray); 
}
processSplicedValue('baseball', 'football');
console.log(deleted);

alert(processSplicedValue, 5000);

setTimeout(() => alert(processSplicedValue), 5000);
