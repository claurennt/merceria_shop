require('dotenv').config()
const fetch = require('node-fetch');

const apiKey = process.env.OPENWEATHER_KEY;


//use async/await to fetch weahter API
async function getWeather() {
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Riccione&appid=' + apiKey + '&units=metric')
  const data = await res.json();
  const city = data.name
  let icon = data.weather[0].icon
  let temp = Math.round(data.main.temp)
//create an object with parsed datas
  let weather = {
    city: city,
    icon: 'http://openweathermap.org/img/wn/' + icon + '@2x.png',
    temperature: temp + '°'
  }

  return weather;
}

module.exports = {
  getWeather
}
