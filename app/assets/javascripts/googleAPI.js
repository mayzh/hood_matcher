// Google Maps Scripts
var map;
var heatmap;
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
      scrollwheel: false
      // draggable: false // not sure if we'll want this or not
    });
    $('#map').append(map);

  } //end of success function
}) //end of ajax call


$('#q1').click(function(e) {
  // e.preventDefault; // dont think we need this
  var result;
  //switch case to assign a neighborhood and multiper to be added to heatmap depending on which answer is selected. So, look at nyc_data_psuedo_code and pick one neighborhood and corresponding multiplier for each answer (see the questions in questions.html). Let's not do a bunch of neighborhoods for each answer at this time. just one hood per answer.
  switch($('input[name=q1]:checked').attr('id')){
    case 'q1a':
      result = upperEastSide;
      multiplier = 10;
      break;
    case 'q1b':
      result = harlem;
      multiplier = 5;
      break;
    case 'q1c':
      result = upperWestSide;
      multiplier = 10;
      break;
    case 'q1d':
      result = chelsea;
      multiplier = 4;
      break;
    case 'q1e':
      result = eastVillage;
      multiplier = 4;
      break;
    case 'q1f':
      result = upperEastSide;
      multiplier = 7;
      break;
  }
  console.log('the result is ' + result + ' with a multiplier of ' + multiplier);

  //ADD IN THE API KEY LOCALLY - NOT IN GITHUB VERSION //
  $.ajax({
    method: "GET",
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=' + result + '&key=AIzaSyAI0zafi0IKwLK3q6WxE9a5bSnu-UwcaeE',
    success: function(data){
      var lati = data['results'][0]['geometry']['location']['lat']; //gets Longitude
      var lng = data['results'][0]['geometry']['location']['lng']; // gets Latitude
      var getPoints = function() {
        //do loop adds the heatmap dot over and over to same place up to the value of the multipler assigned above
        var count = 0;
        do {
          count++;
          return [
            new google.maps.LatLng(lati, lng)
          ]
        } while (count <= multiplier);
      } //end of getPoints function
      heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });
      $('#map').append(map);
    } //end of success function
  }) //end of ajax call
})//end of click function q1


// NUMBER 5 WHAT IS YOUR FAV CUISINE?????


$('#q5').click(function(e){
  var result;
//switch case to assign a neighborhood and multiper to be added to heatmap depending on which answer is selected.
  switch($('input[name=q5]:checked').attr('id')){
    case 'q5a':
      result = upperEastSide;
      multiplier = 10;
      break;
    case 'q5b':
      result = chinatown;
      multiplier = 10;
      break;
    case 'q5c':
      result = midtownWest;
      multiplier = 10;
      break;
    case 'q5d':
      result = greenwichVillage;
      multiplier = 10;
      break;
  }
  console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
 $.ajax({
    method: "GET",
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=' + result + '&key=AIzaSyAI0zafi0IKwLK3q6WxE9a5bSnu-UwcaeE',
    success: function(data){
      var lati = data['results'][0]['geometry']['location']['lat']; //gets Longitude
      var lng = data['results'][0]['geometry']['location']['lng']; // gets Latitude
      var getPoints = function() {
        //do loop adds the heatmap dot over and over to same place up to the value of the multipler assigned above
        var count = 0;
        do {
          count++;
          return [
            new google.maps.LatLng(lati, lng)
          ]
        } while (count <= multiplier);
      } //end of getPoints function
      heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });
      $('#map').append(map);
    }
  })
})



// NUMBER 6 WHAT'S YOUR FAVORITE SPIRIT ANIMAL?

$('#q6').click(function(e) {
  var result;
  //switch case to assign a neighborhood and multiper to be added to heatmap depending on which answer is selected. So, look at nyc_data_psuedo_code and pick one neighborhood and corresponding multiplier for each answer (see the questions in questions.html). Let's not do a bunch of neighborhoods for each answer at this time. just one hood per answer.
  switch($('input[name=q6]:checked').attr('id')){
    case 'q6a':
      result = morningsideHeights;
      multiplier = 10;
      break;
    case 'q6b':
      result = upperEastSide;
      multiplier = 10;
      break;
    case 'q6c':
      result = upperWestSide;
      multiplier = 10;
      break;
    case 'q6d':
      result = greenwichVillage;
      multiplier = 10;
      break;
    case 'q6e':
      result = lowerEastSide;
      multiplier = 10;
      break;
    case 'q6f':
      result = eastVillage;
      multiplier = 10;
      break;
  }
  console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  }

$.ajax({
    method: "GET",
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=' + result + '&key=AIzaSyAI0zafi0IKwLK3q6WxE9a5bSnu-UwcaeE',
    success: function(data){
      var lati = data['results'][0]['geometry']['location']['lat']; //gets Longitude
      var lng = data['results'][0]['geometry']['location']['lng']; // gets Latitude
      var getPoints = function() {
        //do loop adds the heatmap dot over and over to same place up to the value of the multipler assigned above
        var count = 0;
        do {
          count++;
          return [
            new google.maps.LatLng(lati, lng)
          ]
        } while (count <= multiplier);
      } //end of getPoints function
      heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });
      $('#map').append(map);
    } //end of success function
  }) //end of ajax call
//end of click function q6


// NUMBER 7 FAVORITE SONG ON JUKEBOX?

$('#q7').click(function(e){
  var result;
  switch($('input[name=q7]:checked').attr('id')){
    case 'q7a':
      result = eastHarlem
      multiplier = 10;
      break;
    case 'q7b':
      result = upperEastSide;
      multiplier = 10;
      break;
    case 'q7c':
      result = upperWestSide;
      multiplier = 5;
      break;
    case 'q7d':
      result = midtownWest;
      multiplier = 10;
      break;
    case 'q7e':
      result = murrayHill;
      multiplier = 10;
      break;
    case 'q7f':
      result = gramercy;
      multiplier = 10;
      break;
    case 'q7g':
      result = lowerEastSide;
      multiplier = 10;
      break;
    case 'q7h':
      result = chinatown;
      multiplier = 10;
      break;
    case 'q7i':
      result = morningsideHeights;
      multiplier = 10;
      break;
    case 'q7j':
      result = financialDistrict;
      multiplier = 10;
      break;
  }
  console.log('the result is ' + result + ' with a multiplier of ' + multiplier);

$.ajax({
    method: "GET",
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=' + result + '&key=AIzaSyAI0zafi0IKwLK3q6WxE9a5bSnu-UwcaeE',
    success: function(data){
      var lati = data['results'][0]['geometry']['location']['lat']; //gets Longitude
      var lng = data['results'][0]['geometry']['location']['lng']; // gets Latitude
      var getPoints = function() {
        //do loop adds the heatmap dot over and over to same place up to the value of the multipler assigned above
        var count = 0;
        do {
          count++;
          return [
            new google.maps.LatLng(lati, lng)
          ]
        } while (count <= multiplier);
      } //end of getPoints function
      heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });
      $('#map').append(map);
    } //end of success function
  }) //end of ajax call
})//end of click function q7

userBank (array) = key value pairs (neighborhoods)
all values start at 0




