// app.js
$(function() {
  console.log('hello');
  _500px.init({
    sdk_key: '6560e5f5e9af0270fa1d32040ad8e03402b6f456'
  });

  // If the user clicks the login link, log them in
  $('#login').click(function() {
    _500px.login();
  });


      // When a successful login to 500px is made, they fire off the 'authorization_obtained' event
  _500px.on('authorization_obtained', function() {
    console.log('Successful OAuth login!');
    $('.sign-in-view').hide();
    $('.image-results-view').show();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {

        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        console.log('lat: ', lat);
        console.log('long: ', long);

        // Feel free to adjust the search radius as you see fit
        var radius = '25mi';

        var searchOptions = {
          geo: lat + ',' + long + ',' + radius,
          only: 'Landscapes', // We only want landscape photos
          image_size: 3 // This isn't neccessary but by default the images are thumbnail sized
        };

        _500px.api('/photos/search', searchOptions, function(response) {
          if (response.data.photos.length == 0) {
            alert('No photos found!');
          } else {
            

          }
        });
      });
    }
  });
});




