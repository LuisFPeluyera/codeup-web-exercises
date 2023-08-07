(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
let names =["Josh","Diego", "Aaron", "Hunter"];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("This array has " + names.length + " numbers!");

    console.log("");
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    names.forEach(function (element,index) {
        console.log("Here is the name: " + element + " in index: " + index);
    })
    console.log("");
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for(let i= 0; i< names.length; i++){

    console.log("Here is a name from the array :" + names[i]);
    }
    console.log("");
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(element,index){
        console.log("Here is a name :" + element);
    })



    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    console.log("");

//TODO           FIRST FUNCTION
    const firstFunction = array => {return array[0]};

    console.log(firstFunction(names));


    console.log("");

//TODO          SECOND FUNCTION


    const secondFunction = array => {return array[1]};

    console.log(secondFunction(names));

    console.log("");

//TODO         LAST FUNCTION

    const lastFunction = array => { return array.slice(-1)}
        //this is another option to return the last element
        //let lastElement = array.reverse()
        //return lastElement[0];
    //}


    console.log(lastFunction(names));

    console.log("");

    console.log(names);

})();
//
// let arr = [1,2,3,4,5,6];
// console.log(arr);
//
// // // for(let newArray of oldArray) {
// //      code here, maybe console.log;
// // }
//
// arr.forEach(function (element,index,array){
//     console.log("here is the element: " + place);
//
// })