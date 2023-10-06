 var APIkey = '1f5fe3c07897e528af5a10f8fb5ea2e7';

// when I'm using this app, and search for the weather conditions currently: i am also given the future temperature and element possibilities.

// upon opening the app - the user will need to input their city name.

// TODO: grab the user input, create an event listener on the search button and console.log the value from the input
var searchBtn = document.querySelector("#search")
var cityInput = document.querySelector("#cityName");
var currentWeatherContainer = document.querySelector('#currentWeather')

function userInput() {
    var city = cityInput.value
    runCurrentWeather(city);
    // runForecast(city);
}

function runCurrentWeather(city) {
    var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey + "&units=imperial"

    fetch(URL).then(function (response) {
        return response.json()
    }).then(function (data) {
        currentWeatherContainer.innerHTML = '';

        console.log(data);
        console.log('cityName', data.name);

        console.log('temp', data.main.temp);
        console.log('humidity', data.main.humidity);
        console.log('wind', data.wind.speed);
        console.log('Weather Icon', data.weather[0].icon);
        console.log('date', new Date(data.dt * 1000).toLocaleDateString());

        // create the elements that we will be displaying in the html
        var heading = document.createElement('h2')

        // add the text content to the elements
        heading.textContent = data.name + ' ' + new Date(data.dt * 1000).toLocalDateString()

        // append the elements to the current weather container
        currentWeatherContainer.append(heading)
    });
}

function runForecast(city) {
    var URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey + "&units=imperial"

    fetch(URL).then(function (response) {
        return response.json()
    }).then(function (data) {
        runForecastContainer.innerHTML = ''; 

        console.log(data);
        console.log('cityName', data.name);
        
// Need to know how to change this for the forecast 
        // console.log('temp', data.main.temp);
        // console.log('humidity', data.main.humidity);
        // console.log('wind', data.wind.speed);
        // console.log('Weather Icon', data.weather[0].icon);
        // console.log('date', new Date(data.dt * 1000).toLocaleDateString());
    });
}

searchBtn.addEventListener('click', userInput)