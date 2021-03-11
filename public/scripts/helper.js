function Product { nome, colore, taglie, materiale, descrizione, prezzo}
  this.nome: nome,
  this.colore: colore,
  this.taglie: taglie,
  this.materiale: materiale,
  this.descrizione: descrizione
  this.prezzo: prezzo,
}

let canottieraEllegi = new Product { "canottiera", ['blu', 'nero', 'rosso'], "cotone", "Nuovo prodotto di Ellegi", 25}

let canottieraSie = new Product { "canottiera", ['blu', 'nero', 'rosso'], "lana", "Nuovo prodotto di SièLei", 20}

let canottieraEllegi = new Product { "canottiera", ['blu', 'nero', 'rosso'], "cotone", "Nuovo prodotto di Ellegi", 25}

let canottieraSie = new Product { "canottiera", ['blu', 'nero', 'rosso'], "lana", "Nuovo prodotto di SièLei", 20}

let canottieraEllegi = new Product { "canottiera", ['blu', 'nero', 'rosso'], "cotone", "Nuovo prodotto di Ellegi", 25}

let canottieraSie = new Product { "canottiera", ['blu', 'nero', 'rosso'], "lana", "Nuovo prodotto di SièLei", 20}

let canottieraEllegi = new Product { "canottiera", ['blu', 'nero', 'rosso'], "cotone", "Nuovo prodotto di Ellegi", 25}

let canottieraSie = new Product { "canottiera", ['blu', 'nero', 'rosso'], "lana", "Nuovo prodotto di SièLei", 20}

let buttons =  document.querySelectorAll(".btn")

buttons.forEach(button => {
   button.addEventListener("click", function(event) {
     console.log(event);
  button.innerHTML = "Aggiunto al carrello";
let productToAdd = document.createElement("li");
productToAdd.innerHTML = event.path[1].children[0].innerHTML;
document.querySelector("ol").append(productToAdd);
})
})


                       //    button.addEventListener("click", function() {
                       //     button.innerHTML = "red"
                       //
                       //
                       // })
