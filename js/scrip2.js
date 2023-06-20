let selectedCards = []; // Variable para almacenar las cartas seleccionadas

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (card.classList.contains('matched')) {
            // Si la carta ya ha sido emparejada, no hacer nada
            return;
        }

        if (selectedCards.length < 2) {
            // Voltear la carta seleccionada
            card.classList.add('selected');
            selectedCards.push(card);

            if (selectedCards.length === 2) {
                const card1 = selectedCards[0];
                const card2 = selectedCards[1];

                if (card1.dataset.value === card2.dataset.value) {
                    // Las cartas son iguales
                    card1.classList.add('matched');
                    card2.classList.add('matched');
                } else {
                    // Las cartas son diferentes, voltea las cartas después de un breve retraso
                    setTimeout(() => {
                        card1.classList.remove('selected');
                        card2.classList.remove('selected');
                    }, 1000);
                }

                selectedCards = []; // Reinicia el array de cartas seleccionadas
            }
        }
    });
});
