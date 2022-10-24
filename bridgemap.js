// Set the center of the map and the zoom level
let usCenterCoordinates = [39.8283, -98.5795]
let zoomLevel = 4

// Set the coordinates and zoom level in the map div
let map = L.map('bridge-map').setView(usCenterCoordinates, zoomLevel)

// Add tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Create the array of bridges
bridges = [
    {"name": "Verrazano-Narrows Bridge", "location": "New York, NY", "span": "1298.4 meters", "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "location": "San Francisco and Marin, CA", "span": "1280.2 meters", "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "location": "Mackinaw and St Ignace, MI", "span": "1158 meters", "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "location": "New York, NY and New Jersey, NJ", "span": "1067 meters", "coordinates": [40.8517,-73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "location": "Tacoma and Kitsap, WA", "span": "853.44 meters", "coordinates": [47.2690,-122.5517] }
]


// Loop through the array of bridges and place them on the map
bridges.forEach(function(bridge) {
    // Set up a formatted string for the marker
    let markerString = `<b>${bridge.name}</b><br>Location: ${bridge.location}<br>Span: ${bridge.span}<br>`
    // Place the marker on the map
    L.marker(bridge.coordinates).bindPopup(markerString).addTo(map)
})


