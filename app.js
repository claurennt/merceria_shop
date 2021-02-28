const express= require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')



const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));
