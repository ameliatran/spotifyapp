// Listen for the submit event on the form
// which is triggered when we hit enter
// or press the button
$("#searchForm").submit(function(event) {
    // Prevent page from refreshing
    event.preventDefault();
    // Get the artist from the textbox
    var artistInput = $("#artistInput").val();
    
    // Make our GET request to the Spotify API
});
$.getJSON("https://api.spotify.com/v1/search", 
    {
        q: artistInput,
        type: "artist"
    },
    function (data) {
        console.log(data);
        var artist = data.artists.items[0];
        // Display artist name
        $("#artist").html(artist.name);
        // Display genres
        console.log(artist.genres);
        // Clear out the genres <ul>
        $("#genres").html('');
        // For each genre, add a <li>
        for(var i = 0; i < artist.genres.length; i++) {
            $("#genres").append('<li>' + artist.genres[i] + '</li>');
        }
        // $("#genres").html(artist.genres.join(', '));
        // Display popularity
        $("#popularity").html(artist.popularity);
        // Display image
        $("#icon").attr("src", artist.images[2].url);
        // Display num followers
        $("#numFollowers").html(artist.followers.total);
    });
