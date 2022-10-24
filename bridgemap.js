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
    {"name": "Verrazano-Narrows Bridge", "location": "New York, NY", "span": 1298.4, "coordinates": [40.6066, -74.0447] }, 
    {"name": "Golden Gate Bridge", "location": "San Francisco and Marin, CA", "span": 1280.2, "coordinates": [37.8199, -122.4783] }, 
    {"name": "Mackinac Bridge", "location": "Mackinaw and St Ignace, MI", "span": 1158, "coordinates": [45.8174, -84.7278] }, 
    {"name": "George Washington Bridge", "location": "New York, NY and New Jersey, NJ", "span": 1067, "coordinates": [40.8517,-73.9527] }, 
    {"name": "Tacoma Narrows Bridge", "location": "Tacoma and Kitsap, WA", "span": 853.44, "coordinates": [47.2690,-122.5517] }
]

let chartColors = [ 'red', 'yellow', 'green', 'orange', 'blue']

// Set up the canvas to display the chart
let canvas = document.querySelector('#bridge-chart')
let context = canvas.getContext('2d')

// Set up the chart data
let bridgeChart = new Chart(context, {
    type: 'bar',
    data: {
        datasets: [ 
            {
                data: [],
                backgroundColor: []
            }
        ],
        labels: []
    },
    options: {}
})



// Loop through the array of bridges and place them on the map
bridges.forEach(function(bridge) {
    // Set up a formatted string for the marker
    let markerString = `<b>${bridge.name}</b><br>Location: ${bridge.location}<br>Span: ${bridge.span} meters<br>`
    // Place the marker on the map
    L.marker(bridge.coordinates).bindPopup(markerString).addTo(map)

    // Add the name of the bridge to the labels in the bar graph
    bridgeChart.data.labels.push(bridge.name)
    bridgeChart.data.datasets[0].data.push(bridge.span)

    // Set the background color of each bar
    let colorCount = bridgeChart.data.datasets[0].backgroundColor.length
    let color = chartColors[colorCount % chartColors.length]
    console.log(colorCount, color)
    bridgeChart.data.datasets[0].backgroundColor.push(color)

    // Update the chart to show the data
    bridgeChart.update()

})