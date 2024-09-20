
//Map -Create a new array by doing something with each item in an array.

// function double (x) {
//     return x * 2;
// }
// const newNumber = numbers.map(double);

// console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.




// const newNumber = Numbers.filter(function (num) {
//     return num > 10;
// });

// console.log(newNumber);

//Reduce - Accumulate a value by doing something to each item in an array.



// var newNumber = numbers.reduce(function (Accumulator, currentNumber) {
//     console.log("accumulator = " + Accumulator);
//     console.log("currentNumber = " + currentNumber);
//     return Accumulator + currentNumber;
// });

// console.log(newNumber);

//Find - find the first item that matches from an array.

// var numbers = [3, 56, 2, 48, 5];

// const newNumber = numbers.find(function (num) {
//     return num > 10;
// });

// console.log(newNumber);


//FindIndex - find the index of the first item that matches.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser


import React from "react";
import reactDOM from "react-dom";
import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
    return emojiEntry.meaning.substring(0,100);
});

console.log(newEmojipedia);