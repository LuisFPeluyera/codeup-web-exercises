(function(){
     "use strict";
//
//     let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
//     let planetsArray;
//
//     /**
//      * TODO:
//      * Convert planetsString to an array, and save it in a variable named
//      * planetsArray.
//      * console.log planetsArray to check your work
//      */
//
//     planetsArray = planetsString.split("|");
//
//      console.log(planetsArray);
//
//     /**
//      * TODO:
//      * Create a string with <br> tags between each planet. console.log() your
//      * results. Why might this be useful?
//      *
//      * BONUS:
//      * Create another string that would display your planets in an undordered
//      * list. You will need an opening AND closing <ul> tags around the entire
//      * string, and <li> tags around each planet.
//      */
//
//
 let myString = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune"


    document.write(myString);
    console.log(myString);

     console.log(myString.split("<br>"));


    let myList = "<ul><li>Mercury</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li></ul>"
    console.log(myList);

    document.write(myList);

})();




