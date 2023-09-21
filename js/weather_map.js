"use strict"
import keys from "./keys.js";

//map created
mapboxgl.accessToken = keys.DEFAULT_PUBLIC_TOKEN
const map = new mapboxgl.Map({
    container: 'map', // container ID
    // style: 'mapbox://styles/mapbox/satellite-v9', // style URL
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [-98.489615, 29.426827], // starting position [lng, lat]
    zoom: 9, // starting zoom
    projection: 'globe'
});

// five days weather forecast
const FIVE_DAY_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?"

///////////////////////////////////////////////////// VARIABLES

// center point for map currently: (San Antonio)
let centerPoint = [-98.4946, 29.4252];

// assigned to create the weather forecast cards
let html= ``;

// variable captures the user input
let  userInput = ``;

// marker created to be displayed on the map
let marker = new mapboxgl.Marker({
    draggable: true
})  //marker initial location set and added to map
    .setLngLat(centerPoint)
    .addTo(map);

//////////////////////////////////////////////// STARTING POINT
// Puerto rico
let startingPoint = [-66.11596009091296, 18.35993013429712]
// EYE of Sahara starting point
// let startingPoint = [-11.39398402540313, 21.14990533074583]

// sets map at starting position currently : (Puerto Rico)
map.setCenter(startingPoint)



// ///////////////////////////////////////// TO CENTER POINT
// Event lister to re-center map on center point when Company Logo clicked
$(".company-logo").on("click",()=>{

    getAndLoop(centerPoint);
});

// Event lister to re-center map on starting point when top right btn (paper plane icon) clicked
$(".toStartingPoint").on("click",()=>{

    getAndLoop(startingPoint);
});

///////////////////////////////////////////////////// FUNCTIONS

// function does a get request, loops the data, runs the nested function "buildForecastCards" and displays the cards in the DOM with event listener
const getAndLoop = (input)=> {
// get request to update weather cards with user input on search button submitting
        $.get(FIVE_DAY_WEATHER + `lat=${input[1]}&lon=${input[0]}&appid=${keys.WEATHER_MAP_KEY}&units=imperial`).done((data)=>{

            map.flyTo({
                center: [input[0],input[1]],
                essential: true,
                zoom: 13

            });

            // console logs data from five day forecast//*****Do Not delete*****//
            console.log(data);

            //this line centers the marker in the user input
            marker.setLngLat(input);



            // loop to create the weather cards and display them on the DOM
            for (let i = 0; i < data.list.length; i+=8) {

                html += buildForecastCard(data, i);

                // sets the weather cards in the DOM
                $("#forecast-weather").html(html);
            }

            //resets html variable
            html = ``;

        });// end of get request
 }

// function to build a single forecast card
const buildForecastCard = (data, i) => {


    let html = `
        
            <div class="card  pt-4 position-relative d-flex justify-content-center align-items-center" style="width: 14rem;">
    
                
                <p class= "d-flex flex-column card-text">${getDayNameByDate(data.list[i].dt)}</p>
                <h5>${data.city.name}</h5>
                <h1>${data.list[i].main.temp.toFixed()}&deg</h1>
                <p>${capitalized(data.list[i].weather[0].description)}</p>
                <div class="d-flex align-items-center justify-content-center">
                    <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"/>
                </div>
                <p>H:${data.list[i].main.temp_min.toFixed()}&deg  L:${data.list[i].main.temp_max.toFixed()}&deg</p>
                
                <div class="details d-flex align-items-center justify-content-between  mt-4">
                    <div class="humidity col d-flex me-5">
                        <box-icon name='water'></box-icon>
                        <p>${data.list[i].main.humidity}%</p>
                    </div>
                    <div class="wind col d-flex">
                        <box-icon name='wind'></box-icon>
                        <p>${data.list[i].wind.speed}mph</p>
                    </div>
                </div>
               
            </div>`;

    return html;
};

// function to get name of day from dt
const getDayNameByDate = (dt) => {
    const newDate =new Date(dt * 1000).toString().substring(4, 15);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = new Date( newDate ).getDay();
    return days[dayIndex];

}

// function to UPDATE CARDS to marker location when dragged and dropped
const onDragUpdateWeather = () =>{

    const lngLat = marker.getLngLat();

    const lngLatArr= Object.values(lngLat);

    // function get and loops
    getAndLoop(lngLatArr);

}// end of function onDragEnd


// function to capitalize first letter of every word
const capitalized = (string) =>{
    let arr = string.split(" ");

    let newArr=  arr.map((x)=>{

        return    x.charAt(0).toUpperCase() + x.slice(1);
    });

        return newArr.join(" ");
};

///////////////////////////////////////////// EVENT LISTENER
// event listener added to marker to run the function onDragUpdateWeather
 marker.on('dragend', onDragUpdateWeather);

 // event listener added to map to update weather cards and drop pin and center map on clicked location
map.on('click', (e)=>{
    console.log(e.lngLat);
    const lngLatArr= Object.values(e.lngLat);
    getAndLoop(lngLatArr);

});

//TODO////////////////////////////////////////////////////DISPLAYED ON LOAD/////////////////////////////////////////////////////////////////////////////////////////

//Get request is displayed on page load, then is overridden by the search input submitting button or by dragging and dropping the marker
 getAndLoop(centerPoint);

/////////////////////////////////////////////////////////EVENT LISTENER FOR SEARCH INPUT////////////////////////////////////////////////////////////////////////////////////////

// user input event listener and  function to do a get request, UPDATE CARDS & fly to and center map on inputted location
$("#search-btn").on("click",function(e){
    e.preventDefault();
     userInput = $('#search-input').val();

     // function to convert user input "location" to lat,lon then passed to function to do get request and create cards to display on DOM
    geocode(userInput, keys.DEFAULT_PUBLIC_TOKEN).then(function(result) {

        //Get request and loops data creates cards and displays them on DOM
        getAndLoop(result);

    });// end of geocode function

    // resets the search input value (empty)
    $('#search-input').val("");

});// end of search button event listener



