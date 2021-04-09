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

const WomanSlip = mongoose.model('WomanSlip', productSchema);


const slip1 = new WomanSlip({
  picURL: "/images/slipdonna.jpg",
  name: "slip Moretta",
  brand: "Filo Di Scozia",
  material: "Cotone",
  color: "Nero",
  size: "3",
  price: 12.99
});

const slip2 = new WomanSlip({
  picURL: "/images/slipdonna.jpg",
  name: "slip Navi",
  brand: "Naviblu",
  material: "Cotone",
  color: "Blu",
  size: "1",
  price: 18.00
})

const slip3 = new WomanSlip({
  picURL: "/images/slipdonna.jpg",
  name: "slip SièLei",
  brand: "SièLei",
  material: "Nylon",
  color: "Bianco",
  size: "2",
  price: 15.00
})

const slip4 = new WomanSlip({
  picURL: "/images/slipdonna.jpg",
  name: "slip InFiore",
  brand: "InFiore",
  material: "Lana",
  color: "Nero",
  size: "4",
  price: 18.00
})
const slip5 = new WomanSlip({
  picURL: "/images/slipdonna.jpg",
  name: "slip Liabel",
  brand: "Liabel",
  material: "Cotone",
  color: "Blu",
  size: "4",
  price: 21.00
})
const slip6 = new WomanSlip({
  picURL: "/images/slipdonna.jpg",
  name: "slip LG",
  brand: "Lg",
  material: "Cotone",
  color: "Blu",
  size: "3",
  price: 21.00
})
const slip7 = new WomanSlip({
  picURL: "/images/slipdonna.jpg",
  name: "slip Intimissimi",
  brand: "Intimissimi",
  material: "Seta",
  color: "Nero",
  size: "2",
  price: 10.00
})
const slip8 = new WomanSlip({
  picURL: "/images/slipdonna.jpg",
  name: "slip Lepel",
  brand: "Lepel",
  material: "Seta",
  color: "Bianco",
  size: "2",
  price: 22.00
})



module.exports= {
  WomanTshirt: WomanTshirt,
  WomanBra: WomanBra,
  WomanSlip: WomanSlip
}
