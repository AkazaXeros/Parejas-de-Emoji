"use strict";

const articleElement = document.querySelector("article")
// const button = document.querySelector("#resetBtn")
articleElement.addEventListener("click", reveal)

//funcion que de la vuelta a la carta (article)
function reveal(event) {
    const currentCard = event.target;
    // console.log(currentCard);
    currentCard.classList.add("flipped");
    // console.log(event);
    console.log(currentCard);
}



// console.log(articleElement);

// *Here goes the conditional expression.

//  1- If equal textContent, don't apply the setTimeOut function.

// 1.1--find out the textContent of the tag element over which we are iterating.



//array de obajetos emojis
//funcion que nos los haga random
//crear las cartas de manera dinamica

















