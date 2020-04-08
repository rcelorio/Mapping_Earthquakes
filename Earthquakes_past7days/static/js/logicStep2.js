

// Accessing the Toronto neighborhoods GeoJSON URL.
let earthQuake = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a style for the lines.
let myStyle = {
  color: "blue",
  fillColor: "yellow",
	weight: 1
}
/*
// Grabbing our GeoJSON data.
d3.json(earthQuake).then(function(data) {
    console.log(data);
  
// This function determines the radius of the earthquake marker based on its magnitude.
// Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }
// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into a function
// to calculate the radius.
function styleInfo(feature) {
    return {
      opacity: 1,
      fillOpacity: 1,
      fillColor: "#ffae42",
      color: "#000000",
      radius: getRadius(feature.properties.mag),
      stroke: true,
      weight: 0.5
    };
  }
  
 // Creating a GeoJSON layer with the retrieved data.
 L.geoJson(data, {

    // We turn each feature into a circleMarker on the map.
    
    pointToLayer: function(feature, latlng) {
                  console.log(data);
                  return L.circleMarker(latlng);
            },
          // We set the style for each circleMarker using our styleInfo function.
        style: styleInfo
        }).addTo(map);
    });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
*/
