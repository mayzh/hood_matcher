// Google Maps Scripts
console.log(gon_user);
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
var chelsea = 'chelsea, new york ny';
var gramercy = '225 3rd Ave, New York, NY 10003';
var murrayHill = '528 3rd Ave, New York, NY 10016';
var midtownEast = '249 E 50th St, New York, NY 10022';
var midtownWest = '456 W 45th St, New York, NY 10036';
var upperWestSide = '158 W 81st St, New York, NY 10024';
var upperEastSide = '247 E 81st St, New York, NY 10028';
var eastHarlem = '164 E 116th St, New York, NY 10029';
var harlem = '2361 Adam Clayton Powell Jr Blvd, New York, NY 10030';
var morningSideHts = '420 W 118th St, New York, NY 10027';

var results = {};
var userResults = {
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
var heatmapAJAX = function() {
  //iterates through results object to add dots for multiple hoods per response
  for ( var hoodName in results ) {
    result = hoodName;
    // console.log('result is ' + result)
    // console.log('hoodname is ' + hoodName);
    multiplier = (results[hoodName] / 5);
    // console.log('multiplier is ' + multiplier);
    $.ajax({
    method: "GET",
    url:'https://maps.googleapis.com/maps/api/geocode/json?address=' + result + '&key=AIzaSyB6wb28215IffsxuOhc6WR0x913OYQU2I8',
    success: function(data){
      //gets Longitude
      var lati = data['results'][0]['geometry']['location']['lat'];
      // gets Latitude
      var lng = data['results'][0]['geometry']['location']['lng'];
      var getPoints = function() {
        //adds the heatmap dot with weight based on the value of the multipler assigned by response
        return [
          {location: new google.maps.LatLng(lati, lng), weight: multiplier},
        ]
      } //end of getPoints function
      heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map,
          radius: 20
        });
      $('#map').append(map);
    } //end of success function
  }) //end of ajax call
  //add result to the userResults object bank
  for ( var hood in userResults ) {
    if ( hood == result ) {
      // console.log(hood);
      var points = userResults[hood];
      points = points + multiplier;
      userResults[hood] = points;
      // console.log(points);
      console.log(hood + ' now has ' + points + ' points.')
      break;
    }
  }
  } // end of hoodname for loop
} //end of heatmapAJAX

