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

var userResult = {
  inwood: 0,
  financialDist: 0,
  tribeca: 0,
  chinaTown: 0,
  soho: 0,
  lowerEast: 0,
  greenwich: 0,
  eastVillage: 0,
  chelsea: 0,
  greenwich: 0,
  murrayHill: 0,
  midtownEast: 0,
  midtownWest: 0,
  upperWestSide: 0,
  upperEastSide: 0,
  eastHarlem: 0,
  harlem: 0,
  morningSideHts: 0
}

//function to add heatmap results based on answers to questions
var heatmapAJAX = function(result, multiplier) {
  $.ajax({
    method: "GET",
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=' + result + '&key=AIzaSyB6wb28215IffsxuOhc6WR0x913OYQU2I8',
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
  //add result to the userResult object bank
  for ( var hood in userResult ) {
    if ( hood == result ) {
      // console.log(hood);
      var points = userResult[hood];
      points = points + multiplier;
      userResult[hood] = points;
      // console.log(points);
      console.log(hood + ' now has ' + points + ' points.')
      break;
    }
  }
} //end of heatmapAJAX

//function to add initial map to the page
$.ajax({
  method: "GET",
  dataType: 'script',
  url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB6wb28215IffsxuOhc6WR0x913OYQU2I8&libraries=visualization",
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

//**********QUESTION 1***********
$("input[name*='q1']").click(function(e) {
  // e.preventDefault; // dont think we need this
  var result;
  //switch case to assign a neighborhood and multiper to be added to heatmap depending on which answer is selected.
  switch($('input[name=q1]:checked').attr('id')){
    case 'q1a':
      result = 'upperEastSide';
      multiplier = 10;
      break;
    case 'q1b':
      result = 'harlem';
      multiplier = 5;
      break;
    case 'q1c':
      result = 'upperWestSide';
      multiplier = 10;
      break;
    case 'q1d':
      result = 'chelsea';
      multiplier = 4;
      break;
    case 'q1e':
      result = 'eastVillage';
      multiplier = 4;
      break;
    case 'q1f':
      result = 'upperEastSide';
      multiplier = 7;
      break;
  }
  heatmapAJAX(result, multiplier);
})//end of click function q1 **************************

//**********QUESTION 2***********
$("input[name*='q2']").click(function(e) {
  // e.preventDefault; // dont think we need this
  var result;
  switch($('input[name=q2]:checked').attr('id')){
    case 'q2a':
      result = 'harlem';
      multiplier = 10;
      break;
    case 'q2b':
      result = 'chinaTown';
      multiplier = 10;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  heatmapAJAX(result, multiplier);
})//end of click function q2 **************************

//**********QUESTION 3***********
$("input[name*='q3']").click(function(e) {
  // e.preventDefault; // dont think we need this
  var result;
  switch($('input[name=q3]:checked').attr('id')){
    case 'q3a':
      result = 'upperWestSide';
      multiplier = 10;
      break;
    case 'q3b':
      result = 'tribeca';
      multiplier = 10;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  heatmapAJAX(result, multiplier);
})//end of click function q3 **************************

//**********QUESTION 4***********
$("input[name*='q4']").click(function(e) {
  // e.preventDefault; // dont think we need this
  var result;
  switch($('input[name=q4]:checked').attr('id')){
    case 'q4a':
      result = 'upperWestSide';
      multiplier = 10;
      break;
    case 'q4b':
      result = 'tribeca';
      multiplier = 10;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);

  heatmapAJAX(result, multiplier);
})//end of click function q4 **************************

// NUMBER 5 WHAT IS YOUR FAV CUISINE?????
$("input[name*='q5']").click(function(e){
  var result;
//switch case to assign a neighborhood and multiper to be added to heatmap depending on which answer is selected.
  switch($('input[name=q5]:checked').attr('id')){
    case 'q5a':
      result = 'upperEastSide';
      multiplier = 10;
      break;
    case 'q5b':
      result = 'chinaTown';
      multiplier = 10;
      break;
    case 'q5c':
      result = 'midtownWest';
      multiplier = 10;
      break;
    case 'q5d':
      result = 'greenwich';
      multiplier = 10;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  heatmapAJAX(result, multiplier);
})//end of click function q5 **************************

// NUMBER 6 WHO'S YOUR FAVORITE SPIRIT ANIMAL?
$("input[name*='q6']").click(function(e) {
  var result;
  switch($('input[name=q6]:checked').attr('id')){
    case 'q6a':
      result = 'morningSideHts';
      multiplier = 10;
      break;
    case 'q6b':
      result = 'upperEastSide';
      multiplier = 10;
      break;
    case 'q6c':
      result = 'upperWestSide';
      multiplier = 10;
      break;
    case 'q6d':
      result = 'greenwich';
      multiplier = 10;
      break;
    case 'q6e':
      result = 'lowerEast';
      multiplier = 10;
      break;
    case 'q6f':
      result = 'eastVillage';
      multiplier = 10;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  heatmapAJAX(result, multiplier);
})//end of click function q6 **************************

// NUMBER 7 FAVORITE SONG ON JUKEBOX?
$("input[name*='q7']").click(function(e){
  var result;
  switch($('input[name=q7]:checked').attr('id')){
    case 'q7a':
      result = 'eastHarlem'
      multiplier = 10;
      break;
    case 'q7b':
      result = 'upperEastSide';
      multiplier = 10;
      break;
    case 'q7c':
      result = 'upperWestSide';
      multiplier = 5;
      break;
    case 'q7d':
      result = 'midtownWest';
      multiplier = 10;
      break;
    case 'q7e':
      result = 'murrayHill';
      multiplier = 10;
      break;
    case 'q7f':
      result = 'gramercy';
      multiplier = 10;
      break;
    case 'q7g':
      result = 'lowerEast';
      multiplier = 10;
      break;
    case 'q7h':
      result = 'chinaTown';
      multiplier = 10;
      break;
    case 'q7i':
      result = 'morningSideHts';
      multiplier = 10;
      break;
    case 'q7j':
      result = 'financialDist';
      multiplier = 10;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  heatmapAJAX(result, multiplier);
})//end of click function q7 **************************

// **************** QUESTION 8
$("input[name*='q8']").click(function(e) {
  var result;

  switch($('input[name=q8]:checked').attr('id')){
    case 'q8a':
      result = 'upperWestSide';
      multiplier = 10;
      break;
    case 'q8b':
      result = 'upperEastSide';
      multiplier = 10;
      break;
    case 'q8c':
      result = 'eastVillage';
      multiplier = 10;
      break;
    case 'q8d':
      result = 'lowerEast';
      multiplier = 10;
      break;
    case 'q8e':
      result = 'tribeca';
      multiplier = 10;
      break;
    case 'q8f':
      result = 'financialDist';
      multiplier = 10;
      break;
    case 'q8g':
      result = 'murrayHill';
      multiplier = 10;
      break;
    case 'q8h':
      result = 'eastHarlem';
      multiplier = 10;
      break;
    case 'q8i':
      result = 'gramercy';
      multiplier = 10;
      break;
    case 'q8j':
      result = 'morningSideHts';
      multiplier = 10;
      break;
    case 'q8k':
      result = 'midtownWest';
      multiplier = 10;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);

   heatmapAJAX(result, multiplier);
})//end of click function q8 *********************

//********************* QUESTION 9
$("input[name*='q9']").click(function(e) {

  var result;

  switch($('input[name=q9]:checked').attr('id')){
    case 'q9a':
      result = 'inwood';
      multiplier = 10;
      break;
    case 'q9b':
      result = 'morningSideHts';
      multiplier = 10;
      break;
    case 'q9c':
      result = 'midtownEast';
      multiplier = 10;
      break;

  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  heatmapAJAX(result, multiplier);
})//end of click function q9************************

//********************* QUESTION 10
$("input[name='q10']").click(function(e) {

  var result;

  switch($('input[name=q10]:checked').attr('id')){
    case 'q10a':
      result = 'eastHarlem';
      multiplier = 10;
      break;
    case 'q10b':
      result = 'murrayHill';
      multiplier = 5;
      break;
    case 'q10c':
      result = 'midtownWest';
      multiplier = 10;
      break;

  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);

  heatmapAJAX(result, multiplier);
  //go thru userResult to find the neighborhood with highest number of heat dots:
  var hoodWithMostDots = Object.keys(userResult).reduce(function(a, b){ return userResult[a] > userResult[b] ? a : b });
// var hoodWithMostDots = userResult.slice(0).sort(function(x, y) { return y.number - x.number })[0];
  console.log('the hottest hood for you is ' + hoodWithMostDots);
  // index = userResult.indexOf(hoodWithMostDots);
  // console.log('the index of your hood is ' + index);
})//end of click function q10************************


