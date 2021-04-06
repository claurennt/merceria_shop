const express = require('express')
const ejs = require('ejs')
const fetch = require('node-fetch');
const mongoose = require('mongoose')
const weather = require(__dirname + '/weather.js')

// const _ = require('lodash');


const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost:27017/prodottiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const productSchema = new mongoose.Schema({
  picURL: String,
  name: {
    type: String,
    uppercase: true
  },
  brand: String,
  material: String,
  color: String,
  size: String,
  price: Number
});

const WomanTshirt = mongoose.model('WomanTshirt', productSchema);

const canottiera1 = new WomanTshirt({
  picURL: "/images/canotta1.jpg",
  name: "Canottiera Moretta",
  brand: "Filo Di Scozia",
  material: "Cotone",
  color: "Nero",
  size: "s",
  price: 12.99
});

const canottiera2 = new WomanTshirt({
  picURL: "/images/canotta2.jpg",
  name: "Canottiera Navi",
  brand: "Naviblu",
  material: "Cotone",
  color: "Blu",
  size: "m",
  price: 18.00
})

const canottiera3 = new WomanTshirt({
  picURL: "/images/canotta4.jpg",
  name: "Canottiera SièLei",
  brand: "SièLei",
  material: "Nylon",
  color: "Bianco",
  size: "l",
  price: 15.00
})

const canottiera4 = new WomanTshirt({
  picURL: "/images/canotta4.jpg",
  name: "Canottiera InFiore",
  brand: "InFiore",
  material: "Lana",
  color: "Nero",
  size: "xl",
  price: 18.00
})
const canottiera5 = new WomanTshirt({
  picURL: "/images/canotta4.jpg",
  name: "Canottiera Liabel",
  brand: "Liabel",
  material: "Cotone",
  color: "Blu",
  size: "xl",
  price: 21.00
})
const canottiera6 = new WomanTshirt({
  picURL: "/images/canotta4.jpg",
  name: "Canottiera LG",
  brand: "Lg",
  material: "Cotone",
  color: "Blu",
  size: "xl",
  price: 21.00
})
const canottiera7 = new WomanTshirt({
  picURL: "/images/canotta4.jpg",
  name: "Canottiera Intimissimi",
  brand: "Intimissimi",
  material: "Seta",
  color: "Nero",
  size: "xxl",
  price: 10.00
})
const canottiera8 = new WomanTshirt({
  picURL: "/images/canotta4.jpg",
  name: "Canottiera Lepel",
  brand: "Lepel",
  material: "Seta",
  color: "Bianco",
  size: "m",
  price: 22.00
})




app.get('/', (req, res) => {
  //use imported getWeather bound to const weather and then render index passing in the key value paths for the partials 'header'
  weather.getWeather().then((weatherData) => {
    res.render('index', {
      weatherData: weatherData
    })
  });

});


app.get('/prodotti', (req, res) => {
  weather.getWeather().then((weatherData) => {
    res.render('prodotti', {
      weatherData: weatherData
    })
  });

});

app.get('/storia', (req, res) => {
  weather.getWeather().then((weatherData) => {
    res.render('storia', {
      weatherData: weatherData
    })
  });

});

app.get('/contatti', (req, res) => {
  weather.getWeather().then((weatherData) => {
    res.render('contatti', {
      weatherData: weatherData
    })
  });

});

app.get('/prodotti/:productName', (req, res) => {
  const productName = req.params.productName

  if (productName == "canottiere-donna") {
  WomanTshirt.find({}, function(err, foundItems) {
    weather.getWeather().then((weatherData) => {
      res.render(productName, {
        weatherData: weatherData,
        foundItems: foundItems
      })

    });
  })
} else {
  weather.getWeather().then((weatherData) => {
    res.render(productName, {
      weatherData: weatherData
    })

  });
}
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
