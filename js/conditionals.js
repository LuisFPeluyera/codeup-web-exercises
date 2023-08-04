"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */



// let favoriteColor = prompt("what's your favorite color?");
// function analyzeColor (color) {
//     if (color === "red") {
//         alert("its red");
//     } else if (color === "blue") {
//         alert("its blue");
//     } else if (color === "orange") {
//         alert("its orange");
//     } else if (color === "yellow") {
//         alert("its yellow");
//     } else if (color === "green") {
//         alert("its green");
//     } else if (color === "violet") {
//         alert("its violet");
//     }else if (color === "indigo") {
//         alert("its indigo");
//     }
//     else {
//         alert("What!");
//     }
// }

//analyzeColor(favoriteColor);


//*************SECOND VERSION

// let favoriteColor = prompt("what's your favorite color?");
// function analyzeColor (color) {
//     if (color === "red") {
//             return "its red";
//         } else if (color === "blue") {
//             return "its blue";
//         } else if (color === "orange") {
//             return "its orange";
//         } else if (color === "yellow") {
//             return "its yellow";
//         } else if (color === "green") {
//             return"its green";
//         } else if (color === "violet") {
//             return "its violet";
//         }else if (color === "indigo") {
//             return "its indigo";
//         }
//         else {
//             return "What!";
//     }
// }
//
// alert(analyzeColor(favoriteColor));





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this will contain a different color every time the page loads)
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor);
// console.log(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// switch (randomColor) {
//     case  "red":
//         alert("its red");
//         break;
//     case  "blue":
//         alert("its blue");
//         break;
//     case  "orange":
//         alert("its orange");
//         break;
//     case  "yellow":
//         alert("its yellow");
//         break;
//     case  "green":
//         alert("its green");
//         break;
//     case  "violet":
//         alert("it violet");
//         break;
//     case  "indigo":
//         alert("its indigo");
//         break;
//
//     default :
//         alert("What!");
//         break;
//
// }
// console.log(randomColor);





//****************SECOND VERSION




// let favoriteColor = (prompt("what's your favorite color?").toLowerCase()).trim();
//
// function colorAnalysis(color) {
//     switch (color) {
//         case "red":
//             return "its red";
//         case "blue":
//             return "its blue";
//         case "orange":
//             return "its orange";
//         case "yellow":
//             return "its yellow";
//         case "green":
//             return"its green";
//         case "violet":
//             return "its violet";
//         case "indigo":
//             return "its indigo";
//         default:
//             return "Don't have that color!";
//     }
// }
// alert(`Your favorite colors is ${colorAnalysis(favoriteColor)}`);

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


// let favoriteColor = prompt("what's your favorite color?");
// function analyzeColor (color) {
//     if (color === "red") {
//         alert("its red");
//     } else if (color === "blue") {
//         alert("its blue");
//     } else if (color === "orange") {
//         alert("its orange");
//     } else if (color === "yellow") {
//         alert("its yellow");
//     } else if (color === "green") {
//         alert("its green");
//     } else if (color === "violet") {
//         alert("its violet");
//     }else if (color === "indigo") {
//         alert("its indigo");
//     }
//     else {
//         alert("What!");
//     }
// }

//analyzeColor(favoriteColor);
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */



// let discountPrice;
// function calculateTotal (discount, price) {
//     if (discount === 0) {
//
//         return price.toFixed(2);
//
//     } else if (discount === 1) {
//
//         return price - (.10 * price).toFixed(2);
//
//     } else if (discount === 2) {
//
//         return price - (.25 * price).toFixed(2);
//
//     } else if (discount === 3) {
//
//         return price - (.35 * price).toFixed(2);
//
//     } else if (discount === 4) {
//
//         return price - (.50 * price).toFixed(2);
//
//     } else if (discount === 5) {
//
//         return (price-price).toFixed(2);
//
//     }else {
//
//         return "No discount!"
//     }
// }
//
//  discountPrice = calculateTotal(1,100);



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
//  var luckyNumber = Math.floor(Math.random() * 6);
//
//
//  let userTotalBill = Number(prompt("Whats your total?"));
//
//  let discountedTotal = calculateTotal(luckyNumber,userTotalBill);
//
// alert(isNaN(userTotalBill) ? "Invalid Input Data Type, PLEASE ENTER ONLY NUMBERS" :`Your lucky number is ${luckyNumber}, Your price before discount was $${userTotalBill.toFixed(2)} Your new price is $${discountedTotal.toFixed(2)}`);



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

//let confirmation =confirm("Would you like to enter a number?");

// if (confirmation) {
//     let response =Number(prompt("Whats your number?"));
//     alert(response % 2 !== 0  ? "Odd" : "even");
//     alert(response + 100);
//     alert(response >0 ? "Positive" : "Negative");
// } else {
//
//     //finish this part as homework
// }

// if (confirmation) {
//     let response = Number(prompt("Whats your number?"));
//     if (isNaN(response)) {
//         alert("Incorrect Input Data Type");
//     } else {
//         alert(response % 2 !== 0 ? "Odd" : "even");
//         alert(response + 100);
//         alert(response > 0 ? "Positive" : "Negative");
//     }
// }

// let userResponse = Number(prompt("What's your number?"));
// function checkNumber (number) {
//     if (number) {
//         return (number % 2 !== 0  ? "Odd" : "even") + " " + (number + 100) + " " + ((number >0) ? "Positive" : "Negative")
//         // alert((number % 2 !== 0  ? "Odd" : "even"));
//         // alert((number + 100));
//         // alert((number >0) ? "Positive" : "Negative");
//     }
// };
//
//
// let checkedNumber = checkNumber(userResponse);
//
// alert(checkedNumber);



