function getQuote() {
    var xmlhttp = new XMLHttpRequest();
    var url = "http://api.icndb.com/jokes/random?firstName=Dead&lastName=Pool";

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myFunction(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(response) {
        var arr = JSON.parse(response);

        if (arr.type === 'success') {
            document.getElementById("quote").innerHTML = arr.value.joke;
        } else {
            document.getElementById("quote").innerHTML = 'Unfortunately your browser doesn\'t support this';
        }
    }
}

$(document).ready(function () {
    getQuote();
});