require('dotenv').config()
const uriMongo = process.env.MONGODB_URI;
const databaseURL = process.env.DATABASEURL;
const mongoose = require('mongoose')

mongoose.connect( uriMongo || databaseURL , {
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

const LingerieSet = mongoose.model('LingerieSet', productSchema);

const completo1 = new LingerieSet ({
  picURL: "/images/completo.png",
  name: "completo Moretta",
  brand: "Filo Di Scozia",
  material: "Cotone",
  color: "Nero",
  size: "3",
  price: "38.00"
});

const completo2 = new LingerieSet ({
  picURL: "/images/completo.png",
  name: "completo Navi",
  brand: "Naviblu",
  material: "Cotone",
  color: "Blu",
  size: "3",
  price: "21.00"
})

const completo3 = new LingerieSet ({
  picURL: "/images/completo.png",
  name: "completo SièLei",
  brand: "SièLei",
  material: "Nylon",
  color: "Bianco",
  size: "1",
  price: "28.00"
})

const completo4 = new LingerieSet ({
  picURL: "/images/completo.png",
  name: "completo InFiore",
  brand: "InFiore",
  material: "Lana",
  color: "Nero",
  size: "4",
  price: "35.00"
})
const completo5 = new LingerieSet ({
  picURL: "/images/completo.png",
  name: "completo Liabel",
  brand: "Liabel",
  material: "Cotone",
  color: "Blu",
  size: "2",
  price: "29.00"
})
const completo6 = new LingerieSet ({
  picURL: "/images/completo.png",
  name: "completo LG",
  brand: "Lg",
  material: "Cotone",
  color: "Blu",
  size: "5",
  price: "25.00"
})
const completo7 = new LingerieSet ({
  picURL: "/images/completo.png",
  name: "completo Intimissimi",
  brand: "Intimissimi",
  material: "Seta",
  color: "Nero",
  size: "6",
  price: "30.00"
})
const completo8 = new LingerieSet ({
  picURL: "/images/completo.png",
  name: "completo Lepel",
  brand: "Lepel",
  material: "Seta",
  color: "Bianco",
  size: "4",
  price: "22.00"
})



module.exports= {
  WomanTshirt: WomanTshirt,
  WomanBra: WomanBra,
  WomanSlip: WomanSlip,
  CollantSock: CollantSock,
  LingerieSet: LingerieSet
}
