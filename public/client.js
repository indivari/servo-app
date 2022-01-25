// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}

const stationList = document.querySelector('.station-list')
const stationDetail = document.querySelector('.station-detail')

const getTop5Stations = () => {
    axios
    .get(
        'http://localhost:8080/api/stations/all'
    )
    .then((res)=>{
        console.log(res.data)
        // console.log(res.rows)
        var stations = res.data;
        stations.forEach(station => {
        const ulStation = document.createElement('ul');
        const liName = document.createElement('li');
        const liAddress = document.createElement('li');
        const liSuburb = document.createElement('li');
        ulStation.classList.add('station-list')
        liName.classList.add('bulletFreeList')
        liAddress.classList.add('bulletFreeList')
        liSuburb.classList.add('bulletFreeList')

        liName.textContent = station.name;
        liAddress.textContent = station.address;
        liSuburb.textContent = station.suburb;
        
        ulStation.appendChild(liName);
        ulStation.appendChild(liAddress);
        ulStation.appendChild(liSuburb);
        stationDetail.appendChild(ulStation)
        

        })
    
    })
}
window.onload = () => {
    getTop5Stations();
  };



//make a function
//call axios with the endpoint
//with the data create dom elements and append to the parent element