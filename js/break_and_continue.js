"use strict";



//TODO     THIS IS THE DO WHILE VERSION
//          Needs to be done with a break and limit the imput number to 1-50
let userInput;
do {
     userInput =  Number(prompt("Enter odd number between 1 and 50"));
} while(userInput % 2 === 0);





//let userInput = 27

console.log("Number to skip is: " + userInput);
console.log("");

for (var i = 1; i < 50; i+=2) {

    if (i === userInput) {

        console.log("Yikes! Skipping number: " + userInput);
        continue;
    }

    console.log('Here is an odd number: ' + i);
}
