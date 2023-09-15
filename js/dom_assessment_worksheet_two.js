//TODO: When the h1#double-click is double clicked, change the inner text of the H1 from "Prepare for trouble. . ." to ". . . and make it double!"

$("#double-click").on("dblclick", (e)=>{
    $("#double-click").text(". . . and make it double!")
})



//TODO: As the user types into the input#input,  the div#printHere should display each individual character typed as it was typed into the input.


// if user input is not declared as an empty string, it will print as needed, it'll come back as undefined plus whatever key is pressed
let userInput = "";

$("#input").on("keydown", (e) =>{

    userInput += e.originalEvent.key
    console.log(e.originalEvent.key);
    console.log(userInput);
    $("#printHere").text(userInput);
});

userInput = "";

// this one works too
// $("#input").on("keypress", function(){
//  $("#printHere").text($(this).val());
//});


//TODO: When a paragraph.loremPara is clicked, that particular paragraph element's background color and font color should change to colors of your choice - note that only the ONE paragraph that was clicked should have that happen, not all paragraphs in the class.

$(".loremPara").on("click",(e) =>{

    console.log(e.target);
    $(e.target).css({
        "background-color": "red",
        "color": "blue"
    } )

})

$(".loremPara").on("dblclick",(e) =>{

    console.log(e.target);
    $(e.target).css({
        "background-color": "inherit",
        "color": "inherit"
    } )

})



//TODO: When the div#carSales is clicked, change the location of the user from the worksheet to https://www.lingscars.com/


$("#carSales").on("click",() =>{

    window.location.replace("https://www.lingscars.com/")

})



//TODO: When the paragraph#question-request is hovered over, write a question in a string to appear in the paragraph#question-delivered - this question should disappear when the mouse leaves the area of paragraph#question-request

$("#question-request").on({

    mouseenter: function (e) {
        console.log(e.target);
        $("#question-delivered").html("this is a random question? is it tho ?????");

    },
    mouseleave: function () {
        $("#question-delivered").html("");
    }
});
