(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

let person = {
    firstName: "Luis",
    lastName: "Peluyera"
    };

    // console.log(person.firstName);
    // console.log(person.lastName);

    console.log("");

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    //
    // person.sayHello = function () {
    //     return "Hello from " + this.firstName + " " + this.lastName;
    // }
    //
    // console.log(person.sayHello());


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

   //  let shoppers = [
   //      {name: 'Cameron', amount: 180},
   //      {name: 'Ryan', amount: 250},
   //      {name: 'George', amount: 320}
   //  ];
   //
   // shoppers.forEach(function (element,index,array){
   //
   //     // console.log((element.amount <= 200) ? console.log(element.name + ", Your total is Total is: $" + element.amount ) : console.log(element.name + ", Your subTotal is $" +element.amount + ", Your total is $" + (element.amount - (element.amount * .12))));
   //
   //     let result;
   //
   //     // if(element.amount <= 200) {
   //     //
   //     //     result = element.name + ", Your Total is: $" + element.amount
   //     //
   //     // } else {
   //     //
   //     //     result = element.name + ", Your subTotal is: $" +element.amount + ", Your total is: $" + (element.amount - (element.amount * .12))
   //     // }
   //     result = (element.amount <= 200) ? `${element.name}, Your total is $${element.amount}` : `${element.name}, total is $${element.amount - (element.amount * .12)}`
   //     console.log(result);
   // })


    console.log("");
    //console.log(shoppers);
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */



    let books = [
         {
            title: "Rich Dad Poor Dad",
            author: {
                firstName: "Robert ",
                lastName:  "Kiyosaki"
            }
        },

        {
            title: "Millionaire Next Door",
            author: {
                firstName: "Thomas J. ",
                lastName: "Stanley"
            }
        },

        {
            title:"The Four Hour Work Week",
            author: {
                firstName: "Tim ",
                lastName: "Ferriss"
            }
        },

         {
            title: "The Intelligent Investor",
            author: {
                firstName: "Benjamin ",
                lastName: "Graham"
            }
        },

        {
            title: "Mastering Bitcoin",
            author: {
                firstName: "Andreas M. ",
                lastName: "Antonopoulos"
            }
        }

    ]






    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // console.log("");
    //
    //
    // for(let i = 0; i < books.length; i++) {
    //
    //     console.log( "Book # " + (i + 1) + " \n" + books[i].title + "\nBy " + books[i].author.firstName + books[i].author.lastName);
    // }
    //
    //



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */



    function createBook (title, author) {

        this.author = author;
        this.title = title;
    }

 let newBook = new createBook("Fake Title", "Fake Author");


    console.log("");

    //console.log(newBook);

    console.log("");


const showBookInfo = (object) => {


  //******************FIRST VERSION

    // if (typeof object.author.firstName === "undefined") {
    //
    //     console.log("Book title is : " + object.title + "\nBy " + object.author)//.firstName.toString() + " " + object.author.lastName.toString());
    // } else {
    //
    //     console.log("Book title is : " + object.title + "\nBy " + object.author.firstName + object.author.lastName);
    // }

  //*********************SECOND VERSION


    console.log((typeof object.author.firstName === "undefined") ? `Book ${object.title}\nBy ${object.author}` : `Book : ${object.title}\nBy ${object.author.firstName + object.author.lastName}`)
//
 }


    showBookInfo(books[0]);


})();


