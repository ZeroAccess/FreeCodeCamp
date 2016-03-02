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
            document.getElementById("quote-author").innerHTML = '--DeadPool';

        } else {
            document.getElementById("quote").innerHTML = 'Unfortunately your browser doesn\'t support this';
        }
    }
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

$(document).ready(function () {
    getQuote();
    $('#new-quote-btn').on('click', getQuote);

    $('#twitter-btn').on('click', function () {
            openURL('https://twitter.com/intent/tweet?text=' + document.getElementById("quote").innerHTML + '   --DeadPool');
    });

});