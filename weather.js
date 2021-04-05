require('dotenv').config()
const fetch = require('node-fetch');

const apiKey = process.env.OPENWEATHER_KEY;


//use async/await to fetch weahter API
async function getWeather() {
  const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Riccione&appid=' + apiKey + '&units=metric')
  const weatherData = await res.json();
  return weatherData;
}

module.exports = {
  getWeather
}
