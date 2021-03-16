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

let products = [canottiera1, canottiera2, canottiera3, canottiera4, canottiera5, canottiera6, canottiera7, canottiera8]


let basket = []

let i = 0;
let divs = document.querySelectorAll('.card-body')
divs.forEach(div => {
  div.innerHTML +=
    (`<p class="card-text"> ${products[i].description} </p>
    <p class="tagprice"><strong> ${products[i].price} € </strong> </p>
    <button type="submit" name="button" class="btn btn-secondary" id="${products[i].description}">Acquista</button>
  `);
  i++;
});

const addToBasket = (item) => {
  basket.push(item)
}

const addToCartOnClick = (event) => {
var clickedItem = products.find((item) => {
  return item.description == event.target.id
})
addToBasket(clickedItem)
let listItem = document.createElement("li");
listItem.innerText = clickedItem.description;
document.querySelector(".cartList").appendChild(listItem);
}

let buttons = document.querySelectorAll(".btn")

buttons.forEach(button => {
      button.addEventListener("click", (event) => {
        addToCartOnClick(event)
        button.innerHTML = "Aggiunto al carrello";
      })
    })


      const calcSum = (basket) => {
        let totalSum = 0;
        for (product of basket) {
          totalSum += product.price
        }
        return totalSum;
      }

      const displaySum = () => {
      let pSum = document.createElement('p')
      let totalSum = calcSum(basket)
      document.querySelector(".checkOut").innerText = `Somma da pagare ${totalSum} Euro.`
      
      }
  document.querySelector(".checkOut").addEventListener("click", displaySum)


      //
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
