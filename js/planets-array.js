(function(){
    "use strict";

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    /**
     * TODO:
     * Read each console log below, and write some javascript code to perform
     * the step that it describes
     */

     planets.unshift("The Sun");
     console.log('Adding "The Sun" to the beginning of the planets array.');
     console.log(planets);
    console.log("");
    //
    planets.push("Pluto");
     console.log('Adding "Pluto" to the end of the planets array.');
     console.log(planets);
    console.log("");
     //
    planets.shift("The Sun");
    // console.log('Removing "The Sun" from the beginning of the planets array.');
     console.log(planets);
    console.log("");
     //
    planets.pop();
    console.log('Removing "Pluto" from the end of the planets array.');
     console.log(planets);
    console.log("");
     //
     planets.indexOf("Earth");
     console.log('Finding and logging the index of "Earth" in the planets array.');
     console.log(" The index of Earth is : " + planets.indexOf("Earth"));
    console.log("");
     //
    planets.reverse();
     console.log("Reversing the order of the planets array.");
     console.log(planets);
    console.log("");
     //
    planets.sort();
     console.log("Sorting the planets array.");
     console.log(planets);


})();

// var namesString = "Joe,Bob,Sally";
//
// console.log(namesString);
// // Joe,Bob,Sally
//
// var namesArray = namesString.split(',');
//
// console.log(namesArray);
// console.log(namesString);
//
// // var namesArray = ['Joe', 'Bob', 'Sally'];
// //
// // console.log(namesArray);
// // // ['Joe', 'Bob', 'Sally']
// //
// // var namesString = namesArray.join(",");
// //
// // console.log(namesString);
// // // Joe,Bob,Sally



