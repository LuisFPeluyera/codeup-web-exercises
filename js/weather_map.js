"use strict"

// FIVE DAYS weather forecast
const FIVE_DAY_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?"


///////////////////////////////////////////////////// VARIABLES

// assigned to create the weather forecast cards
let html= ``;

// variable captures the user input
let  userInput = ``;

// var captures weather condition to display bg img depending on condition
let weatherCondition = ``;

// marker created to be displayed on the map
let marker = new mapboxgl.Marker({
    draggable: true
})  //marker initial location set and added to map
    .setLngLat([-98.4946, 29.4252])
    .addTo(map);



///////////////////////////////////////////////////// FUNCTIONS

// function to build a single forecast card
const buildForecastCard = (data, i) => {


    let html = `
        <div id="wrapper-bg" class="card bg-primary mb-3 position-relative" style="width: 14rem;">
          <div class="card-header">${epochConverter(data.list[i].dt)}</div>
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${data.city.name}</h5>
                <p id="condition-img"></p>
                <p class="card-text">${data.list[i].weather[0].description}</p>
                <div class="weather-icon-wrapper d-flex justify-content-center align-items-center align-self-center">
                    <img alt="weather-condition" class="d-block" src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"/>
                </div>
                <p class="card-text">Temp: ${data.list[i].main.temp.toFixed()} F&deg</p>
                <p class="card-text">Feels like: ${data.list[i].main.feels_like.toFixed()} F&deg</p>
                <p class="card-text">${data.list[i].main.temp_min.toFixed()} / ${data.list[i].main.temp_max.toFixed()} F&deg</p>
                <p class="card-text">Humidity: ${data.list[i].main.humidity}%</p>
            </div>
        </div>`;
    return html;
}

// function to convert dt to date
const epochConverter = (epoch)=>{

    return  new Date(epoch * 1000).toString().substring(4, 15)
}

//function to convert Kelvin to Fahrenheit
const kelvinToFahrenheit = (kelvin) => {
    // Celsius is 273 degrees less than Kelvin
    const celsius = kelvin - 273;
    // Calculating Fahrenheit temperature to the nearest integer
    return Math.floor(celsius * (9/5) + 32);
}

// function to UPDATE CARDS to marker location when dragged and dropped
const onDragUpdateWeather = () =>{
    const lngLat = marker.getLngLat();
    console.log(lngLat);

    // this get request is displayed when marker dropped
    $.get(FIVE_DAY_WEATHER + `lat=${lngLat.lat}&lon=${lngLat.lng}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data)=> {
        console.log(data);
        map.flyTo({
            center: lngLat,
            essential: true,
            zoom: 13
        });

        // loop to create the weather cards and display them on the DOM
        for (let i = 0; i < data.list.length; i+=8) {


            html += buildForecastCard(data, i);

            // sets the weather cards in the DOM
            $("#forecast-weather").html(html);

        }// end of for loop

        //resets html variable
        html = ``;



    });// end of get request

}// end of function onDragEnd


// event listener added to marker to run the function onDragUpdateWeather
 marker.on('dragend', onDragUpdateWeather);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// this get request is displayed on page load, then is overridden by the search input submitting button or by dragging and dropping the marker
$.get(FIVE_DAY_WEATHER + `q=san antonio, usa&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data)=>{


    // console logs data from five day forecast
    console.log(data);

    // loop to create the weather cards and display them on the DOM
    for (let i = 0; i < data.list.length; i+=8) {


        html += buildForecastCard(data, i);

        $("#forecast-weather").html(html);

    }// end of for loop

    //rests html variable
    html = ``;

});// End of get request

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// user input event listener and  function to do a get request, UPDATE CARDS & fly to and center map on inputted location
$("#address-search-button").on("click",function(e){
    e.preventDefault();
     userInput = $('#address-search-input').val();
    geocode(userInput, DEFAULT_PUBLIC_TOKEN).then(function(result) {
        console.log(result);
        map.flyTo({
            center: result,
            essential: true,
            zoom: 13

        });

        //this line centers the marker in the user input
         marker.setLngLat(result);



    });// end of geocode function


    // get request to update weather cards with user input on search button submitting
    $.get(FIVE_DAY_WEATHER + `q=${userInput}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data)=>{

        // console logs data from five day forecast
        console.log(data);

        // loop to create the weather cards and display them on the DOM
        for (let i = 0; i < data.list.length; i+=8) {

            html += buildForecastCard(data, i);

            // sets the weather cards in the DOM
            $("#forecast-weather").html(html);
        }

        //resets html variable
        html = ``;

    });// end of get request

});// end of search button event listener




//TODO add feature to go to pin when clicke

//TODO add option for different filters

//TODO make it responsive

//TODO add the random location weather forecast feature

//TODO finish styling

//TODO below is a function to make the map fly to random location
//document.getElementById('fly').addEventListener('click', () => {
// // Fly to a random location
// map.flyTo({
// center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
// essential: true // this animation is considered essential with respect to prefers-reduced-motion
// });
// });

//TODO add a div that displays random info about the random location...maybe
