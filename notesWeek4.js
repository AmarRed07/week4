//  Focus on the most imporant part during the Q. Do not focus, 


// 1. Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘firstName lastName’
const createFullName = (firstName, lastName) => `${firstName} ${lastName}`;
 
console.log (createFullName('firstName', 'lastName'));

// 2. Write the same function as above as an arrow function with a different name.

const createFullNameArrow = (firstName, lastName) => `${firstName} 
${lastName}`;

console.log (createFullNameArrow('trying new name ', 'calling new function'));

// 3.	Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// a.

setTimeout(() => alert('Time is up! '), 2);

// b.	Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. 
//  call setInterval,pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for 
//  the interval.

askAreWeThereYet = setInterval (() => alert('Are we there yet? '), 5000);


// 4. In this step you are going to write a function that takes a callback to better understand how callbacks work.

// a, b, c
// On line 30, second par - The index is defined by line 35. This is because I set a variable
// to define it and have 36 define par 31. On, 37 I created a call function and pur in the 2 par I want called
// 37 takes the index (basketball - index 1) and splices it out of the array whenever I call Elementspliced
// 


// const sportsArray = ['football', 'basketball', 'baseball'];
// const index = 2;

// function processSplicedValue(sportsArray, index, callBack) {
//     const elementSpliced = sportsArray.splice(index, 1);
//     callBack(elementSpliced);
//     setTimeout(() => alert(elementSpliced), 5000); // this is e.
// }
// processSplicedValue(sportsArray, index, console.log); // This is d.
// processSplicedValue()



const sportsArray = ['football', 'basketball', 'baseball', 'hockey', 'golf'];
// const index = 1;

function processSplicedValue(sportsArray, index, callBack) {
    const elementSpliced = sportsArray.splice(index, 1);
    callBack(elementSpliced);               
    // setTimeout(() => alert(elementSpliced), 5000); // this is e.
}
processSplicedValue(sportsArray, 1, console.log); // football
processSplicedValue(sportsArray, 1, alert); // basketball


processSplicedValue(sportsArray, 0, (elementSpliced) => alert(elementSpliced)); // 

capitalizatiedSplicedValue = () => console.log(`${sportsArray}`.toUpperCase());
processSplicedValue(sportsArray,0, capitalizatiedSplicedValue);

// processSplicedValue(sportsArray, index, alert(elementSpliced));

// processSplicedValue(() => { console.log(sportsArray, elementSpliced)});


// -----------------------------------------------------------------------------------
// 5:

// a.
// setTimeout()processSplicedValue(() => alert(elementSpliced, index, 5000));
// alert(processSplicedValue, 5000);




// // b.
// setTimeout(() => alert(processSplicedValue), 5000);
// c. 
// console.log(processSplicedValue(elementSpliced)); // confused