// API key e16929192aae7f9bbee02ed77eae9dd6
// set elements to variables for later use
var inputBox = document.querySelector('#inputBox');
var submitBtn = document.querySelector('#btn');
var cityName = document.querySelector('.cityName');
var currentDate = document.querySelector('.currentDate');
var currentTemp = document.querySelector('#currentTemp');
var currentWind = document.querySelector('#currentWind');
var currentHumidity = document.querySelector('#currentHumidity');
var currentUV = document.querySelector('#currentUV');
var temp1 = document.querySelector('.temp1');
var wind1 = document.querySelector('.wind1');
var forecastDate1 = document.querySelector('.forecastDate1');
var forecastDate2 = document.querySelector('.forecastDate2');
var forecastDate3 = document.querySelector('.forecastDate3');
var forecastDate4 = document.querySelector('.forecastDate4');
var forecastDate5 = document.querySelector('.forecastDate5');
var temp1 = document.querySelector('.temp1');
var temp2 = document.querySelector('.temp2');
var temp3 = document.querySelector('.temp3');
var temp4 = document.querySelector('.temp4');
var temp5 = document.querySelector('.temp5');
var wind1 = document.querySelector('.wind1');
var wind2 = document.querySelector('.wind2');
var wind3 = document.querySelector('.wind3');
var wind4 = document.querySelector('.wind4');
var wind5 = document.querySelector('.wind5');
var humidity1 = document.querySelector('.humidity1');
var humidity2 = document.querySelector('.humidity2');
var humidity3 = document.querySelector('.humidity3');
var humidity4 = document.querySelector('.humidity4');
var humidity5 = document.querySelector('.humidity5');
var icon1 = document.querySelector('.weatherIcon1')

var date = moment().format('MM/DD/YYYY');
forecastDate1.textContent = moment().add(1, "d").format('MM/DD/YYYY');
forecastDate2.textContent = moment().add(2, "d").format('MM/DD/YYYY');
forecastDate3.textContent = moment().add(3, "d").format('MM/DD/YYYY');
forecastDate4.textContent = moment().add(4, "d").format('MM/DD/YYYY');
forecastDate5.textContent = moment().add(5, "d").format('MM/DD/YYYY');


submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var city = inputBox.value;
    console.log(city);
    getCoords(city);
})

function getCoords(city) {
    var currentAPI = 
        `https://api.openweathermap.org/data/2.5/weather?q=`+city+`&appid=e16929192aae7f9bbee02ed77eae9dd6&units=imperial`
    fetch(currentAPI)
        .then(response => {
            var cityCoords = response.json();
            return cityCoords;
        })
        .then(cityCoords => {
            cityName.textContent = cityCoords.name;
            var lat = cityCoords.coord.lat;
            var lon = cityCoords.coord.lon;
            getWeather(lat, lon);
        })
}

function getWeather (lat, lon) {
    var weatherAPI = 
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=e16929192aae7f9bbee02ed77eae9dd6&units=imperial`;
    fetch(weatherAPI)
        .then(response => {
            var weather = response.json();
            console.log(weather);
            return weather; 
        })
        .then(weather => {
            currentDate.textContent = date;
            currentTemp.textContent = "  " + Math.floor(weather.daily[0].temp.day) + "°F";
            currentWind.textContent = "  " + Math.floor(weather.daily[0].wind_speed) + " MPH";
            currentHumidity.textContent = "  " + weather.daily[0].humidity + "%";
            currentUV.textContent = "  " + weather.daily[0].uvi;
            temp1.textContent = "  " + Math.floor(weather.daily[1].temp.day) + "°F";
            wind1.textContent = "  " + Math.floor(weather.daily[1].wind_speed) + "MPH";
            humidity1.textContent = "  " + weather.daily[1].humidity + "%";
            temp2.textContent = "  " + Math.floor(weather.daily[2].temp.day) + "°F";
            wind2.textContent = "  " + Math.floor(weather.daily[2].wind_speed) + "MPH";
            humidity2.textContent = "  " + weather.daily[2].humidity + "%";
            temp3.textContent = "  " + Math.floor(weather.daily[3].temp.day) + "°F";
            wind3.textContent = "  " + Math.floor(weather.daily[3].wind_speed) + "MPH";
            humidity3.textContent = "  " + weather.daily[3].humidity + "%";
            temp4.textContent = "  " + Math.floor(weather.daily[4].temp.day) + "°F";
            wind4.textContent = "  " + Math.floor(weather.daily[4].wind_speed) + "MPH";
            humidity4.textContent = "  " + weather.daily[4].humidity + "%";
            temp5.textContent = "  " + Math.floor(weather.daily[5].temp.day) + "°F";
            wind5.textContent = "  " + Math.floor(weather.daily[5].wind_speed) + "MPH";
            humidity5.textContent = "  " + weather.daily[5].humidity + "%";
        })
}



