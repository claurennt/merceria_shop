require('dotenv').config()
const mongoUrl = process.env.MONGODB_URI;
const databaseUrl = process.env.DATABASEURL;
const express = require('express')
const ejs = require('ejs')
const fetch = require('node-fetch');
const mongoose = require('mongoose')
const getWeather = require(__dirname + '/public/scripts//weather.js').getWeather
const WomanTshirt = require(__dirname + '/public/models/productsModel.js').WomanTshirt
const WomanBra = require(__dirname + '/public/models/productsModel.js').WomanBra
const WomanSlip = require(__dirname + '/public/models/productsModel.js').WomanSlip
const CollantSock = require(__dirname + '/public/models/productsModel.js').CollantSock
// const _ = require('lodash');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));





app.get('/', (req, res) => {

  //use imported getWeather bound to const weather and then render index passing in the key value paths for the partials 'header'
  getWeather().then((weatherData) => {
    res.render('index', {
      weatherData: weatherData
    })
  });

});


app.get('/prodotti', (req, res) => {
  getWeather().then((weatherData) => {
    res.render('prodotti', {
      weatherData: weatherData
    })
  });

});

app.get('/storia', (req, res) => {
  getWeather().then((weatherData) => {
    res.render('storia', {
      weatherData: weatherData
    })
  });

});

app.get('/contatti', (req, res) => {
  getWeather().then((weatherData) => {
    res.render('contatti', {
      weatherData: weatherData
    })
  });

});

app.get('/prodotti/:productName', (req, res) => {
  const productName = req.params.productName

  if (productName == "canottiere-donna") {
    WomanTshirt.find({}, function(err, foundItems) {

      getWeather().then((weatherData) => {
        res.render(productName, {
          weatherData: weatherData,
          foundItems: foundItems
        })

      });
    })
  } else if (productName == "reggiseni") {

    WomanBra.find({}, function(err, foundItems) {

      getWeather().then((weatherData) => {
        res.render(productName, {
          weatherData: weatherData,
          foundItems: foundItems
        })

      });
    })
  } else if ((productName == "slip-donna")) {

    WomanSlip.find({}, function(err, foundItems) {

      getWeather().then((weatherData) => {
        res.render(productName, {
          weatherData: weatherData,
          foundItems: foundItems
        })

      });
    })

  } else if (productName == "calze-collant-donna") {

    CollantSock.find({}, function(err, foundItems) {

      getWeather().then((weatherData) => {
        res.render(productName, {
          weatherData: weatherData,
          foundItems: foundItems
        })

      });
    })

  }
  else {
    getWeather().then((weatherData) => {
      res.render(productName, {
        weatherData: weatherData
      })

    });
  }
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => console.log('Server has started successfully'));
