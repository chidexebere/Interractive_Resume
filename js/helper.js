/*
These are HTML strings. JavaScript (Jquery) code in resumeBuilder.js
replaces the %data% placeholder with data.
*/
let HTMLnameRole = '<div class="name-role"></div>';
let HTMLheaderName = '<h1 id="name" class="name">%data%</h1>';
let HTMLheaderRole = '<span class ="role">%data%</span>';

let HTMLcontactGeneric =
  '<li class="contact-item"><span class="social-icon">%contact%</span><span class="contact-text">%data%</span></li>';
let HTMLmobile =
  '<li class="contact-item"><span class="social-icon"><i class="fas fa-mobile-alt"></i></span><span class="contact-text">%data%</span></li>';
let HTMLemail =
  '<li class="contact-item"> <a class="social-link" href="#"><span class="social-icon"><i class="fas fa-envelope"></i></span><span class="contact-text">conyegbuchulem@gmail.com</span></a></li>';
let HTMLtwitter =
  '<li class="contact-item"><a class="social-link" href="#"><span class="social-icon"><i class="fab fa-twitter"></i></span><span class="contact-text">@chidexebere</span></a></li>';
let HTMLgithub =
  '<li class="contact-item"><a class="social-link" href="#"><span class="social-icon"><i class="fab fa-github"></i></span><span class="contact-text">@chidexebere</span></a></li>';
let HTMLportfolio =
  '<li class="contact-item"><a class="social-link" href="#"><span class="social-icon"><i class="fas fa-globe"></i></span><span class="contact-text">portfolio</span></a></li>';
let HTMLlinkedin =
  '<li class="contact-item"><a class="social-link" href="#"><span class="social-icon"><i class="fab fa-linkedin"></i></span><span class="contact-text">linkedIn</span></a></li>';

let HTMLbioCover = '<div class="bio-cover"></div>';
let HTMLbioPic = '<img src="%data%" class="biopic">';
let HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

let HTMLskillsCover = '<div class="skills-cover"></div>';
let HTMLskillsStart =
  '<h3 id="skills-header" class="skills-header">Skills and Technologies I use</h3><ul id="skills" class="skills-list"></ul>';
let HTMLskills =
  '<li class="skill-item"><span class="skill-text">%data%</span></li>';

let HTMLworkStart = '<div class="work-entry cover"></div>';
let HTMLworkEmployer = '<a class="work name-text" href="#">%data%';
let HTMLworkTitle = " - %data%</a>";
let HTMLworkDates = '<div class="work date-text">%data%</div>';
let HTMLworkLocation = '<div class="work location-text">%data%</div>';
let HTMLworkDescription = '<p class="work description-text"><br>%data%</p>';

let HTMLprojectCover = '<div class="project-entries cover"></div>';
let HTMLprojectStart = '<div class="project-entry"></div>';
let HTMLprojectTitle = '<a class="project name-text href="#">%data%</a>';
let HTMLprojectDates = '<div class="project date-text">%data%</div>';
let HTMLprojectDescription =
  '<p class="project description-text"><br>%data%</p>';
//let HTMLprojectImage = '<img src="%data%">';

let HTMLschoolCover = '<div class="education-entries cover"></div>';
let HTMLschoolStart = '<div class="education-entry"></div>';
let HTMLschoolName = '<a class="education name-text" href="#">%data%';
let HTMLschoolDegree = " -- %data%</a>";
let HTMLschoolDates = '<div class="education date-text">%data%</div>';
let HTMLschoolLocation = '<div class="education location-text">%data%</div>';
let HTMLschoolClass = "<em><br> %data%</em>";

//let HTMLonlineClasses = "<h3>Online Course</h3>";
let HTMLonlineTitle = '<a class="education name-text" href="#">%data%';
let HTMLonlineSchool = " - %data%</a>";
let HTMLonlineDates = '<div class="education date-text">%data%</div>';
let HTMLonlineURL = '<br><a href="#">%data%</a>';

let internationalizeButton = "<button>Internationalize</button>";
let googleMap = '<div id="map"></div>';

/*
The Internationalize Names challenge found in the lesson Flow Control from JavaScript Basics requires you to create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $("button").click(function() {
    let $name = $("#name");
    let iName = inName($name.text()) || function() {};
    $name.html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in the lesson Flow Control from JavaScript Basics.
*/
let clickLocations = [];

function logClicks(x, y) {
  clickLocations.push({
    x: x,
    y: y
  });
  console.log("x location: " + x + "; y location: " + y);
}

$(document).click(function(loc) {
  // your code goes here!
});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
let map; // declares a global map letiable

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {
  let locations;

  let mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector("#map"), mapOptions);

  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {
    // initializes an empty array
    let locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school) {
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    work.jobs.forEach(function(job) {
      locations.push(job.location);
    });

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {
    // The next lines save location data from the search result object to local letiables
    let lat = placeData.geometry.location.lat(); // latitude from the place service
    let lon = placeData.geometry.location.lng(); // longitude from the place service
    let name = placeData.formatted_address; // name of the place from the place service
    let bounds = window.mapBounds; // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    let marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    let infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, "click", function() {
      // your code goes here!
      infowindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {
    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    let service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    locations.forEach(function(place) {
      // the search request object
      let request = {
        query: place
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    });
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener("load", initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener("resize", function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
