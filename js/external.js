"use strict";


        //***************user interaction*********************


        //Alert; Confirm; Prompts;


//Alerts spawns a small browser window with only one "accept" button

        //sends a message

//Prompt - I would like to ask my user a question


        //requires a response

//Confirm - I want to ask my user a YES or NO question

        //sends a yes or no question




        //EXERCISE 3 PART 1 OF WORKING WITH DATA TYPES, OPERATORS, AND VARIABLES



//let theLittleMermaid = 3 * 3;
//
// let brotherBear = 5 * 3;
//
// let hercules = 1 * 3;
//
// let totalDays = theLittleMermaid + brotherBear + hercules;
//
// console.log(totalDays);

/**let theLittleMermaid = Number(prompt("How many days are you renting?"));

let brotherBear = Number(prompt("How many days are you renting me?"));

let hercules  = Number(prompt("How many days are you renting me?"));

let totalDays = (theLittleMermaid * 3) + (brotherBear * 3) + (hercules * 3);

alert("Your total is $" + totalDays.toFixed(2));

 */


        //EXERCISE 3 PART 2 OF WORKING WITH DATA TYPES, OPERATORS, AND VARIABLES



/**let google = 400 * 6;

let amazon = 380 * 4;

let facebook = 350 * 10;

let thisWeeksPay = google + amazon + facebook;

thisWeeksPay = thisWeeksPay.toFixed(2);
 */

/**let googleRate = Number(prompt("Goolge rate?"));

let googleHours = Number(prompt("Google hours?"));

let amazonRate = Number(prompt("Amazon rate?"));

let amazonHours = Number(prompt("Amazon hours?"));

let facebookRate = Number(prompt("Facebook rate?"));

let facebookHours = Number(prompt("Facebook hours?"));

let total = (googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours);

alert("Your total for this week is $" + total.toFixed(2));

 */


        //EXERCISE 3 PART 3 OF WORKING WITH DATA TYPES, OPERATORS, AND VARIABLES
/**
let classNotFull = confirm("Classroom sit available?");

let scheduleClear = confirm("Are you available for the class?");

let willAttend = classNotFull && scheduleClear;

alert("You are going to attend this class is: " + willAttend);


 if(classNotFull && scheduleClear) {
     alert("Congratulatios you are going to class!");
 } else {
     alert("Sorry maybe next time!");
 };
 */



        //EXERCISE 3 PART 4 OF WORKING WITH DATA TYPES, OPERATORS, AND VARIABLES


/**

 alert("Let's see if you can get this product!");

let validOffer = confirm("Is the offer still valid?");

let premiumMember = confirm("Are you a Premium member?");

let atLeastTwo = confirm("Are you buying more than one?");

let offer = alert("Are you getting the product? "  + (validOffer && (premiumMember || atLeastTwo)));

 */

/**

if (validOffer && (premiumMember || atLeastTwo)) {
        alert("Congrats you are able to purchase this product today!")

}   else {
    alert("Unfortunately this offer is not available at this time!");
};
 */




        //EXERCISE OF JavaScript with HTML

alert("Welcome to my Website!");

let userResponse = prompt("What is your favorite color?");

alert("Great, " + userResponse.trim() + " is my favorite color too!");