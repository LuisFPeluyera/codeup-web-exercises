"use strict"



let myRestaurants = [
    {
    name: "The Sushi Bar",
    location: "Alice Town,The Bahamas",
    longitude: -79.27778091398791,
    latitude: 25.751838614624884,
    favoriteDish: "Spicy tuna roll"

    },{
    name: "Gauchos",
    location: "262 Av. Sta. Ana, Guaynabo, Bayamón 00969, Puerto Rico",
    longitude: -66.1203216731472,
    latitude: 18.379616576248377,
    favoriteDish: "Churrasco steak"

    },{
    name: "Pounders Hawaiian Grill",
    location: "6276 Old Bethel Rd, Crestview, FL 32536",
    longitude: -86.55921933882139,
    latitude: 30.818083371320746,
    favoriteDish: "Teriyaki Steak"

    }
]

//TODO             STEPS ONE - SEVEN OF THE EXERCISE **********************************

// geocode(myRestaurants[1].location, DEFAULT_PUBLIC_TOKEN).then(function(result) {
//     console.log(result);
//     map.setCenter(result);
//     map.setZoom(10);
// });
//
//
//
//
// let marker = new mapboxgl.Marker().setLngLat([myRestaurants[1].longitude, myRestaurants[1].latitude]).addTo(map);
// let popup = new mapboxgl.Popup().setHTML(myRestaurants[1].name)
// marker.setPopup(popup)

//TODO               STEPS EIGHT - *****************************************************


let myMarkers = "";
let myPopups= "";
myRestaurants.forEach(function (element, index,array){

    myMarkers = new mapboxgl.Marker().setLngLat([element.longitude, element.latitude]).addTo(map);
    myPopups = new mapboxgl.Popup().setHTML(element.name + " <br> " + "Favorite dish: " + element.favoriteDish);

    myMarkers.setPopup(myPopups);

});

// TODO                 Using the .map() method instead of a for each loop same result achieved



//     myRestaurants.map((element)=>{
//     myMarkers = new mapboxgl.Marker().setLngLat([element.longitude, element.latitude]).addTo(map);
//     myPopups = new mapboxgl.Popup().setHTML(element.name);
//     myMarkers.setPopup(myPopups);
// })



//TODO  Add a select input that allows the user to change the zoom level to 5, 15, or 20.

    $("#zoom-5").on("click",()=>{map.setZoom(5)});
    $("#zoom-15").on("click",()=>{map.setZoom(15)});
    $("#zoom-20").on("click",()=>{map.setZoom(20)});


//TODO Add a text box for the user to enter an address that will use geocoding to center the map and place a marker on that location.



$("#address-search-button").on("click",function(){

     let  userInput = $('#address-search-input').val();
    geocode(userInput, DEFAULT_PUBLIC_TOKEN).then(function(result) {
           console.log(result);
           map.setCenter(result);
           map.setZoom(12);
       });

   });


// TODO Add a button that will hide all markers.

$("#hide-markers").on("click",()=>{
    $(".mapboxgl-marker").toggleClass("invisible");
});


//TODO  Using this marker animation example as a starting point, animate a marker to bounce up and down. Alter the animation to stop after two seconds. Make the amount of bounce animation scale according to zoom level.



