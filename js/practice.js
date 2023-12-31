/**
 * Filter out Strings from an Array
 * Create a function named filterArray that takes an array of non-negative integers and strings and return a new array without the strings.
 *
 * Examples
 *
 * >> filterArray([1, 2, "a", "b"]) ➞ [1, 2]
 * >> filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
 * >> filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
 *
 * Notes
 * Zero is a non-negative integer.
 * The given array only has integers and strings.
 * Numbers in the array should not repeat.
 * The original order must be maintained.
 */

// const filterArray = (arr) => {return arr.filter(x =>  typeof x !== 'string')}

// console.log(filterArray([1, 2, "aasf", "1", "123", 123]));
//
// document.write(filterArray([1, 2, "aasf", "1", "123", 123]))



// Write a function named isPositive that accepts a number and returns true or false based on whether the input is positive.
// isPositive(3) //true
// isPositive(10) //true
// isPositive(-2) //false
// ~~~
//  Count total pets
//  Write a function named totalPets that accepts an array of objects where each object represents a person, and has a 'pets' property for their owned pets. The function should return the sum of every object's numPets property.
//
//  Examples
//  totalPets([
//        {name: 'Fernando Mendoza', pets: 1},
//         {name: 'Douglas Hirsh', pets: 8},
//        {name: 'Kenneth Howell', pets: 2}
//     ]) ➞ 11
// ~~~
// Write a function called convertLocationToObject - this object will take in a string of a city and state separated by a comma: “Austin, Texas”, “San Francisco, California”, “Auburn, New York”. Your function should take the string and create an object with a cityName property and stateName property.
// convertLocationToObject(“Austin, Texas”) // {cityName: “Austin”, stateName: “Texas”}
// convertLocationToObject(“Auburn, New York) // {cityName: “Auburn”, stateName: “New York”}
// ~~~
// Write a function named triple that accepts a number and returns that number tripled.
// triple(5) //15
// triple(12) //26
// triple(-2) // -6
// ~~~
// Write a function named removeOdds. This function will accept an array of numbers and remove all odd numbers from the array.
// removeOdds([2, 4, 6]) // [2, 4, 6]
// removeOdds([7, 3, 2]) // [2]
// removeOdds([1, 11, 111]) // []
// ~~~
// Write a function called countXs - countXs should accept a string and return the number of times the character ‘x’ is in the string (lower or upper case).
// countXs(“All my exes live in Texas”) //2
// countXs(“Hello world”) //0
// countXs(“X-rays have a limited amount of radiation to them”) //1

//
// let weatherCondition = ``;
//
// //TODO links for bg vid for weather map
//
// function setBackgroundImg (main) {
// // Backgrounds
//     switch (main) {
//         case "Snow":
//             document.getElementById("wrapper-bg").style.backgroundImage =
//                 "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
//             break;
//         case "Clouds":
//             document.getElementById("wrapper-bg").style.backgroundImage =
//                 "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
//             break;
//         case "Fog":
//             document.getElementById("wrapper-bg").style.backgroundImage =
//                 "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
//             break;
//         case "Rain":
//             document.getElementById("wrapper-bg").style.backgroundImage =
//                 "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
//             break;
//         case "Clear":
//             document.getElementById("wrapper-bg").style.backgroundImage =
//                 "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
//             break;
//         case "Thunderstorm":
//             document.getElementById("wrapper-bg").style.backgroundImage =
//                 "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
//             break;
//         default:
//             document.getElementById("wrapper-bg").style.backgroundImage =
//                 "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
//             break;
//
//     }//end of switch
//
//
// }//end of function

//
// function weatherBg(main) {
//     if (main.includes("snow")) {
//
//         console.log("snow");
//         // $(this).css("background-image", "url(`img/weather-app/snow.gif`)");
//
//     } else if (main.includes("clear")) {
//
//         console.log("clear");
//         //$(this).css("background-image", "url(`img/weather-app/clear.gif`)");
//
//     } else if (main.includes("clouds")) {
//
//         console.log("clouds");
//         //$(this).css("background-image", "url(`img/weather-app/clouds.gif`)");
//
//     } else if (main.includes("fog")) {
//
//         console.log("fog");
//         //$(this).css("background-image", "url(`img/weather-app/fog.gif`)");
//
//     } else if (main.includes("rain")) {
//
//         console.log("rain");
//        // $(this).css("background-image", "url(`img/weather-app/rain.gif`)");
//
//     } else if (main.includes("thunderstorm")) {
//
//         console.log("thunderstorm");
//        // $(this).css("background-image", "url(`img/weather-app/thunderstorm.gif`)");
//     } else {
//
//         console.log("something is wrong");
//     }// end of if statements
//
// }// end of function weatherBG
//
// //TODO TEST JQUERY EVENT LISTENER IT WORKS
// $("body").on("click",(e) =>{
//
//     console.log(e.target);
//     $(e.target).css({
//         "background-image": `url("/img/weather-app/clouds.gif")`,
//         "color": "black"
//     } )
//
// })
//
//
//
// $("#address-search-button").on("click",(e) =>{
//
//     console.log(e.target);
//     $(e.target).css({
//         "background-image": `url("/img/weather-app/clouds.gif")`,
//         "color": "black"
//     } )
//
// })



// function example(main) {
//     return condition1 ? value1
//         : condition2 ? value2
//         : condition3 ? value3
//         : value4;
// }






// let today = new Date();
// let firstOfMonth = new Date(today);
//
// console.log(today);
//
// let days = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
// console.log(days[today.getDay()]);


// let someDate = $(".date").html()
//
//function to convert dt to name of day
// const getDayNameByDate = (dt) => {
//     const newDate =new Date(dt * 1000).toString().substring(4, 15)
//     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const dayIndex = new Date( newDate ).getDay()
//     return days[dayIndex];
//
// }


// function to convert dt to date
// const epochConverter = (epoch)=>{
//
//
//     return  new Date(epoch * 1000).toString().substring(4, 15)
// }
// //
// /* optional function */
// const showDom = async ( res ) => {
//     const output = await document.getElementById('date');
//     output.innerHTML = res
// }





//TODO NEED TO FIGURE OUT WHY ITS NOT WORKING
// function to assign bg img based on condition
function weatherBg(main) {
    if (main.includes("Snow")) {

        console.log("snow");
        $("body").css({
            "background-image": `url("/img/weather-app/snow.gif")`

        });

    } else if (main.includes("Clear")) {

        console.log("clear");
        $("body").css({
            "background-image": `url("/img/weather-app/clear.gif")`

        });

    } else if (main.includes("Clouds")) {

        console.log("clouds");
        $("body").css({
            "background-image": `url("/img/weather-app/clouds.gif")`

        });

    } else if (main.includes("Fog")) {

        console.log("fog");
        $("body").css({
            "background-image": `url("/img/weather-app/fog.gif")`
        });

    } else if (main.includes("Rain")) {

        console.log("rain");
        $("#address-search-button, .container-fluid.custom-bg").css({
            "background-image": `url("/img/weather-app/rain.gif")`
        });

    } else if (main.includes("Thunderstorm")) {

        console.log("thunderstorm");
        $("body").css({
            "background-image": `url("/img/weather-app/thunderstorm.gif")`

        });
    } else {

        console.log("something is wrong");

    }// end of if statements

}// end of function weatherBG



let baseArr = [1, 2, 3];

let baseArr2 = [4, 5, 6];


let newArr = [...baseArr,...baseArr2];

console.log(newArr);
