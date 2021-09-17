import './style.css';
import {renderData} from './render'

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
    renderData(location, weatherData, units)
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

function getHour() {
    let time = new Date()
    let h = time.getHours()
    return h
}

function getDay() {
    let time = new Date()
    let day = time.getDay()
    return day
}

function getDayName(day) {
    let result = ''
    switch(day) {
        case 0:
            result = "Sunday";
            break;
        case 1:
            result = "Monday";
            break;
        case 2:
            result = "Tuesday";
            break;
        case 3:
            result = "Wednesday";
            break;
        case 4:
            result = "Thursday";
            break;
        case 5:
            result = "Friday";
            break;
        case 6:
            result = "Saturday";
            break;   
    }
    return result
}

function appendHourlyIcon(data, i, cell) {
    let icon = document.createElement('img')
    icon.src = `https://openweathermap.org/img/wn/${data.hourly[i].weather[0].icon}@2x.png`
    icon.alt = `${data.hourly[i].weather[0].description}`
    icon.classList.add('hourly-icon')
    cell.appendChild(icon)
}

function appendHourlyTemp(data, i, cell) {
    let temp = document.createElement('p')
    temp.textContent = `${Math.round(data.hourly[i].temp)}\xB0`
    temp.classList.add('hourly-temp')
    cell.appendChild(temp)
}

function appendDailyIcon(data, i, cell) {
    let icon = document.createElement('img')
    icon.src = `https://openweathermap.org/img/wn/${data.daily[i].weather[0].icon}@2x.png`
    icon.alt = `${data.daily[i].weather[0].description}`
    icon.classList.add('daily-icon')
    cell.appendChild(icon)
}

function appendDailyTemp(data, i, cell) {
    let tempContainer = document.createElement('div')
    tempContainer.classList.add('daily-temp-container')
    let tempH = document.createElement('p')
    tempH.classList.add('daily-tempH')
    tempH.textContent = `H:${Math.round(data.daily[i].temp['max'])}\xB0`

    let tempL = document.createElement('p')
    tempL.classList.add('daily-tempL')
    tempL.textContent = `L:${Math.round(data.daily[i].temp['min'])}\xB0`

    tempContainer.appendChild(tempH)
    tempContainer.appendChild(tempL)
    cell.appendChild(tempContainer)
}

export {
    getHour,
    getDay,
    getDayName,
    appendHourlyIcon,
    appendHourlyTemp,
    appendDailyIcon,
    appendDailyTemp

}

getLocation(cityname, units).catch(err => {
console.log(err)
})

//   https://api.openweathermap.org/data/2.5/onecall?lat=29.4241&lon=-98.4936&exclude=minutely&units=imperial&appid=8da6e4702fef427379c1ed0387c3fc89