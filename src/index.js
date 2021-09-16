import './style.css';

// `api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=8da6e4702fef427379c1ed0387c3fc89`
let units = "imperial"
let cityname = "New York"

const changeTemp = document.querySelector('.temp-measurement')
changeTemp.addEventListener('click', () => {
    changeMeasurement()
})



const search = document.querySelector('.search')
search.addEventListener('submit', (e) => {
    e.preventDefault()
    cityname = search.elements[0].value
    getLocation(cityname, units)
})



async function getLocation(cityname) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=${units}&APPID=8da6e4702fef427379c1ed0387c3fc89`, {mode: 'cors'})
    if (response.status == 404) {
        //throw some error here for user to see they didn't put a city name
        return;
    }
    const weatherLocation = await response.json()
    getData(weatherLocation)
}

async function getData(location) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.coord['lat']}&lon=${location.coord['lon']}&units=${units}&appid=8da6e4702fef427379c1ed0387c3fc89`, {mode: 'cors'})
    const weatherData = await response.json()
    console.log(weatherData)
    renderCityName(location.name)
    renderHeaderData(weatherData)
    renderMainData(weatherData)
}

function changeMeasurement() {
    if (units === "imperial") {
        units = "metric"
        changeTemp.textContent = "C\xB0"
    } else {
        units = "imperial"
        changeTemp.textContent = "F\xB0"
    }
    getLocation(cityname, units)
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

    const sunrise = document.querySelector('#sunrise')
    let sunriseTime = new Date(data.current.sunrise *1000)
    console.log(sunriseTime)
    let sunriseHour = sunriseTime.getHours() % 12 || 12
    let sunriseMinutes = sunriseTime.getMinutes()
    if (sunriseMinutes < 10) {
        sunriseMinutes = "0" + sunriseMinutes
    }
    sunrise.textContent = `Sunrise: ${sunriseHour}:${sunriseMinutes}AM`

    const sunset = document.querySelector('#sunset')
    let sunsetTime = new Date(data.current.sunset *1000)
    let sunsetHour = sunsetTime.getHours() % 12 || 12
    let sunsetMinutes = sunsetTime.getMinutes()
    if (sunsetMinutes < 10) {
        sunsetMinutes = "0" + sunsetMinutes
    }
    sunset.textContent = `Sunset: ${sunsetHour}:${sunsetMinutes}PM`

    const humidity = document.querySelector('#humidity')
    humidity.textContent = `Humidity: ${data.current.humidity}%`

    const feelsLike = document.querySelector('#feels-like')
    feelsLike.textContent = `Feels Like: ${Math.round(data.current.feels_like)}\xB0`

    const pop = document.querySelector('#pop')
    pop.textContent = `Chance of Rain: ${data.hourly[0].pop}%`

    const percipitation = document.querySelector('#percipitation')
    percipitation.textContent = data.daily[0].rain ? `Percipitation: ${data.daily[0].rain} in` : 'Percipitation: 0 in'

    const windspeed = document.querySelector('#windspeed')
    let measurement = ''
    if (units === "imperial") {
        measurement = 'mph'
    } else {
        measurement = 'mps'
    }
    windspeed.textContent = `Wind: ${data.current.wind_speed} ${measurement}`

    const pressure = document.querySelector('#pressure')
    pressure.textContent = `Pressure: ${data.current.pressure} hPa`

    const visibility = document.querySelector('#visibility')
    visibility.textContent = ` Visibility: ${data.current.visibility} meters`

    const uvIndex = document.querySelector('#uv-index')
    uvIndex.textContent = `UV Index: ${data.current.uvi}`

}

getLocation(cityname, units).catch(err => {
console.log(err)
})

//   https://api.openweathermap.org/data/2.5/onecall?lat=29.4241&lon=-98.4936&exclude=minutely&units=imperial&appid=8da6e4702fef427379c1ed0387c3fc89