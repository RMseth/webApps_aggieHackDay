app.controller('MapsCtrl', function ($scope, $state, $window, $cordovaGeolocation){

  $scope.goToState = (state)=>{
    $state.go(state);
  };

  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

  }, function(error){
    console.log("Could not get location");
  });
});

// http://www.joshmorony.com/integrating-google-maps-with-an-ionic-application/
