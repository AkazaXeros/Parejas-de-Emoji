"use strict";

function reveal(e) {
    const currentCard = e.currentTarget;
    console.log(currentCard);
    console.log(e);
    currentCard.classList.add('flipped');

    setTimeout(() => {
        currentCard.classList.remove('flipped');
    }, 1000);
}



const cards = document.querySelectorAll('.card');
// cards.forEach(card => {
//   card.addEventListener('click', () => {
//     // Aquí se ejecutará el código cuando se haga clic en una carta
//   });
// });

let selectedCards = []; // Variable para almacenar las cartas seleccionadas

cards.forEach(card => {
    card.addEventListener('click', (e) => {
        card.classList.add('selected'); // Agrega una clase "selected" a la carta seleccionada
        selectedCards.push(card); // Agrega la carta seleccionada al array de cartas seleccionadas

        if (selectedCards.length === 2) {
            const card1 = selectedCards[0];
            const card2 = selectedCards[1];

            // Compara los valores de las cartas seleccionadas
            if (card1.dataset.value === card2.dataset.value) {
                // Las cartas son iguales, realiza la lógica correspondiente (p. ej., ocultar las cartas)
            } else {
                // Las cartas son diferentes, realiza la lógica correspondiente (p. ej., voltear las cartas de nuevo)
            }

            selectedCards = []; // Reinicia el array de cartas seleccionadas
        }
    });
});
