"use strict"

// FIVE DAYS weather forecast
const FIVE_DAY_WEATHER = "https://api.openweathermap.org/data/2.5/forecast?"


const weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

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
// let startingPoint =  map.setCenter([-11.39398402540313, 21.14990533074583])

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

// function does a get request, loops the data, runs the nested function buildForecastCards and displays the cards in the DOM with event listener
const getAndLoop = (input)=> {
// get request to update weather cards with user input on search button submitting
        $.get(FIVE_DAY_WEATHER + `lat=${input[1]}&lon=${input[0]}&appid=${WEATHER_MAP_KEY}&units=imperial`).done((data)=>{

            map.flyTo({
                center: [input[0],input[1]],
                essential: true,
                zoom: 13

            });

            // console logs data from five day forecast
            // console.log(data);

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
        
        <div class="card-wrapper">
                <div class="card mb-3 position-relative" style="width: 14rem;">
                  <div class="card-header">${epochConverter(data.list[i].dt)}</div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${data.city.name}</h5>
                        <p class="card-text">${capitalized(data.list[i].weather[0].description)}</p>
                        <div class="d-flex align-items-center justify-content-center">
                        <img src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png"/>
                        </div>
                        <p class="card-text">Temp: ${data.list[i].main.temp.toFixed()} F&deg</p>
                        <p class="card-text">Feels like: ${data.list[i].main.feels_like.toFixed()} F&deg</p>
                        <p class="card-text">${data.list[i].main.temp_min.toFixed()} / ${data.list[i].main.temp_max.toFixed()} F&deg</p>
                        <p class="card-text">Humidity: ${data.list[i].main.humidity}%</p>
                        <box-icon name='wind'></box-icon>
                        <box-icon name='water'></box-icon>
                         
                    </div>
                </div>
        </div>`;
    return html;
}

// function to convert dt to date
const epochConverter = (epoch)=>{

    return  new Date(epoch * 1000).toString().substring(4, 15)
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
    })

        return newArr.join(" ");
}


///////////////////////////////////////////// EVENT LISTENER
// event listener added to marker to run the function onDragUpdateWeather
 marker.on('dragend', onDragUpdateWeather);

////////////////////////////////////////////////////////DISPLAYED ON LOAD/////////////////////////////////////////////////////////////////////////////////////////

//Get request is displayed on page load, then is overridden by the search input submitting button or by dragging and dropping the marker
getAndLoop(centerPoint);

/////////////////////////////////////////////////////////EVENT LISTENER FOR SEARCH INPUT////////////////////////////////////////////////////////////////////////////////////////

// user input event listener and  function to do a get request, UPDATE CARDS & fly to and center map on inputted location
$("#search-btn").on("click",function(e){
    e.preventDefault();
     userInput = $('#search-input').val();

    geocode(userInput, DEFAULT_PUBLIC_TOKEN).then(function(result) {

        //Get request and loops data creates cards and displays them on DOM
        getAndLoop(result);

    });// end of geocode function

});// end of search button event listener




//TODO fix cards to show day name of today and tomorrow

//TODO get text in card to be Capitalized

//TODO fix weather cards layout

//TODO set cards to appear from the top on load

//TODO finish styling







//TODO add the random location weather forecast feature ....MAYBE
//TODO below is a function to make the map fly to random location to maybe add as an extra feature.... MAYBE
//document.getElementById('fly').addEventListener('click', () => {
// // Fly to a random location
// map.flyTo({
// center: [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 100],
// essential: true // this animation is considered essential with respect to prefers-reduced-motion
// });
// });



//TODO NEED TO FIGURE OUT WHY ITS NOT WORKING
// function to assign bg img based on condition
function weatherBg(main) {
    if (main.includes("Snow")) {

        console.log("snow");
        $("body").css({
            "background-image": `url("/img/weather-app/snow.gif")`

        });

    } else if (main.includes("Clear")) {

        console.log("clear");
        $("body").css({
            "background-image": `url("/img/weather-app/clear.gif")`

        });

    } else if (main.includes("Clouds")) {

        console.log("clouds");
        $("body").css({
            "background-image": `url("/img/weather-app/clouds.gif")`

        });

    } else if (main.includes("Fog")) {

        console.log("fog");
        $("body").css({
            "background-image": `url("/img/weather-app/fog.gif")`
        });

    } else if (main.includes("Rain")) {

        console.log("rain");
        $("#address-search-button, .container-fluid.custom-bg").css({
            "background-image": `url("/img/weather-app/rain.gif")`
        });

    } else if (main.includes("Thunderstorm")) {

        console.log("thunderstorm");
        $("body").css({
            "background-image": `url("/img/weather-app/thunderstorm.gif")`

        });
    } else {

        console.log("something is wrong");

    }// end of if statements

}// end of function weatherBG



