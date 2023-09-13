"use strict"

// ONE CALL weather forecast
const BASE_CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/3.0/onecall?"

const FIVE_DAY_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?"



///////////////////////////////////////////////////// VARIABLES


//TODO              ADD MARKER TO MAP
let myMarker;
let myPopup;

//TODO              Set up search input to update forecast cards


let searchLocation = $('#address-search-input').val();







// TODO            Variables needed for each img for weather condition

let sunny = "<box-icon name='sun'></box-icon>";

let cloudy = "<box-icon name='cloud' ></box-icon>"

let myMarkerCoordinates="test";



////////////////////////////////////////////Cards displayed

let html=``;
$.get(FIVE_DAY_WEATHER + `q=las vegas,nv,USA&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data)=>{


    // data logged
    console.log(data);


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

    //Adds marker and popup to map
    myMarker = new mapboxgl.Marker().setLngLat([data.city.coord.lon, data.city.coord.lat]).addTo(map);
    myPopup = new mapboxgl.Popup().setHTML(data.city.name);

    myMarker.setPopup(myPopup);

    myMarkerCoordinates = [data.city.coord.lon, data.city.coord.lat];

});// End of get request

console.log(myMarkerCoordinates);//todo not working need to assign coordinates to the variable of myMarkerCoordinates to be able to get the map to center....

//  MAP

mapboxgl.accessToken = DEFAULT_PUBLIC_TOKEN
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-v9', // style URL
    center: [-86.7744, 36.1622], // starting position [lng, lat]
    zoom: 9, // starting zoom
});








///////////////////////////////////////////////// Zoom control


$("#zoom-5").on("click",()=>{map.setZoom(5)});
$("#zoom-15").on("click",()=>{map.setZoom(15)});
$("#zoom-20").on("click",()=>{map.setZoom(20)});



/////////////////////////////////////////////////////// Search function


$("#address-search-button").on("click",function(){

    let  userInput = $('#address-search-input').val();
    geocode(userInput, DEFAULT_PUBLIC_TOKEN).then(function(result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(10);
    });

});


