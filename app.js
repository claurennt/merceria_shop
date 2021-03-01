const express= require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const _ = require('lodash');



const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index');
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

app.listen(4000, () => console.log('Example app listening on port 4000!'));
