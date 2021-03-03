const express= require('express')
const ejs = require('ejs')
const axios = require('axios');
const _ = require('lodash');
require('dotenv').config()


const app = express();

app.set('view engine', 'ejs');


app.use(express.static("public"));



app.get('/', (req, res) => {

const apiKey= process.env.OPENWEATHER_KEY;
// display temperature of Riccione on the website
axios.get('https://api.openweathermap.org/data/2.5/weather?q=Riccione&appid='+ apiKey + '&units=metric')
  .then( (response) => {

  let cityName= response.data.name
  let temp = Math.round(response.data.main.temp)
  let weather = {
    city: cityName,
    temperature: temp
  }
    res.render('index', {
      weatherCity: weather.city,
      weatherTemperature: weather.temperature} );
  }
)
  .catch(function (error) {
    // handle error
    console.log(error);
  })




});

app.get('/prodotti', (req, res) => {
  res.render('prodotti');
});

app.get('/storia', (req, res) => {
  res.render('storia');
});

app.get('/contatti', (req, res) => {
  res.render('contatti');
});

app.get('/prodotti/canottiere-donna', (req, res) => {
  res.render('canottiere-donna');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
