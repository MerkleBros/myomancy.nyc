import mouseGeoJSON from "./data.js"

const map = L.map('map', { zoomControl: false }).setView([40.713435, -73.929062], 11);
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.boxZoom.disable();
map.keyboard.disable();
map.setMaxBounds(map.getBounds());
map.dragging.disable();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const mouseIcon = L.icon({
    iconUrl: 'https://img.icons8.com/bubbles/50/undefined/rat-silhuette.png'
});

function createIcon (feature, latLong) {
    return L.marker(latLong, { icon: mouseIcon })
}

const featureOptions = {
    pointToLayer: createIcon
}

L.geoJSON(mouseGeoJSON, featureOptions).addTo(map)
