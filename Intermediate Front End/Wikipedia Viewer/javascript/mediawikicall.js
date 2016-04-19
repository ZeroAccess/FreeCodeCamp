function searchForResults() {
    var input = document.getElementById("searchBar").value;
    var myUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + input + '&limit=10&callback=?';
    document.getElementById("searchBar").value = "";

    $.getJSON(myUrl ,function(data) {
        $.each(data, function(i, item) {
            // console.log(data);
            for(var i = 0; i < data.length; i++) {
                console.log(data[i]);
                for(var j = 0; j < data[i].length; j++) {
                    console.log(data[i][j]);
                }
            }

        });
    });

}

