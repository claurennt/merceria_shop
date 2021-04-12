require('dotenv').config()
const uriMongo = process.env.MONGODB_URI;
const databaseURL = process.env.DATABASEURL;
const mongoose = require('mongoose')

mongoose.connect(uriMongo || databaseURL, {
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
  price: String
});

const WomanTshirt = mongoose.model('WomanTshirt', productSchema);

const WomanBra = mongoose.model('WomanBra', productSchema);

const WomanSlip = mongoose.model('WomanSlip', productSchema);

const CollantSock = mongoose.model('CollantSock', productSchema)




module.exports= {
  WomanTshirt: WomanTshirt,
  WomanBra: WomanBra,
  WomanSlip: WomanSlip,
  CollantSock: CollantSock
}
