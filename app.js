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
  weather.getWeather().then((result) => {
    res.render('index', {

      //results is the weather object returned from getWeather(), thu we can call the same properties and assign them to the key value paths
      city:result.city,
      icon: result.icon,
      temperature: result.temperature
    })
  });

});


app.get('/prodotti', (req, res) => {
  weather.getWeather().then((result) => {
    res.render('prodotti', {
      city: result.city,
      icon: result.icon,
      temperature: result.temperature
    })
  });

});

app.get('/storia', (req, res) => {
  weather.getWeather().then((result) => {
    res.render('storia', {
      city: result.city,
      icon: result.icon,
      temperature: result.temperature
    })
  });

});

app.get('/contatti', (req, res) => {
  weather.getWeather().then((result) => {
    res.render('contatti', {
      city: result.city,
      icon: result.icon,
      temperature: result.temperature
    })
  });

});

app.get('/prodotti/:productName', (req, res) => {
  const productName = req.params.productName

  weather.getWeather().then((result) => {
    res.render(productName, {
      city: result.city,
      icon: result.icon,
      temperature: result.temperature,

    })

});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
