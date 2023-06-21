"use strict";

//Encontrar el value del data-name(string)
//let cards = document.querySelectorAll(".front");
//for (let card of card1) {
//let card1Value = card.getAttribute("data-name");

//}

// function reveal(event) {
//   const currentCard = event.currentTarget;
//   currentCard.classList.add("flipped");
// }

const articleElement = document.querySelectorAll("article");
let firstCard = null; // null porque  el valor aún no esta asignado
let secondCard = null;

// recorremos el array articleElemnt para aplicar el evento click
for (let card of articleElement) {
  card.addEventListener("click", reveal);
}
// Creamos una función para revelar la carta y aplicar flipped
function reveal(event) {
  let card = event.currentTarget; // carta = click en el article
  card.classList.add("flipped"); //le añadimos la clase flipped si:
  // comparamos las variables de las cartas
  if (!firstCard) {
    firstCard = card;
    //si firstcard no tiene valor asignado (es decir es null) entonces se le asigna el valor de la carta atual (card) a la variable
  } else if (!secondCard) {
    secondCard = card;
    //si secondcard no tiene valor asignado (es decir es null) entonces se le asigna el valor de la carta atual (card) a la variable
    if (
      //cuando tiene el valor de la segunda lo compara con el valor de la primera
      firstCard.querySelector(".front").dataset.name ===
      secondCard.querySelector(".front").dataset.name
    ) {
      //console.log("Las cartas son iguales");
      //si son iguales se restablecen los valores de las variables para poder seleccionar 2 cartas nuevas
      firstCard = null;
      secondCard = null;
    } else {
      //console.log("Las cartas no son iguales");
      // cuando no son iguales se quita la clase flipped (las cartas se giran) en 1sec
      setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        firstCard = null;
        secondCard = null;
      }, 1000);
    }
  }
}

/* cosas que nos faltan
  - boton start
  - array js con emojis 
  - función match.random para barajar las cartas 
  - modificar el juego ya creado para que llame a los emojis





*/

//For example, a data-abc-def attribute = data-name(del index) corresponds to dataset.abcDef = dataset.name

// const articleElement = document.querySelectorAll("article");
// console.log(articleElement);

// lograr que giren dos cartas (feito)
// for (let card of articleElement) {
//   card.addEventListener("click", reveal);
// es algo que tenemos que implementar

//   console.log(card);
//   if (card1 !== card2) {
//     setTimeout(() => {
//       card.classList.remove("flipped");
//     }, 1000);
//   }
//}

// lograr seleccionar las cartas.

// lograr que las cartas se vuelvan a girar(feitiño)
//funcion que de la vuelta a la carta (article) y a los 2sec la vuelva a girar
// function reveal(event) {
//   const currentCard = event.currentTarget;
//   currentCard.classList.add("flipped");
// }

// const button = document.querySelector("#resetBtn")

// another option

// let cards = document.querySelectorAll(".card");
//   for (let i = 0; i < cards.length; i++) {
//     for (let j = i + 1; j < cards.length; j++) {
//       if (
//         cards[i].querySelector(".front").dataset.name ===
//         cards[j].querySelector(".front").dataset.name
//       ) {
//         cards[i].classList.add("flipped");
//         cards[j].classList.add("flipped");
//         //console.log("Las cartas son iguales");
//       } else {
//         //console.log("Las cartas no son iguales");
//         setTimeout(() => {
//           cards[i].classList.remove("flipped");
//           cards[j].classList.remove("flipped");
//         }, 1000);
//       }
//     }
//   }
