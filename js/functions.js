"use strict";

    /**
     * TODO:
     * Create a function called 'sayHello' that takes a parameter 'name'.
     * When called, the function should return a message that says hello to the passed in name.
     *
     * Example
     * > sayHello("codeup") // returns "Hello, codeup!"
     */

    // function sayHello(name) {
    //
    //     return `Hello, ${name}!`;
    // }

//console.log(sayHello("tu"));

    /**
     * TODO:
     * Call the function 'sayHello' and pass your name as a string literal argument.
     * Store the result of the function call in a variable named 'helloMessage'.
     *
     * console.log 'helloMessage' to check your work
     */

   // let helloMessage = sayHello("Luis");

//console.log(helloMessage);

// alert(helloMessage);


    /**
     * TODO:
     * Store your name as a string in a variable named 'myName', and pass that
     * variable to the 'sayHello' function. You should see the same output in the
     * console.
     */

        //**************Ask for clarification about this exercise

    let myName = "Francisco";

//console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
    var random = Math.floor((Math.random() * 3) + 1);

    /**
     * TODO:
     * Create a function called 'isTwo' that takes a number as a parameter.
     * The function should return a boolean value based on whether or not the passed
     * number is the number 2.
     *
     * Example
     * > isTwo(1) // returns false
     * > isTwo(2) // returns true
     * > isTwo(3) // returns false
     *
     * Call the function 'isTwo' passing the variable 'random' as a argument.
     *
     * console.log *outside of the function* to check your work (you should see a
     * different result everytime you refresh the page if you are using the random
     * number)
     */

// function isTwo (number) {
//      if (number === 2) {
//          return true;
//      } else {
//          return false;
//      };
// }


// function isTwo (number) {
//    return number === 2;
//}

// console.log(random);
// console.log(isTwo(random));


    /**
     * TODO:
     * Create a function named 'calculateTip' to calculate a tip on a bill at a
     * restaurant. The function should accept a tip percentage and the total of the
     * bill, and return the amount to tip
     *
     * Examples:
     * > calculateTip(0.20, 20) // returns 4
     * > calculateTip(0.25, 25.50) // returns 6.375
     * > calculateTip(0.15, 33.42) // returns 5.013
     */

//function calculateTip (percent, total) {
//     return percent * total;
// }  //for whole number input in the % divide "(percent/100)" on the return calculation

    /**
     * TODO:
     * Use prompt and alert in combination with your calculateTip function to
     * prompt the user for the bill total and a percentage they would like to tip,
     * then display the dollar amount they should tip
     */

//***************FIRST VERSION

// tipPercent is entered as a decimal number
//
// function calculateTip (percent, total) {
//     return percent * total;
// }
// let subTotal = Number(prompt("What is the bill total?"));
//
// let tipPercent =Number(prompt("What % would you like to tip?"));
//
// alert("Your subtotal is $" + subTotal.toFixed(2) + " and your tip amount is $" + calculateTip(tipPercent,subTotal).toFixed(2));
//
// let total =alert("Your total is $" + (subTotal + (subTotal * tipPercent)).toFixed(2));


//***************SECOND VERSION

//takes tipPercent as a whole number

// function calculateTip (percent, total) {
//     return (percent / 100) * total;
// }
//
// let subTotal = Number(prompt("What is the bill total?"));
//
// let tipPercent =Number(prompt("What % would you like to tip?"));
//
//
// let discountAmount =calculateTip(subTotal,tipPercent);
//
// alert("Your subtotal is $" + subTotal.toFixed(2) + " and your tip amount is $" + calculateTip(tipPercent,subTotal).toFixed(2));
//
// let total =alert("Your total is $" + (subTotal + discountAmount).toFixed(2))



//**************This version takes tip % as a whole number & auto alerts message with tip & total amounts



// let subTotal = Number(prompt("What is the bill total?"));
//
// let tipPercent =Number(prompt("What % would you like to tip?"));
//
// function calculateTip (percent, total) {
//
//     let discount = (percent/100) * total
//
//     alert("Your TIP amount is $" + discount.toFixed(2) + "\n\nYour TOTAL is $" + (discount + total).toFixed(2));
//
//     return total + discount
// }
//
// let totalPurchase =calculateTip(tipPercent, subTotal);
//
// console.log("The total bill with tip included is $" + totalPurchase.toFixed(2));



//******************This version only accepts numbers


// function calculateTip(percent, total) {
//
//     let discount = (percent / 100) * total
//
//     alert("Your TIP amount is $" + discount.toFixed(2) + "\n\nYour TOTAL is $" + (discount + total).toFixed(2));
//
//     return total + discount
// }
//
//
//
// let subTotal = Number(prompt("What is the bill total?"));
//
// let tipPercent =Number(prompt("What % would you like to tip?"));
//
//
//
//
//
// ( isNaN(subTotal) || isNaN(tipPercent)) ? alert("Invalid Input Data Type \nPlease reload page and try again \nENTER NUMBERS ONLY") : calculateTip(tipPercent,subTotal)
//
// let totalPurchase =calculateTip(tipPercent, subTotal);



/**

     * TODO:
     * Create a function named `applyDiscount`. This function should accept a price
     * (before a discount is applied), and a discount percentage (a number between 0
     * and 1). It should return the result of applying the discount to the original
     * price.
     *
     * Example:
     * > var originalPrice = 100;
     * > var discountPercent = .2; // 20%
     * > applyDiscount(originalPrice, discountPercent) // 80
     * > applyDiscount(45.99, 0.12) // 40.4712
     */

//**********************VERSION ONE



// let originalPrice = 100;
// let discount = 20;
// function applyDiscount (price, discountPer) {
//     return   price - (price * (discountPer/100));
// }
//
// console.log(applyDiscount(originalPrice,discount));




//*********************VERSION TWO


// function applyDiscount (price, discountPer) {
//     alert("Your new Discounted price is $" + price - (price * (discountPer/100)).toFixed(2));
//     return   price - (price * (discountPer/100));
// }
//
//
//
//
// let originalPrice = Number(prompt("What is the original price?"));
// let discount = Number(prompt("what is the discount percentage?"));
//
//
// (isNaN(originalPrice)|| isNaN(discount) ) ? alert("Invalid Input Data Type \nENTER ONLY NUMBERS") : applyDiscount(originalPrice,discount);
//



