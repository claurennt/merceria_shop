//create constructor object
function Product ( colore, taglie, materiale, descrizione, prezzo) {
  this.colore = colore,
  this.taglie = taglie,
  this.materiale = materiale,
  this.descrizione = descrizione,
  this.prezzo = prezzo
}

//create new objects out of constructor object
let canottiera1 = new Product ( ['blu', 'nero', 'rosso'],  ['xs', 's', 'm', 'l', 'xl', 'xxl'], "cotone", "Canottiera Ellegi", 25)

let canottiera2 = new Product ( ['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "nylon", "Canottiera Violetta", 10)

let canottiera3 = new Product (  ['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "cotone", "Canottiera Navi", 13)

let canottiera4 = new Product ( ['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "seta", "Canottiera SièLei", 20)

let canottiera5 = new Product ( ['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "cotone", "Canottiera it", 15)

let canottiera6 = new Product ( ['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "sintetico", "Canottiera la", 12.99)

let canottiera7 = new Product ( ['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "cotone", "Canottiera ciao", 19.50)

let canottiera8 = new Product (  ['blu', 'nero', 'rosso'], ['xs', 's', 'm', 'l', 'xl', 'xxl'], "lana", "Canottiera lana", 21.80)

let prodotti = [canottiera1, canottiera2, canottiera3, canottiera4, canottiera5, canottiera6, canottiera7, canottiera8]


let carrello = []

let i = 0;
let divs = document.querySelectorAll('.card-body')
divs.forEach(div => {
div.innerHTML =
  (`   <img src="/images/canotte.jpg" class="card-img-top" alt="canottiera-donna">
    <p class="card-text"> ${prodotti[i].descrizione} </p>
    <p class="tagprice"><strong> ${prodotti[i].prezzo} € </strong> </p>
    <button type="submit" name="button" class="btn btn-secondary">Acquista</button>
  `);
  i++;
});

const aggiungiAlCarrello = (prod) => {
  carrello.push(prod)
}



let buttons =  document.querySelectorAll(".btn")

buttons.forEach(button => {
   button.addEventListener("click", function(event) {
     aggiungiAlCarrello()
     console.log(event);
  button.innerHTML = "Aggiunto al carrello";
let productToAdd = document.createElement("li");
productToAdd.innerHTML = (`
  <p class="carrelloContent"> ${event.path[1].childNodes[3].innerText} ${event.path[1].childNodes[5].innerText} </p>
  `)
document.querySelector("ol").appendChild(productToAdd);
})
})

// let buyButton = createElement("button");
// buyButton.innerText = "Termina acquisto";
// document.querySelector(".carrello").append(buyButton)
//
//


// const calcolaSomma = (carrello) => {
//   let totalSum = 0;
//   for (prodotto of carrello) {
//     totalSum += prodotto.prezzo
//   }
//   return totalSum;
// }
//
// const mostraSomma = () => {
// let pSomma = document.createElement('p')
// let sommaTotale = calcolaSomma(carrello)
// pSomma.innerText = `Somma da pagare ${sommaTotale} Euro.`
// document.querySelector(".carrello").appendChild(pSomma)
// }
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
