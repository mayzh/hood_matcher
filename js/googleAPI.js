// Google Maps Scripts
var geocoder;
var map;
var places;
var markers = [];

$.ajax({
  method: "GET",
  dataType: 'script',
  url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAI0zafi0IKwLK3q6WxE9a5bSnu-UwcaeE&libraries=visualization",
  success: function(data){
    console.log('ajax progress');
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: 40.756929, lng: -73.978885}, //New York
      // Disables the default Google Maps UI components
      disableDefaultUI: true,
      scrollwheel: false,
      draggable: false
    });
    $('#map').append(map);

  } //end of success function
}) //end of ajax call

// adding map without using AJAX
// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 12,
//     center: {lat: 40.756929, lng: -73.978885}, //New York
//     // Disables the default Google Maps UI components
//     disableDefaultUI: true,
//     scrollwheel: false,
//     draggable: false
//   });
//   // create the geocoder
//   geocoder = new google.maps.Geocoder();

//   // document.getElementById('submit').addEventListener('click', function() {
//   //   geocodeAddress(geocoder, map);
//   // })
//   // fetch the existing places (ajax) and put them on the map
//   fetchPlaces();
// } // end of initMap



var mapOptions = {
  // How you would like to style the map.
  // This is where you would paste any style found on Snazzy Maps.
  styles: [{
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
      "lightness": 17
  }]
  }, {
    "featureType": "landscape",
    "elementType": "geometry",
    "stylers": [{
      "color": "#000000"
    }, {
     "lightness": 20
  }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.fill",
    "stylers": [{
      "color": "#000000"
   }, {
    "lightness": 17
  }]
  }, {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 29
    }, {
        "weight": 0.2
    }]
  }, {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 18
    }]
  }, {
    "featureType": "road.local",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 16
    }]
  }, {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 21
    }]
  }, {
    "elementType": "labels.text.stroke",
    "stylers": [{
        "visibility": "on"
    }, {
        "color": "#000000"
    }, {
        "lightness": 16
    }]
  }, {
    "elementType": "labels.text.fill",
    "stylers": [{
        "saturation": 36
    }, {
        "color": "#000000"
    }, {
        "lightness": 40
    }]
  }, {
    "elementType": "labels.icon",
    "stylers": [{
        "visibility": "off"
    }]
  }, {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 19
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.fill",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 20
    }]
  }, {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [{
        "color": "#000000"
    }, {
        "lightness": 17
    }, {
        "weight": 1.2
    }]
  }] // end of styles
}; // end of var mapOptions

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  })
} // end of geocodeAddress

  //var map = null;
  // When the window has finished loading create our google map below
  //google.maps.event.addDomListener(window, 'load', init);
  //google.maps.event.addDomListener(window, 'resize', function() {
  //    map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
  //});

//function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions


    // // Get the HTML DOM element that will contain your map
    // // We are using a div with id="map" seen below in the <body>
    // var mapElement = document.getElementById('map');

    // // Create the Google Map using out element and options defined above
    // map = new google.maps.Map(mapElement, mapOptions);

    // // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    // var image = 'img/map-marker.png';
    // var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    // var beachMarker = new google.maps.Marker({
    //     position: myLatLng,
    //     map: map,
    //     icon: image
    // }); // end beachMarker
//}; // end of funciton init
