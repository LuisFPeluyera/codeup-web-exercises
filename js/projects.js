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


//
// let shapes = ['square', 'rectangle', 'circle', 'triangle'];
//
// // loop through the array and log the values
// shapes.forEach(function(shape) {
//     console.log('Here is a lovely shape: ' + shape + '.');
// });
//
// let newShapes = shapes.shift();
// console.log(newShapes);
// console.log(shapes);
// shapes.push("squarre");
// console.log(shapes);



//TODO          FUNCTION TO MASK INPUT EXCEPT THE LAST FOUR DIGITS






// const maskify = input =>{
//     let length =input.length
//     let mask=input.split("");
//     let slice= mask.slice(-4)
//
//
//     console.log(length);
//
//     console.log(slice);
//
// }

// maskify("123456789")

//
//     function maskify (input){
//         let largo =input.length
//         let mask = input.split("")
//         for (let i=0; i < input.length ; i++)
//             mask.reverse();
//
//             mask.splice(4,input.length,"#" )
//             for (let i=0; i < input.length-5 ; i++)
//                 mask.push("#")
//
//
//         console.log(mask)
//
//     }
//
// maskify("this is a test and i should only see this 1234")



//TODO/////////////////////// VERSION ONE, works somewhat ok, needs more work!.

// const maskify = input => {
//
//     let newArray = input.split("")
//     let lastFour = input.slice(-4)
//
//     for (let i = 0; i < input.length-input.length ; i++){
//         newArray.pop();
//
//     }
//
//     let mappedArray = newArray.map(myFunction)
//
//     function myFunction() {
//         return "#";
//     }
//
//     let output= mappedArray.join("")+lastFour;
//     //console.log(output);
//     return output;
//
// }
// console.log(maskify("this is a test 4321"));


//TODO /////////////////////// VERSION TWO,  works as intended!!!!!!.




// const maskify = str => {
//     let input = str.toString()
//     function toMaskify (input) {
//         let lastFour = input.slice(-4);
//         let firstPart = input.slice(0, input.length - 4).split("")
//         let mappedArray = firstPart.map(mask)
//             function mask()
//         {
//             return "#";
//         }
//
//         return mappedArray.join("") + lastFour;
//     }
//
//     return (input.length<=4) ? input : toMaskify(input);
// }
//
//
// console.log(maskify("test 54321"));



//TODO                      THIS ONE DOES NOT WORK AS INTENDED !
//                              (found online!)
//
// function maskify(input) {
//     let toStr = input.toString();
//     let toArray = toStr.split("");
//     console.log(toArray);
//     for (let i = 0; i < toArray.length - 4; i++) {
//         toArray[i] = "#";
//     }
//
//     let maskedInput = toArray.join("");
//     return maskedInput;
// }
//
// maskify("ertewre433QW4T53W4ETgfegfSDFGSAFDASFASDFSADFGDSFGDSsdegsdtg");


//TODO                  JESS'S VERSION WORKS GREAT!
//
// function maskify(input) {
//     let toString = input.toString();
//     if (toString.length <= 4 || input === " ") {
//         return input;
//     }
//     let toArray = toString.split("");
//     let firstPart = toArray.slice(0, toArray.length - 5);
//
//     for (let i = 0; i < firstPart.length + 1; i++) {
//         toArray.shift();
//     }
//
//     for (let i = 0; i < firstPart.length + 1; i++) {
//         toArray.unshift("#");
//
//     }
//     return toArray.join("");
// }
//
// console.log(maskify("5435234523ferhgergewrgewrg5325234567891234"));