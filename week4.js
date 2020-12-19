//  Focus on the most imporant part during the Q. Do not focus, 


// 1. Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘firstName lastName’
const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
 
console.log (createFullName('firstName', 'lastName'));

// 2. Write the same function as above as an arrow function with a different name.

const createFullNameArrow = (firstName, lastName) => `${firstName} ${lastName}`;

console.log (createFullNameArrow('trying new name ', 'calling new function'));

// 3. a)	Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.

// a.
setTimeout(() => alert('Time is up! '), 2);

// b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. call setInterval,pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval.

askAreWeThereYet = setInterval (() => alert('Are we there yet? '), 5000);


// 4. In this step you are going to write a function that takes a callback to better understand how callbacks work.


const sportsArray = ['football', 'basketball', 'baseball', 'hockey', 'golf'];

function processSplicedValue(sportsArray, index, callBack) {
    const elementSpliced = sportsArray.splice(index, 1);
    callBack(elementSpliced);               
}
processSplicedValue(sportsArray, 1, console.log);
processSplicedValue(sportsArray, 1, alert); 

processSplicedValue(sportsArray, 0, (elementSpliced) => alert(elementSpliced)); 

capitalizatiedSplicedValue = () => console.log(`${sportsArray}`.toUpperCase());
processSplicedValue(sportsArray,0, capitalizatiedSplicedValue);