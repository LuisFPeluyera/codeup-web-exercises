"use strict";

//console.log("this is an external js, you load me in with a src attribute")

//user interaction

//Alert; Confirm; Prompts;


//Alerts spawns a small browser window with only one "accept" button

        //sends a message

//Prompt - I would like to ask my user a question


        //requires a response

//Confirm - I want to ask my user a YES or NO question

        //sends a yes or no question

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

let $classNotFull = confirm("Classroom sit available?");

let scheduleClear = confirm("Are you available for the class?");

 if($classNotFull && scheduleClear) {
     alert("Congratulatios you are going to class!");
 } else {
     alert("Sorry maybe next time!");
 };






