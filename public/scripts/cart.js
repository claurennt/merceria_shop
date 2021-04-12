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
