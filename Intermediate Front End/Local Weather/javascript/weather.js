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

            $("button").click(function(){
                if(toggle) {
                    alert("true");
                    toggle = false;
                } else {
                    alert("false");
                    toggle = true;
                }
            });

});


function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
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
    $.getJSON(url,function(result) {
        temperature = result.list[0].main.temp;
        toggle = true;

        document.getElementById("weatherResult").innerHTML = "The current weather in " + result.list[0].name + " is "
            + result.list[0].weather[0].description + " with the temperature being " + temperature;
    });
}

function changeBackground() {

}