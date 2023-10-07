var APIkey = '1f5fe3c07897e528af5a10f8fb5ea2e7';

// when I'm using this app, and search for the weather conditions currently: i am also given the future temperature and element possibilities.

// upon opening the app - the user will need to input their city name.

// TODO: grab the user input, create an event listener on the search button and console.log the value from the input
var searchBtn = document.querySelector("#search")
var cityInput = document.querySelector("#cityName");
var currentWeatherContainer = document.querySelector('#currentWeather')
var forecastContainer = document.querySelector('#forecast')

function userInput() {
    var city = cityInput.value
    runCurrentWeather(city);
    runForecast(city);
}

function runCurrentWeather(city) {
    var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey + "&units=imperial"

    fetch(URL).then(function (response) {
        return response.json()
    }).then(function (data) {
        currentWeatherContainer.innerHTML = '';

        // console.log(data);
        // console.log('cityName', data.name);

        // console.log('temp', data.main.temp);
        // console.log('humidity', data.main.humidity);
        // console.log('wind', data.wind.speed);
        // console.log('Weather Icon', data.weather[0].icon);
        // console.log('date', new Date(data.dt * 1000).toLocaleDateString());

        // create the elements that we will be displaying in the html
        var heading = document.createElement('h2')
        var temp = document.createElement('p')
        var humidity = document.createElement('p')
        var wind = document.createElement('p')



        // add the text content to the elements
        heading.textContent = data.name + ' ' + new Date(data.dt * 1000).toLocaleDateString()
        temp.textContent = 'Temp: ' + data.main.temp + '°';
        wind.textContent = 'Wind: ' + data.wind.speed + 'mph';
        humidity.textContent = 'Humidity: ' + data.main.humidity + '%';



        // append the elements to the current weather container
        currentWeatherContainer.append(heading, temp, humidity, wind)
    });
}

function runForecast(city) {
    var URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey + "&units=imperial"

    fetch(URL).then(function (response) {
        return response.json()
    }).then(function (data) {

        var forecastArray = [data.list[4], data.list[12], data.list[20], data.list[28], data.list[36]]
        console.log(forecastArray);

        for (let i = 0; i < forecastArray.length; i++) {
            // create the elements that we will use for oue forecast boxes
            var div = document.createElement('div')
            var date = document.createElement('h3')
            var temp = document.createElement('p')


            // add the text content to the elements
            temp.textContent = forecastArray[i].main.temp_max
            date.textContent = new Date(forecastArray[i].dt_txt).toLocaleDateString()

            // append the elements to the forecastContainer
            div.append(temp, date)
            forecastContainer.append(div)

        }

        // Need to know how to change this for the forecast 
        // console.log('temp', data.main.temp);
        // console.log('humidity', data.main.humidity);
        // console.log('wind', data.wind.speed);
        // console.log('Weather Icon', data.weather[0].icon);
        // console.log('date', new Date(data.dt * 1000).toLocaleDateString());
    });
}

searchBtn.addEventListener('click', userInput)