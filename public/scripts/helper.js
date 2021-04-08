document.querySelector(".navbar-toggler").addEventListener("click", () => {
  let menu = document.querySelector("#navbarCollapse")
  menu.classList.toggle("show")
  menu.classList.toggle("collapse")
})



let foundItems = []
//create constructor object


let basket = []


let cartTitle = document.createElement("h5")
cartTitle.innerHTML = "Carrello"
document.querySelector(".cartDiv").prepend(cartTitle)

// function to push the item to the basket
const addToBasket = (item) => {
  basket.push(item)
}

// function to add clicked products (name and price) to cart 
const addToCartOnClick = () => {

  let cartButtons = document.querySelectorAll(".cartBtn")
  let clickedItemPrice = document.querySelectorAll(".priceData")
  for (let i = 0, y = 0; i<cartButtons.length, y<clickedItemPrice.length; i++, y++) {
    cartButtons[i].addEventListener("click", (event) => {
      let itemName = event.target.id
      let itemPrice = clickedItemPrice[y].innerText
      let price = itemPrice.substring(0,2)
      let cartItem = document.createElement("li");
      cartItem.innerText = `${itemName} ${price} €`;
      document.querySelector(".cartDiv").append(cartItem)
      console.log(price);
      addToBasket(price)
    })
  }
}

// function to calculate sum of basket
const calculateSum = (someBasket) => {
  let totalSum = 0
  // look through the basket and caluculate the totalSum by the prize
  for (product of someBasket) {
    totalSum = totalSum + Number(product)
  }
  return totalSum
}

addToCartOnClick()

let buttonSum = document.createElement('button')
document.querySelector(".cartDiv").append(buttonSum)
buttonSum.setAttribute("type", "submit")
buttonSum.innerText = "Clicca per vedere somma da pagare"


buttonSum.addEventListener("click", function() {
  let sum = calculateSum(basket)
  buttonSum.innerText = `Totale da pagare: ${sum} Euro`
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
