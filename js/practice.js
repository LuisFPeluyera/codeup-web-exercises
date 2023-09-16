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


let weatherCondition = ``;

//TODO links for bg vid for weather map

function setBackgroundImg (main) {
// Backgrounds
    switch (main) {
        case "Snow":
            document.getElementById("wrapper-bg").style.backgroundImage =
                "url('https://mdbgo.io/ascensus/mdb-advanced/img/snow.gif')";
            break;
        case "Clouds":
            document.getElementById("wrapper-bg").style.backgroundImage =
                "url('https://mdbgo.io/ascensus/mdb-advanced/img/clouds.gif')";
            break;
        case "Fog":
            document.getElementById("wrapper-bg").style.backgroundImage =
                "url('https://mdbgo.io/ascensus/mdb-advanced/img/fog.gif')";
            break;
        case "Rain":
            document.getElementById("wrapper-bg").style.backgroundImage =
                "url('https://mdbgo.io/ascensus/mdb-advanced/img/rain.gif')";
            break;
        case "Clear":
            document.getElementById("wrapper-bg").style.backgroundImage =
                "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
            break;
        case "Thunderstorm":
            document.getElementById("wrapper-bg").style.backgroundImage =
                "url('https://mdbgo.io/ascensus/mdb-advanced/img/thunderstorm.gif')";
            break;
        default:
            document.getElementById("wrapper-bg").style.backgroundImage =
                "url('https://mdbgo.io/ascensus/mdb-advanced/img/clear.gif')";
            break;

    }//end of switch


}//end of function