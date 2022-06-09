import mouseGeoJSON from "./data.js"

let map = L.map('map').setView([40.713435, -73.929062], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

let mouseIcon = L.icon({
    iconUrl: 'https://img.icons8.com/bubbles/50/undefined/rat-silhuette.png'
});

let featureOptions = {
    pointToLayer: createIcon
}
function createIcon (feature, latLong) {
    return L.marker(latLong, { icon: mouseIcon })
}

L.geoJSON(mouseGeoJSON, featureOptions).addTo(map)
