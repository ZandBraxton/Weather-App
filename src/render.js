import {
    getHour,
    getDay,
    getDayName,
    appendHourlyIcon,
    appendHourlyTemp,
    appendDailyIcon,
    appendDailyTemp
} from './index'

function renderData(location, data, units) {
    renderCityName(location.name)
    renderHeaderData(data)
    renderMainData(data, units)
    renderHourly(data)
    renderForecast(data)
}


function renderCityName(locationName) {
    const name = document.querySelector('.name')
    name.textContent = locationName
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

    const currentIcon = document.querySelector('.current-icon')
    currentIcon.src = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@4x.png`
    currentIcon.alt = `${data.current.weather[0].description}`

    const currentDesc = document.querySelector('.current-desc')
    const desc = data.current.weather[0].description
    const capitalDesc = desc.charAt(0).toUpperCase() + desc.slice(1)
    currentDesc.textContent = `Today: ${capitalDesc} currently.`
}

function renderMainData(data, units) {
    const sunrise = document.querySelector('#sunrise')
    //convert from utc time to 12hr clock
    let sunriseTime = new Date(data.current.sunrise *1000)
    let sunriseHour = sunriseTime.getHours() % 12 || 12
    let sunriseMinutes = sunriseTime.getMinutes()
    if (sunriseMinutes < 10) {
        sunriseMinutes = "0" + sunriseMinutes
    }
    sunrise.textContent = `${sunriseHour}:${sunriseMinutes}AM`

    const sunset = document.querySelector('#sunset')
    let sunsetTime = new Date(data.current.sunset *1000)
    let sunsetHour = sunsetTime.getHours() % 12 || 12
    let sunsetMinutes = sunsetTime.getMinutes()
    if (sunsetMinutes < 10) {
        sunsetMinutes = "0" + sunsetMinutes
    }
    sunset.textContent = `${sunsetHour}:${sunsetMinutes}PM`

    const humidity = document.querySelector('#humidity')
    humidity.textContent = `${data.current.humidity}%`

    const feelsLike = document.querySelector('#feels-like')
    feelsLike.textContent = `${Math.round(data.current.feels_like)}\xB0`

    const pop = document.querySelector('#pop')
    pop.textContent = `${data.hourly[0].pop}%`

    const percipitation = document.querySelector('#percipitation')
    //sometimes percipitation value isn't added to the response
    percipitation.textContent = data.daily[0].rain ? `${data.daily[0].rain} in` : '0 in'

    const windspeed = document.querySelector('#windspeed')
    let measurement = ''
    if (units === "imperial") {
        measurement = 'mph'
    } else {
        measurement = 'mps'
    }
    windspeed.textContent = `${data.current.wind_speed} ${measurement}`

    const pressure = document.querySelector('#pressure')
    pressure.textContent = `${data.current.pressure} hPa`

    const visibility = document.querySelector('#visibility')
    visibility.textContent = `${data.current.visibility} meters`

    const uvIndex = document.querySelector('#uv-index')
    uvIndex.textContent = `${data.current.uvi}`

}

function renderHourly(data) {
    const container = document.querySelector('.weather-hourly')
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    //math to convert to a 24 hour period in local time
    let h = getHour()
    let period = ''
    if (h >= 0 && h <= 11) {
        period = "am"
    } else {
        period = "pm"
    }
    let currentHour =  h % 12 || 12

    for (let i = 0; i < 24; i++) {
        let cell = document.createElement('div')
        cell.classList.add('hourly-cell')

        let time = document.createElement('p')
        if (i !== 0) {
            if (currentHour === 12) {
            currentHour = 0
            if (period === "pm") {
                period = "am"
            } else {
                period = "pm"
            }
            }
        }
       
        if(i === 0) {
            time.textContent = "Now"
        } else {
            currentHour += 1
            time.textContent = `${currentHour}${period}`
        }
        time.classList = "hourly-time"
        cell.appendChild(time)
        appendHourlyIcon(data, i, cell)
        appendHourlyTemp(data, i, cell)
        container.appendChild(cell)
    }
}

function renderForecast(data) {
    const container = document.querySelector('.weather-daily')
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    let day = getDay()
    for (let i = 1; i <= 7; i++) {
        let cell = document.createElement('div')
        cell.classList.add('daily-cell')

        let dayTitle = document.createElement('div')
        dayTitle.classList.add('daily-day')
        let dayName = getDayName(day)
        dayTitle.textContent = dayName
        if(day === 6) {
            day = 0
        } else {
            day++
        }
        cell.appendChild(dayTitle)
        appendDailyIcon(data, i, cell)      
        appendDailyTemp(data, i, cell)  
        container.appendChild(cell)
    }
}

export {renderData}


