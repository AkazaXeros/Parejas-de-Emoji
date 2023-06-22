"use strict";

//functions con export-import al main

// Creamos una función para revelar la carta y aplicar flipped
function reveal(event) {
    if (lockBoard) return; //

    let card = event.currentTarget; // carta = click en el article
    card.classList.add("flipped"); //le añadimos la clase flipped si:
    if (card === firstCard) return;
    // comparamos las variables de las cartas
    if (!firstCard) {
        firstCard = card;
        return
        //si firstcard no tiene valor asignado (es decir es null) entonces se le asigna el valor de la carta atual (card) a la variable
    }
    secondCard = card;
    //si secondcard no tiene valor asignado (es decir es null) entonces se le asigna el valor de la carta atual (card) a la variable
    attempts++; //+1 intento cuando cliquemos dos cartas
    score.textContent = attempts; //actualiza el contador
    lockBoard = true;
    checkForMatch();

}


//*dataset use:
//For example, a data-abc-def attribute (in index) corresponds to dataset.abcDef. So in this case data-name (in index) corresponds to dataset.name in JS



//contador que aumente en uno cuando dos cartas se revelan (done)

// reset button : attempts -->0 / cartas reverso / suffle (done)

function reset() {
    attempts = 0;
    resetValues();
    suffledArray(emojisArray);
    score.textContent = attempts;
    mainElement.innerHTML = ""; // borra la visualizacion de las cartas antes de generarlas de nuevo en el browser. Así lograremos tener siempre SOLO 16 cartas en el browser.
    generateCards();
}

// función para que las cartas se barajen. Es un función que se utiliza mucho. // de atrás hacia adelante va cambiando las posiciones de los elementos dentro del array aleatoriamente
function suffledArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        const randomItem = array[randomIndex];
        array[randomIndex] = array[i];
        array[i] = randomItem;
    }
    return array;
}

function generateCards() {
    //llamamos al main

    for (const objects of emojisArray) {
        //crear el elemento article
        const articleElement = document.createElement('article');
        //añadir la class=card
        articleElement.classList.add("card");
        articleElement.innerHTML = `
      <section class="front" data-name=${objects.id}> ${objects.emoji} </section>
      <section class="back"></section>
      `;
        //(meterlo dentro del main) appendChild
        mainElement.appendChild(articleElement);
        articleElement.addEventListener("click", reveal);
    }
}

//Esta función se encarga de quitarles el evento a las dos cartas que ya descubrimos siendo iguales
function disableCards() {
    firstCard.removeEventListener("click", reveal);
    secondCard.removeEventListener("click", reveal);
    resetValues();
}

//Se encarga de quitarle la clase flipped a las dos cartas giradas y que NO son iguales. Y devuelve los valores de las variables globales a su estado inicial: null.
function unReveal() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");
        resetValues();
    }, 1000);
}

//Se encarga de comparar los valores de dataset que le asignamos a las cartas y si no son iguales las vuelve a girar
function checkForMatch() {
    let isMatch = firstCard.querySelector(".front").dataset.name ===
        secondCard.querySelector(".front").dataset.name;
    isMatch ? disableCards() : unReveal();
}

//Se encarga de reestablecer las variables globales a su estado inicial.
function resetValues() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}