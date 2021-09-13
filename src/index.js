import './style.css';


// `api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=8da6e4702fef427379c1ed0387c3fc89`
let units = "imperial"


async function getLocation(cityname) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=${units}&APPID=8da6e4702fef427379c1ed0387c3fc89`, {mode: 'cors'})
    const weatherLocation = await response.json()
    renderCityName(weatherLocation.name)
    getData(weatherLocation.coord['lat'], weatherLocation.coord['lon'] )
}

async function getData(lat, lon) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=8da6e4702fef427379c1ed0387c3fc89`, {mode: 'cors'})
    const weatherData = await response.json()
    console.log(weatherData)
    renderHeaderData(weatherData)
}



function renderCityName(locationname) {
    const name = document.querySelector('.name')
    name.textContent = locationname
}

function renderHeaderData(data) {
    const currentWeather = document.querySelector('.current-weather')
    currentWeather.textContent = data.current.weather[0]['main']

    const temp = document.querySelector('.temp')
    temp.textContent = `${Math.round(data.current['temp'])}\xB0`

    const maxTemp = document.querySelector('#maxTemp')
    maxTemp.textContent = `H:${Math.round(data.daily[0].temp['max'])}\xB0`

    const minTemp = document.querySelector('#minTemp')
    minTemp.textContent = `L:${Math.round(data.daily[0].temp['min'])}\xB0`
}

function renderMainData(data) {

}

getLocation("San-Antonio", "imperial").catch(err => {
console.log(err)
})

//   https://api.openweathermap.org/data/2.5/onecall?lat=29.4241&lon=-98.4936&exclude=minutely&units=imperial&appid=8da6e4702fef427379c1ed0387c3fc89