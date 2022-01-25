const spotlightName = document.querySelector('.spotlight-name')
const url = 'http://localhost:8080/api/stations/random'

axios
    .get(url)
    .then(res => {
        
        spotlightName.textContent = res.data[0].owner
    })