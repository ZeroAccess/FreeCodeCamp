/**
 * Created by robertsg on 3/2/2016.
 */

var temperature;
var convertedTemp;
var toggle;
var latitude;
var longitude;

$(document).ready(function weather() {
    getLocation();
    getTemp(latitude, longitude);
    convertTemp();
});

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            document.getElementById("showLatitude").innerHTML = latitude.toString();
            document.getElementById("showLongitude").innerHTML = longitude.toString();
        });
    }
}


function getTemp(latitude, longitude) {
    var url = "http://api.openweathermap.org/data/2.5/find?lat=" + latitude + "&lon=" + longitude
        + "&appid=87a7692ad27bc7aadbd5290b17202084&units=imperial";
    $.getJSON(url, function (result) {
        temperature = result.list[0].main.temp;
        weatherType = result.list[0].weather[0].description;
        toggle = true;
        document.getElementById("weatherResult").innerHTML = "The current weather in " + result.list[0].name + " is "
            + weatherType + " with the temperature being ";
        document.getElementById("temp").innerHTML = temperature + ' F';
        changeBackground(weatherType);
    });
}

function changeBackground(weatherType) {
    var image = document.getElementById('weatherIcon');
    var hr = (new Date()).getHours();
    switch(weatherType) {
        case 'clear sky':
            if(hr < 17) {
                image.src='http://openweathermap.org/img/w/01d.png';
            } else {
                image.src='http://openweathermap.org/img/w/01n.png';
            }
            break;
        case 'few clouds':
            if(hr < 17) {
                image.src='http://openweathermap.org/img/w/02d.png';
            } else {
                image.src='http://openweathermap.org/img/w/02n.png';
            }
            break;
        case 'scattered clouds':
            image.src='http://openweathermap.org/img/w/03n.png';
            break;
        case 'broken clouds':
            image.src='http://openweathermap.org/img/w/04n.png';
            break;
        case 'shower rain':
            image.src='http://openweathermap.org/img/w/09n.png';
            break;
        case 'rain':
            if(hr < 17) {
                image.src='http://openweathermap.org/img/w/10d.png';
            } else {
                image.src='http://openweathermap.org/img/w/10n.png';
            }
            break;
        case 'thunderstorm':
            image.src='http://openweathermap.org/img/w/11n.png';
            break;
        case 'snow':
            image.src='http://openweathermap.org/img/w/13n.png';
            break;
        case 'mist':
            image.src='http://openweathermap.org/img/w/50n.png';
            break;
    }
}

function convertTemp(temp) {
    $("button").click(function () {
        if (toggle) {
            convertedTemp = ((temperature - 32) * 5 / 9).toFixed(2);
            document.getElementById("temp").innerHTML = convertedTemp + ' C';
            toggle = false;
        } else {
            document.getElementById("temp").innerHTML = temperature + ' F';
            toggle = true;
        }
    });
}