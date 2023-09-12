"use strict"


let myRestaurants = [
    {
    name: "The Sushi Bar",
    location: "Alice Town,The Bahamas",
    longitude: -79.27778091398791,
    latitude: 25.751838614624884
    },{
    name: "Gauchos",
    location: "262 Av. Sta. Ana, Guaynabo, Bayamón 00969, Puerto Rico",
    longitude: -66.1203216731472,
    latitude: 18.379616576248377,
    },{
    name: "Pounders Hawaiian Grill",
    location: "6276 Old Bethel Rd, Crestview, FL 32536",
    longitude: -86.55921933882139,
    latitude: 30.818083371320746,
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
    myPopups = new mapboxgl.Popup().setHTML(element.name);

    myMarkers.setPopup(myPopups);

});

// TODO                 Using the .map() method instead of a for each loop same result achieved



//     myRestaurants.map((element)=>{
//     myMarkers = new mapboxgl.Marker().setLngLat([element.longitude, element.latitude]).addTo(map);
//     myPopups = new mapboxgl.Popup().setHTML(element.name);
//     myMarkers.setPopup(myPopups);
// })


//TODO  Info windows can contain basic HTML, not just plain text. Add some additional information about your restaurant to the popup such as why it is your favorite, dishes you like, images, etc.

