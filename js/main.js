"use strict";

//Encontrar el value del data-name(string)
let card2 = document.querySelectorAll(".front");
for (let card of card2) {
  let card2Value = card.getAttribute("data-name");
  console.log(card2Value);
}

const articleElement = document.querySelectorAll("article");
// console.log(articleElement);

// lograr que giren dos cartas (feito)
for (let card of articleElement) {
  card.addEventListener("click", reveal);
  // es algo que tenemos que implementar

  //   console.log(card);
  //   if (card1 !== card2) {
  //     setTimeout(() => {
  //       card.classList.remove("flipped");
  //     }, 1000);
  //   }
}

// lograr seleccionar las cartas.

// lograr que las cartas se vuelvan a girar(feitiño)
//funcion que de la vuelta a la carta (article) y a los 2sec la vuelva a girar
function reveal(event) {
  const currentCard = event.currentTarget;
  currentCard.classList.add("flipped");
}

// const button = document.querySelector("#resetBtn")
