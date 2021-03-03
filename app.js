const express= require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const fetch = require("node-fetch");
const axios = require('axios');
const _ = require('lodash');



const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));


app.get('/', (req, res) => {

//   async function fetchWeather() {
//   const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Riccione&appid=7146132179e874b6fed613bd87c02ac2&units=metric');
//   const wea = await response.json();
//   return wea;
// }
//
// fetchWeather().then(wea => {
//   document.querySelector("#cityName").innerHTML = response.data.name;
//   document.querySelector("#current-temperature").innerHTML = Math.round(response.data.main.temp);
// })
// ;



  res.render('index', );
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
