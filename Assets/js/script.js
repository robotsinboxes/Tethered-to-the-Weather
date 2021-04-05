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

var date = moment().format('MM/DD/YYYY');
// var datePlus1 = moment().format('MM/DD/YYYY').add(1, 'd');

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var city = inputBox.value;
    console.log(city);
    getCurrentWeather(city);
})

function getCurrentWeather(city) {
    var currentAPI = 
        `https://api.openweathermap.org/data/2.5/weather?q=`+city+`&appid=e16929192aae7f9bbee02ed77eae9dd6&units=imperial`
    fetch(currentAPI)
        .then(response => {
            var currentData = response.json();
            return currentData;
        })
        .then(currentData => {
            cityName.textContent = " " + currentData.name;
            currentDate.textContent = date;
            currentTemp.textContent = "  " + Math.floor(currentData.main.temp) + " °F";
            currentWind.textContent = "  " + Math.floor(currentData.wind.speed) + " MPH";
            currentHumidity.textContent = "  " + currentData.main.humidity + " %";
            var lat = currentData.coord.lat;
            var lon = currentData.coord.lon;
            forecastWeather(lat, lon);
        })
}

function forecastWeather(lat, lon) {
    var forecastAPI = 
        `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=e16929192aae7f9bbee02ed77eae9dd6`;
    fetch(forecastAPI)
        .then(response => {
            var forecastData = response.json(); 
        })
        .then(forecastData => {
            forecastDate1.textContent = date;
            temp1.textContent = "  so hot";

        })
}