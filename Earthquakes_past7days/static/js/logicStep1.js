// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
  "Streets": streets,
  "Satellite Streets": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);



// Grabbing our GeoJSON data.
//L.geoJson(sanFranAirport, {
  //// We turn each feature into a marker on the map
  //pointToLayer: function(feature, latlng) {
  //  return L.marker(latlng)
  //  .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h4>" + feature.properties.city + ", " + feature.properties.country + "</h4>");
//  onEachFeature: function(feature, layer) {
//    console.log(layer);
//    layer.bindPopup("<h4> Airport code: " + feature.properties.faa + "</h4><hr><h4> Airport name: " + feature.properties.name + "</h4>");
//  }
//}).addTo(map);

// Accessing the Toronto airline routes GeoJSON URL.
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor: "yellow",
  weight: 1
}

// Grabbing our GeoJSON data.
d3.json(earthquakeData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map);
});
  //{style: myStyle,
  //onEachFeature: function(feature, layer) {
    //console.log(layer);
    //layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3>");}
  


// Then Add our 'graymap' tile layer to the map.
//light.addTo(map)