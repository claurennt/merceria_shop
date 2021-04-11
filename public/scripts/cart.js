let basket = []



let cartTitle = document.createElement("h5")
cartTitle.innerText = "Carrello"
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
      let priceData = String(clickedItemPrice[y].innerText)
      let reg = /\d+\.\d{2}/g;
      let price = priceData.match(reg)
      let cartItem = document.createElement("li");
      cartItem.innerHTML = `${itemName} ${price} €`;
      document.querySelector(".cartList").appendChild(cartItem)
      addToBasket(price)
displaySum()
    })
    }


}

// function to calculate sum of basket
 function calculateSum (basket)  {
  let totalSum = 0
  // look through the basket and caluculate the totalSum by the price
  for (price of basket) {
                          //converts the parameter into a number for the calculation
    totalSum = totalSum + Number(price)
  }
  return totalSum.toFixed(2)
}

const displaySum = () => {
let totalSum = document.querySelector(".totalSum")
return totalSum.innerHTML = ("<p>Totale: <strong>" + calculateSum(basket) +" Euro</strong>")
}

addToCartOnClick()





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
