const express = require('express')
const ejs = require('ejs')
const fetch = require('node-fetch');
const weather = require(__dirname + '/weather.js')

// const _ = require('lodash');


const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));


app.get('/', (req, res) => {
//use imported getWeather bound to const weather and then render index passing in the key value paths for the partials 'header'
  weather.getWeather().then((weatherData) => {
    res.render('index', { weatherData: weatherData })
  });

});


app.get('/prodotti', (req, res) => {
  weather.getWeather().then((weatherData) => {
    res.render('prodotti', { weatherData: weatherData })
  });

});

app.get('/storia', (req, res) => {
  weather.getWeather().then((weatherData) => {
    res.render('storia', { weatherData: weatherData })
  });

});

app.get('/contatti', (req, res) => {
  weather.getWeather().then((weatherData) => {
    res.render('contatti', { weatherData: weatherData })
  });

});

app.get('/prodotti/:productName', (req, res) => {
  const productName = req.params.productName

weather.getWeather().then((weatherData) => {
    res.render(productName, { weatherData: weatherData })

});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
