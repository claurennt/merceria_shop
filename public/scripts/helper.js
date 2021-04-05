document.querySelector(".navbar-toggler").addEventListener("click", () => {
  let menu = document.querySelector("#navbarCollapse")
  menu.classList.toggle("show")
  menu.classList.toggle("collapse")
})




//create constructor object
function Product(color, size, material, description, price) {
  this.color = color,
    this.size = size,
    this.material = material,
    this.description = description,
    this.price = price
}

//create new objects out of constructor object
let canottiera1 = new Product(['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "cotone", "Canottiera Ellegi", 25)

let canottiera2 = new Product(['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "nylon", "Canottiera Violetta", 10)

let canottiera3 = new Product(['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "cotone", "Canottiera Navi", 13)

let canottiera4 = new Product(['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "seta", "Canottiera SièLei", 20)

let canottiera5 = new Product(['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "cotone", "Canottiera it", 15)

let canottiera6 = new Product(['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "sintetico", "Canottiera la", 12.99)

let canottiera7 = new Product(['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "cotone", "Canottiera ciao", 19.50)

let canottiera8 = new Product(['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "lana", "Canottiera lana", 21.80)

let reggiseno1 = new Product(['blu', 'nero', 'rosso'], ['1', '2', '3', '4', '5', '6'], "cotone", "Reggiseno In Fiore", 25)

let reggiseno2 = new Product(['blu', 'nero', 'rosso'], ['1', '2', '3', '4', '5', '6'], "nylon", "Reggiseno Violetta", 10)

let reggiseno3 = new Product(['blu', 'nero', 'rosa'], ['1', '2', '3', '4', '5', '6'], "cotone", "Reggiseno SìèLei", 13)

let reggiseno4 = new Product(['blu', 'nero', 'bianco'], ['1', '2', '3', '4', '5', '6'], "Polyester", "Reggiseno Intimissimi", 20)

let reggiseno5 = new Product(['blu', 'nero', 'bianco'], ['1', '2', '3', '4', '5', '6'], "cotone", "Reggiseno Liabel", 15)

let reggiseno6 = new Product(['blu', 'nero', 'colorato'], ['1', '2', '3', '4', '5', '6'], "sintetico", "Reggiseno Italia", 12.99)

let reggiseno7 = new Product(['blu', 'nero', 'rosso'], ['1', '2', '3', '4', '5', '6'], "cotone", "Reggiseno okay", 35)

let reggiseno8 = new Product(['blu', 'nero', 'rosso'], ['1', '2', '3', '4', '5', '6'], "Polyester", "Reggiseno BluNavi", 15.90)

let canottiere = [canottiera1, canottiera2, canottiera3, canottiera4, canottiera5, canottiera6, canottiera7, canottiera8]

let reggiseni = [reggiseno1, reggiseno2, reggiseno3, reggiseno4, reggiseno5, reggiseno6, reggiseno7, reggiseno8]

let basket = []

// create product cards
let i = 0;
let productCards = document.querySelectorAll('.productCard')
productCards.forEach(card => {
  card.innerHTML +=
    (`<h5 class="mt-3 text-uppercase">${canottiere[i].description}</h5>
    <div class="m-2 card-text info">
    <span class="text1 d-block">Canottiera</span>
    <span class="text1 d-block">${canottiere[i].material} </span>
    </div>
    <p class="tagprice"> ${canottiere[i].size} </p>
  <p class="tagprice"><strong> ${canottiere[i].price} € </strong> </p>
  `);
  i++;
});

let cartTitle = document.createElement("h5")
cartTitle.innerHTML = "Carrello"
document.querySelector(".cartDiv").prepend(cartTitle)

// function to push the item to the basket
const addToBasket = (item) => {
  basket.push(item)
}

// function to add clicked products to cart
const addToCartOnClick = (event) => {

  let clickedItem = canottiere.find(item => item.description == event.target.id)

  let cartItem = document.createElement("li");
  cartItem.innerText = `${clickedItem.description} ${clickedItem.price}€`;
document.querySelector(".cartDiv").append(cartItem)
addToBasket(clickedItem)
}



// function to calculate sum of basket
const calculateSum = (someBasket) => {
  let totalSum = 0
  // look through the basket and caluculate the totalSum by the prize
  for(product of someBasket ) {
    totalSum = totalSum + product.price
  }
  return totalSum
}

let cartButtons = document.querySelectorAll(".btn")
// function to
cartButtons.forEach(button => {
  button.addEventListener("click", (event) => addToCartOnClick(event))
})

let buttonSum = document.querySelector(".buttonSum")

buttonSum.addEventListener("click", function(){
  let sp = document.createElement("p")
  let sum = calculateSum(basket)
  sp.innerText = `Totale da pagare: ${sum}`
  buttonSum.appendChild(sp)
})


//   button.addEventListener("click", function(event) {
//     let clickedItem = canottiere.find((item) => {
// //return multiple values as array
//       return [item.description == event.target.id, item.price]
//     })
//     //destructuring array
//     const {description, price} = clickedItem;
//     let cartItem = document.createElement("li");
//     cartItem.innerText = `${description}   ${price}€`
//
//     document.querySelector(".cartDiv").append(cartItem)
//   })
// })


  // addToBasket(clickedItem)
//
//
//
// let i = 0;
// let divs = document.querySelectorAll('.card-body')
// divs.forEach(div => {
//   div.innerHTML +=
//     (`<p class="card-text"> ${products[i].description} </p>
//     <p class="tagprice"><strong> ${products[i].price} € </strong> </p>
//     <button type="submit" name="button" class="btn btn-secondary" id="${products[i].description}">Acquista</button>
//   `);
//   i++;
// });
//
// const addToBasket = (item) => {
//   basket.push(item)
// }
//
// const addToCartOnClick = (event) => {
// var clickedItem = products.find((item) => {
//   return item.description == event.target.id
// })
// addToBasket(clickedItem)
// let listItem = document.createElement("li");
// listItem.innerText = clickedItem.description;
// document.querySelector(".cartList").appendChild(listItem);
// }
//
// let buttons = document.querySelectorAll(".btn")
//
// buttons.forEach(button => {
//       button.addEventListener("click", (event) => {
//         addToCartOnClick(event)
//         button.innerHTML = "Aggiunto al carrello";
//       })
//     })
//
//
//       const calcSum = (basket) => {
//         let totalSum = 0;
//         for (product of basket) {
//           totalSum += product.price
//         }
//         return totalSum;
//       }
//
//       const displaySum = () => {
//       let pSum = document.createElement('p')
//       let totalSum = calcSum(basket)
//       document.querySelector(".checkOut").innerText = `Somma da pagare ${totalSum} Euro.`
//
//       }
//   document.querySelector(".checkOut").addEventListener("click", displaySum)
//
//
//       //
// let buttons =  document.querySelectorAll(".btn")
//
//
// productToAdd.innerHTML = (`
//   <p class="carrelloContent"> ${event.path[1].childNodes[3].innerText} ${event.path[1].childNodes[5].innerText} </p>
//   `)
// document.querySelector("ol").appendChild(productToAdd);
// })
// })
//
// let buyButton = createElement("button");
// buyButton.innerText = "Termina acquisto";
// document.querySelector(".carrello").append(buyButton)
//
//
//
//









// const mostraSommaOnClick = () => {
//
//   buyButton.addEventListener("click", function () {
//     mostraSomma()
//   })
// }

//    button.addEventListener("click", function() {
//     button.innerHTML = "red"
//
//
// })
