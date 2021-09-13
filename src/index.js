import './style.css';


// `api.openweathermap.org/data/2.5/weather?q=${cityname}&APPID=8da6e4702fef427379c1ed0387c3fc89`

async function getData(cityname, units) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=${units}&APPID=8da6e4702fef427379c1ed0387c3fc89`, {mode: 'cors'})
    const weatherData = await response.json()
    console.log(weatherData.name)
    console.log(weatherData.main)
    console.log(weatherData.weather[0]['main'])
    console.log(weatherData.wind)
    renderData(weatherData)
}



 function renderData(data) {
      const name = document.querySelector('.name')
      name.textContent = data.name

      const currentWeather = document.querySelector('.current-weather')
      currentWeather.textContent = data.weather[0]['main']

      const maxTemp = document.querySelector('#maxTemp')
      maxTemp.textContent = `H:${Math.round(data.main['temp_max'])}\xB0`

      const minTemp = document.querySelector('#minTemp')
      minTemp.textContent = `L:${Math.round(data.main['temp_min'])}\xB0`

  }

  getData("San-Antonio", "imperial").catch(err => {
    console.log(err)
  })