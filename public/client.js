// Initialize and add the map

// import { MarkerClusterer } from "@googlemaps/markerclusterer";

let map;

function initMap() {

<<<<<<< HEAD
=======
//declare a function
//call axios with the endpoint
//with the returned data create dom elements and append to the parent element

const stationList = document.querySelector('.station-list')
const stationDetail = document.querySelector('.station-detail')
>>>>>>> f93cd0c (added api top 5 stations)

    map = new google.maps.Map(document.getElementById("map"), {
         zoom: 4,
         center: { lat: -25.363, lng: 131.044 }
     });
    createMarkers()
 
 }

function createMarkers() {
    axios.get('/api/stations/all').then(res => {
        res.data.forEach(station => {
            new google.maps.Marker({
                position: {lat: station.latitude, lng: station.longitude},
                map: map,
                title: station.owner
              });
                
            }
        
    
        )}
    )}



<<<<<<< HEAD

=======
>>>>>>> f93cd0c (added api top 5 stations)
