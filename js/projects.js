"use strict"


//TODO               BASIC CALCULATOR FUNCTION


// const calculator = () => {
//
//     let firstNum = parseInt(prompt("Enter first number"));
//
//     let operator = prompt("Enter operator");
//
//     let secondNum = parseInt(prompt("Enter second number"));
//
//     let result;
//
//
//
//     if (operator === "+") {
//
//         console.log(firstNum + secondNum);
//         result = firstNum + secondNum;
//
//     } else if (operator === "-") {
//
//         console.log(firstNum - secondNum);
//         result = firstNum - secondNum;
//
//     } else if (operator === "*") {
//
//         console.log(firstNum * secondNum);
//         result =  firstNum * secondNum;
//
//     } else if (operator === "/") {
//
//         console.log(firstNum / secondNum);
//         result = firstNum / secondNum;
//     }
//
//     alert(result);
// }
//
//
// //calculator();



var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
});

let newShapes = shapes.shift();
console.log(newShapes);
console.log(shapes);
shapes.push("squarre");
console.log(shapes);
