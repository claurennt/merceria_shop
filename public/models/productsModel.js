require('dotenv').config()
const uriMongo = process.env.URI_MONGO;
const mongoose = require('mongoose')

mongoose.connect(uriMongo, {
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

const WomanBra = mongoose.model('WomanBra', productSchema);


module.exports= {
  WomanTshirt: WomanTshirt,
  WomanBra: WomanBra
}
