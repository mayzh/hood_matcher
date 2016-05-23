
  var marker;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: {lat: 40.7128, lng: -74.0059}
    });
  function addMarker(lat, long){  //adds a marker to the location specified by lat and long
    marker = new google.maps.Marker({
       map: map,
       draggable: true,
       animation: google.maps.Animation.DROP,
       position: {lat: lat, lng: long}
    });
  }

  var inwood = '187 Sherman Ave, New York, NY 10034';
  var financialDist = '12-18 Dutch St, New York, NY 10038';
  var tribeca = '107 W Broadway, New York, NY 10013';
  var chinaTown = '159 Canal St, New York, NY 10013';
  var soho = '75 Wooster St, New York, NY 10012';
  var lowerEast = '268 E Broadway, New York, NY 10002';
  var greenwich = '55 W 8th St, New York, NY 10011';
  var eastVillage = '153 Avenue A, New York, NY 10009';
  var chelsea = '367 W 26th St, New York, NY 10001';
  var gramercy = '225 3rd Ave, New York, NY 10003';
  var murrayHill = '528 3rd Ave, New York, NY 10016';
  var midtownEast = '249 E 50th St, New York, NY 10022';
  var midtownWest = '456 W 45th St, New York, NY 10036';
  var upperWestSide = '158 W 81st St, New York, NY 10024';
  var upperEastSide = '247 E 81st St, New York, NY 10028';
  var eastHarlem = '164 E 116th St, New York, NY 10029';
  var harlem = '2361 Adam Clayton Powell Jr Blvd, New York, NY 10030';
  var morningSideHts = '420 W 118th St, New York, NY 10027';


  $.ajax({
    method: 'GET',
    url:'https://maps.googleapis.com/maps/api/geocode/json?address='+ lowerEast +'&key=YOUR_API_KEY',
    success: function(data){
      var lati = data['results'][0]['geometry']['location']['lat']; //gets Longitude
      var lng = data['results'][0]['geometry']['location']['lng']; // gets Latitude
      addMarker(lati, lng)
    }
  })


  }







