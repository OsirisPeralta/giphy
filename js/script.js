// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    var query = $("#search-term").val();
    console.log(query);
    var url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            $('.gallery').append(

                        "<a href='mailto:anyone@gmail.com' rel = 'EMAIL'>" + "<img src=" + response.data[0].images.original.url + "/>" + "</a>"

            );
        },
    });
});

$("#search-button2").click(function(){
    var query = $("#search-term2").val();
    console.log(query);
    var url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&rating=pg&api_key=dc6zaTOxFJmzC";
    $.ajax({
        url: url,
        method: "GET",
        success: function(response){
            $('body').css("background-image", "url(" + response.data[0].images.original.url + ")");
        },
    });
});

$("img").click(function(){
    $("img").css("width","500%")
});