//function to add initial map to the page
$.ajax({
  method: "GET",
  dataType: 'script',
  url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB6wb28215IffsxuOhc6WR0x913OYQU2I8&libraries=visualization",
  success: function(data){
    // console.log('ajax progress');
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

  //switch case to assign a neighborhood and multiper to be added to heatmap depending on which answer is selected.
  switch($('input[name=q1]:checked').attr('id')){
    case 'q1a':
      results.upperEastSide = 5;
      results.upperWestSide = 4.5;
      // results.soho = 2.5;
      // results.eastVillage = 2.5;
      results.midtownWest = 2;
      results.chelsea = 2;
      results.inwood = 1.5;
      results.murrayHill = 1.5;
      results.gramercy = 1.5;
      results.morningSideHts = 1;
      results.midtownEast = 1;
      results.lowerEast = 0.5;
      results.harlem = 0.5;
      break;
    case 'q1b':
      results.upperEastSide = 5;
      results.upperWestSide = 4;
      // results.harlem = 2.5;
      // results.eastVillage = 2.5;
      results.soho = 2;
      results.chelsea = 2;
      results.midtownWest = 2;
      results.midtownEast = 2;
      results.murrayHill = 1.5;
      results.financialDist = 1.5;
      results.lowerEast = 1.5;
      results.inwood = 1.5;
      results.tribeca = 1;
      results.gramercy = 1;
      results.eastHarlem = 1;
      results.chinaTown = 0.5;
      break;
    case 'q1c':
      results.upperWestSide = 5;
      results.upperEastSide = 4.5;
      results.chelsea = 3;
      // results.soho = 2.5;
      // results.midtownWest = 2.5;
      results.midtownEast = 2;
      results.inwood = 2;
      results.eastVillage = 2;
      results.murrayHill = 1.5;
      results.financialDist = 1.5;
      results.gramercy = 1;
      results.harlem = 1;
      results.tribeca = 1;
      results.morningSideHts = 0.5;
      results.chinaTown = 0.5;
      results.lowerEast = 0.5;
      break;
    case 'q1d':
      results.upperWestSide = 5;
      results.upperEastSide = 5;
      results.chelsea = 2;
      results.midtownWest = 2;
      results.eastVillage = 2;
      results.financialDist = 2;
      results.soho = 2;
      results.murrayHill = 1.5;
      results.tribeca = 1.5;
      results.harlem = 3;
      results.midtownEast = 1.5;
      results.gramercy = 1.5;
      results.lowerEast = 1.5;
      results.inwood = 1.5;
      results.morningSideHts = 1;
      results.eastHarlem = 0.5;
      break;
    case 'q1e':
      results.upperEastSide = 5;
      results.upperWestSide = 4;
      results.eastVillage = 2;
      results.harlem = 2;
      results.chelsea = 1.5;
      results.inwood = 1.5;
      results.midtownEast = 1;
      results.financialDist = 1;
      results.midtownWest = 1;
      results.soho = 1;
      results.tribeca = 1;
      results.chinaTown = 0.5;
      results.eastHarlem = 0.5;
      results.lowerEast = 0.5;
      results.morningSideHts = 0.5;
      break;
    case 'q1f':
      results.upperEastSide = 3.5;
      results.upperWestSide = 3.5;
      results.eastVillage = 2;
      results.chelsea = 2;
      results.soho = 1.5;
      results.midtownWest = 1;
      results.midtownEast = 1;
      results.harlem = 1;
      results.chinaTown = 1;
      results.financialDist = 1;
      results.gramercy = 1;
      results.inwood = 0.5;
      results.murrayHill = 0.5;
      results.eastHarlem = 0.5;
      results.tribeca = 0.5;
      results.morningSideHts = 0.5;
      break;
  }
  heatmapAJAX();
})//end of click function q1 **************************

//**********QUESTION 2***********
$("input[name*='q2']").click(function(e) {
  // e.preventDefault; // dont think we need this
  var result;
  switch($('input[name=q2]:checked').attr('id')){
    case 'q2a':
      results.harlem = 5;
      results.upperEastSide = 5;
      results.upperWestSide = 3.5;
      results.financialDist = 3.5;
      results.eastVillage = 3.5;
      results.morningSideHts = 3.5;
      results.inwood = 3.5;
      results.midtownWest = 3.5;
      // results.greenwich = 2.5;
      // results.eastHarlem = 2.5;
      results.gramercy = 1;
      results.chelsea = 1;
      results.murrayHill = 1;
      results.lowerEast = 1;
      results.tribeca = 1;
      results.upperEastSide = 1;
      break;
    case 'q2b':
      results.chinaTown = 5;
      results.soho = 5;
      results.midtownEast = 4;
      results.tribeca = 4;
      results.lowerEast = 4;
      results.murrayHill = 4;
      results.chelsea = 4;
      results.gramercy = 4;
      // results.eastHarlem = 2.5;
      // results.greenwich = 2.5;
      results.midtownWest = 1.5;
      results.inwood = 1.5;
      results.morningSideHts = 1.5;
      results.eastVillage = 1.5;
      results.financialDist = 1.5;
      results.upperWestSide = 1.5;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  heatmapAJAX();
})//end of click function q2 **************************

//**********QUESTION 3***********
$("input[name*='q3']").click(function(e) {
  // e.preventDefault; // dont think we need this
  var result;
  switch($('input[name=q3]:checked').attr('id')){
    case 'q3a':
      results.upperWestSide = 5;
      results.harlem = 5;
      results.upperEastSide = 4;
      results.inwood = 3.5;
      results.eastHarlem = 3.5;
      // results.eastVillage = 2.5;
      // results.greenwich = 2.5;
      // results.lowerEast = 2.5;
      results.midtownWest = 2;
      results.financialDist = 1.5;
      results.gramercy = 1.5;
      results.midtownEast = 1;
      results.chelsea = 1;
      results.chinaTown = 1;
      results.murrayHill = 0.5;
      results.soho = 0.5;
      break;
    case 'q3b':
      results.tribeca = 5;
      results.morningSideHts = 5;
      results.soho = 4.5;
      results.murrayHill = 4.5;
      results.chinaTown = 4;
      results.midtownEast = 4;
      results.gramercy = 3.5;
      results.financialDist = 3.5;
      results.midtownWest = 3;
      // results.lowerEast = 2.5;
      // results.greenwich = 2.5;
      // results.eastVillage = 2.5;
      results.eastHarlem = 1.5;
      results.inwood = 1.5;
      results.upperEastSide = 1;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  heatmapAJAX();
})//end of click function q3 **************************

//**********QUESTION 4***********
$("input[name*='q4']").click(function(e) {
  // e.preventDefault; // dont think we need this
  var result;
  switch($('input[name=q4]:checked').attr('id')){
    case 'q4a':
      results.midtownWest = 5;
      results.midtownEast = 5;
      results.soho = 4.5;
      results.murrayHill = 4.5;
      results.eastVillage = 4.5;
      results.greenwich = 4;
      results.chelsea = 3.5;
      results.gramercy = 3;
      results.tribeca = 3;
      results.lowerEast = 3;
      // results.chinaTown = 2.5;
      // results.upperEastSide =2.5;
      results.harlem = 2;
      results.financialDist = 2;
      results.upperWestSide = 2;
      results.inwood = 1.5;
      results.morningSideHts = 1;
      results.eastHarlem = 1;
      break;
    case 'q4b':
      results.eastHarlem = 5;
      results.morningSideHts = 5;
      results.inwood = 4;
      results.upperWestSide = 3.5;
      results.financialDist = 3.5;
      results.harlem = 3.5;
      results.upperEastSide = 3;
      results.chinaTown = 3;
      // results.lowerEast = 2.5;
      // results.tribeca = 2.5;
      // results.gramercy = 2.5;
      results.chelsea = 2;
      results.greenwich = 1.5;
      results.eastVillage = 1;
      results.murrayHill = 1;
      results.soho = 1;
      results.midtownWest = 0.5;
      results.midtownEast = 0.5;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);

  heatmapAJAX();
})//end of click function q4 **************************

// NUMBER 5 WHAT IS YOUR FAV CUISINE?????
$("input[name*='q5']").click(function(e){
  var result;
//switch case to assign a neighborhood and multiper to be added to heatmap depending on which answer is selected.
  switch($('input[name=q5]:checked').attr('id')){
    case 'q5a': // french
      results.upperEastSide = 5;
      results.midtownWest = 4.5;
      results.greenwich = 4;
      // results.midtownEast = 2.5;
      // results.lowerEast = 2.5;
      results.upperWestSide = 2;
      results.soho = 2;
      results.murrayHill = 1.5;
      results.eastVillage = 1.5;
      results.tribeca = 1.5;
      results.chelsea = 1;
      results.gramercy = 1;
      reesults.financialDist = 1;
      results.harlem = 1;
      results.harlem = 0.5
      break;
    case 'q5b': // chinese
      results.chinaTown = 5;
      results.midtownEast = 3;
      // results.upperEastSide = 2.5;
      // results.midtownWest = 2.5;
      // results.lowerEast = 2.5;
      // results.eastVillage = 2.5;
      greenwich = 2;
      results.chelsea = 2;
      results.upperWestSide = 1.5;
      results.murrayHill = 1;
      results.morningSideHts = 1;
      results.tribeca = 0.5;
      results.gramercy = 0.5;
      results.financialDist = 0.5;
      break;
    case 'q5c': // burgers
      results.midtownWest = 5;
      results.greenwich = 5;
      results.financialDist = 5;
      results.upperEastSide = 4;
      results.upperWestSide = 4;
      results.murrayHill = 4;
      results.eastVillage = 3;
      results.chelsea = 3;
      results.midtownEast = 2;
      results.soho = 2;
      results.gramercy = 0.5;
      results.harlem = 0.5;
      break;
    case 'q5d': // mexican
      results.greenwich = 5;
      results.midtownEast = 4;
      results.chelsea = 4;
      results.midtownWest = 3.5;
      results.east = 3.5;
      resuls.upperEastSide = 3;
      results.gramercy = 3;
      results.murrayHill = 3;
      results.upperWestSide = 2.5;
      results.lowerEast = 2;
      results.soho = 1;
      results.tribeca = 1;
      results.financialDist = 1;
      results.eastHarlem = 0.5;
      results.chinaTown = 0.5;
      results.morningSideHts = 0.5;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  heatmapAJAX();
})//end of click function q5 **************************

// NUMBER 6 WHO'S YOUR FAVORITE SPIRIT ANIMAL?
$("input[name*='q6']").click(function(e) {
  var result;
  switch($('input[name=q6]:checked').attr('id')){
    case 'q6a':
      results.morningSideHts = 5;
      break;
    case 'q6b':
      results.upperEastSide = 5;
      break;
    case 'q6c':
      results.upperWestSide = 5;
      break;
    case 'q6d':
      results.greenwich = 5;
      break;
    case 'q6e':
      results.lowerEast = 5;
      break;
    case 'q6f':
      results.eastVillage = 5;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  heatmapAJAX();
})//end of click function q6 **************************

// NUMBER 7 FAVORITE SONG ON JUKEBOX?
$("input[name*='q7']").click(function(e){
  var result;
  switch($('input[name=q7]:checked').attr('id')){
    case 'q7a':
      results.eastHarlem = 5;
      break;
    case 'q7b':
      results.upperEastSide = 5;
      results.upperWestSide = 5;
      results.chelsea = 5;
      results.midtownEast = 5;
      results.tribeca = 5;
      break;
    case 'q7c':
      results.upperWestSide = 2.5;
      break;
    case 'q7d':
      results.midtownWest = 5;
      break;
    case 'q7e':
      results.murrayHill = 5;
      break;
    case 'q7f':
      results.gramercy = 5;
      break;
    case 'q7g':
      results.lowerEast = 5;
      break;
    case 'q7h':
      results.chinaTown = 5;
      break;
    case 'q7i':
      results.morningSideHts = 5;
      break;
    case 'q7j':
      results.financialDist = 5;
      break;
  }
  // console.log('the result is ' + result + ' with a multiplier of ' + multiplier);
  heatmapAJAX();
})//end of click function q7 **************************

// **************** QUESTION 8
$("input[name*='q8']").click(function(e) {
  var result;

  switch($('input[name=q8]:checked').attr('id')){
    case 'q8a':
      results.upperWestSide = 5;
      break;
    case 'q8b':
      results.upperEastSide = 5;
      break;
    case 'q8c':
      results.eastVillage = 5;
      break;
    case 'q8d':
      results.lowerEast = 5;
      break;
    case 'q8e':
      results.tribeca = 5;
      break;
    case 'q8f':
      results.financialDist = 5;
      break;
    case 'q8g':
      results.murrayHill = 5;
      break;
    case 'q8h':
      results.eastHarlem = 5;
      break;
    case 'q8i':
      results.gramercy = 5;
      break;
    case 'q8j':
      results.morningSideHts = 5;
      break;
    case 'q8k':
      results.midtownWest = 5;
      break;
  }
   heatmapAJAX();
})//end of click function q8 *********************

//********************* QUESTION 9
$("input[name*='q9']").click(function(e) {
  var result;
  switch($('input[name=q9]:checked').attr('id')){
    case 'q9a':
      results.inwood = 5;
      results.eastHarlem = 5;
      results.harlem = 4;
      break;
    case 'q9b':
      results.morningSideHts = 5;
      results.upperWestSide = 5;
      results.upperEastSide = 5;
      break;
    case 'q9c':
      results.midtownEast = 5;
      results.midtownWest = 5;
      results.chelsea = 5;
      results.eastVillage = 5;
      results.greenwich = 5;
      results.murrayHill = 3.5;
      results.lowerEast = 3.5;
      results.financialDist = 3.5;
      break;
  }
  heatmapAJAX();
})//end of click function q9************************

//********************* QUESTION 10
$("input[name='q10']").click(function(e) {
  var result;
  switch($('input[name=q10]:checked').attr('id')){
    case 'q10a': // rarely
      results.eastHarlem = 5;
      results.upperWestSide = 4;
      break;
    case 'q10b': //few times a week
      results.murrayHill = 3;
      results.upperEastSide = 3;
      results.lowerEast = 3;
      results.soho = 3;
      results.tribeca = 3;
      results.financialDist = 3;
      break;
    case 'q10c': // all the time
      results.midtownWest = 5;
      results.greenwich = 4;
      results.chelsea = 4;
      results.gramercy = 5;
      break;
  }
  heatmapAJAX();
  //go thru userResults to find the neighborhood with highest number of heat dots:
  var hoodWithMostDots = Object.keys(userResults).reduce(function(a, b){ return userResults[a] > userResults[b] ? a : b });
// var hoodWithMostDots = userResults.slice(0).sort(function(x, y) { return y.number - x.number })[0];


  window.alert('the hottest hood for you is ' + hoodWithMostDots);
  // index = userResults.indexOf(hoodWithMostDots);
  // console.log('the index of your hood is ' + index);
})//end of click function q10************************


