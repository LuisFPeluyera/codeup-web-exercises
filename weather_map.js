"use strict"

// ONE CALL weather forecast
const BASE_CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/3.0/onecall?"

const FIVE_DAY_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?"


///////////////////////////////////////////////////// VARIABLES

// assigned to create the weather forecast cards
let html= ``;

// markers to be displayed on the map
let myMarker = ``;

// popup to be displayed on the map
let myPopup = ``;

// variable to center the map on user input
let myMarkerCoordinates = ``;

// variable captures the user input
let  userInput = ``;





// TODO            Variables needed for each img for weather condition

let sunny = "<box-icon name='sun'></box-icon>";

let cloudy = "<box-icon name='cloud' ></box-icon>"





/////////////////////////////////////////////////////// Search function for user input
$("#address-search-button").on("click",function(){

     userInput = $('#address-search-input').val();
    geocode(userInput, DEFAULT_PUBLIC_TOKEN).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(10);

    });


    $.get(FIVE_DAY_WEATHER + `q=${userInput}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data)=>{


        // data logged
        console.log(data);

        // loop to create the weather cards and display them on the DOM
        for (let i = 0; i < data.list.length; i+=8) {


            html +=     `<div class="card text-bg-success mb-3" style="max-width: 18rem;">
                                  <div class="card-header">${data.list[i].dt_txt}</div>
                                    <div class="card-body">
                                        <h5 class="card-title">${data.city.name}</h5>
                                        <p id="condition-img"></p>
                                        <p class="card-text">Desc: ${data.list[i].weather[0].description}</p>
                                        <p class="card-text">Temp: ${data.list[i].main.temp} F&deg</p>
                                        <p class="card-text">Feels like: ${data.list[i].main.feels_like} F&deg</p>
                                        <p class="card-text">${data.list[i].main.temp_min} / ${data.list[i].main.temp_max} F&deg</p>
                                        <p class="card-text">Humidity: ${data.list[i].main.humidity}%</p>
                                    </div>
                                </div>`

            // setInterval(()=>{$("#condition-img").html(cloudy)}, 500);
            $("#insert-weather").html(html);
        }

        //rests html variable
        html = ``;

        //Adds marker to map
        myMarker = new mapboxgl.Marker().setLngLat([data.city.coord.lon, data.city.coord.lat]).addTo(map);

        //creates popup
        myPopup = new mapboxgl.Popup().setHTML(data.city.name);

        //Adds popup to map
        myMarker.setPopup(myPopup);

        //centers the map on the user search input
        myMarkerCoordinates = map.setCenter([data.city.coord.lon, data.city.coord.lat]);

    });// End of get request

});

///////////////////////////////////////////////// Zoom control
$("#zoom-5").on("click",()=>{map.setZoom(5)});
$("#zoom-15").on("click",()=>{map.setZoom(15)});
$("#zoom-20").on("click",()=>{map.setZoom(20)});







