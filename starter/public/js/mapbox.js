/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoicGl5dXNoc2FpbjA3NCIsImEiOiJjbTFkMXg5djYyYXVvMnFxeHJtYWNscDFhIn0.K_MF8pAgTXjYvAE--sXCRw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11'
});
