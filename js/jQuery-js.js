// $(function () {
//     alert($("#myDiv").html())
// });
//
//
//
// $("#myDiv").html("This is my new div!");
//
//
//
// console.log($("#mySpan").css());


// $(function () {
//     alert($(".list-item").html());
// });




//**********************************PART TWO


// $(".codeup").css("border", "1px solid black");



//**********************************PART TRES


// $("li").css("font-size","20px");
//
// $("li,h1,p").css("font-weight","700");

// *********************************MOUSE EVENTS EXERCISE



let myH1= document.getElementById("myH1");
// myH1.addEventListener("click", ()=>{alert("click")})

$("h1").on("click",function () {
    $(this).css("background-color", "black")
});

$("p").on("dblclick", function (){
    $("p").css("font-size", "18px")
})


$("li").on({
    mouseenter: function () {
    $("li").css("color", "red");
},
    mouseleave: function () {
        $("li").css("color", "black");
    } })