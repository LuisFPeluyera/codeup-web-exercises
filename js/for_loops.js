"use strict";

//************************EXERCISE TWO

// function showMultiplicationTable(number){
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${(number * i)}`)
//     }
// }
//
// showMultiplicationTable(2)


//************************EXERCISE THREE


// let randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
//  randomNumber;
//
//
// function isEvenOrOdd(number) {
//     if (number % 2 !== 0) {
//
//         return console.log(number +" is odd")
//
//     } else {
//
//         return console.log(number + " is even")
//     }
// }
//
//
//
//     for (let i = 0; i < 10; i++) {
//         randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
//         isEvenOrOdd(randomNumber);
//
//     }


//*************************EXERCISE FOUR

//TODO THIS VERSION ALMOST WORKS

// for(let i = 1; i < 10; i++) {
//     console.log(i);
//     for (let x = 1; x < i; x++) {
//         console.log(i+"inner");
//     }
// }

//TODO ******************     STUDY THIS ONE

// for (let i = 1; i <= 9; i++) {
//     var res = [];
//     for (let a = 1; a <= i; a++) {
//         res.push(i);
//     }
//     console.log(res.join(""));
// }
//
//     for(let row = 1; row <= 9; row++){
//
//         let str="";
//
//         for(let j=0;j < row; j++) {
//             str += row;
//         }
//         console.log(str);
//     }
//
//

//************************EXERCISE FIVE


// for (let i = 100; i > 0; i-=5) {
//     console.log(i);
// }