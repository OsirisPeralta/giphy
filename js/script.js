// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var query = $("input").val();
    console.log(query);
    var url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            $('.gallery').append(
                        "<img src=" + '"' + url + '"' + "/>"
            );
        },
    });
});
