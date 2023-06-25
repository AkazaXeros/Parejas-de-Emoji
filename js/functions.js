'use strict';
import { emojisArray } from './data.js';
import { languages } from './data.js';

const mainElement = document.querySelector('#container');
const score = document.querySelector('.score');
const start = document.querySelector('.start');
const center = document.querySelector('.center');
const end = document.querySelector('.end');
const resetBtn = document.querySelector('#resetBtn');
const bodyElement = document.querySelector('body');
const homeBtn = document.querySelector('.homeBtn');
//----------------------------------------------------
const languagesElement = document.getElementById('language');
const link = document.querySelectorAll('a'); // me devuelve un array al seleccionar mas de un elemento

// elementos de la primera pantalla
const title = document.getElementById('welcome');
const goal = document.querySelector('.objetive');
const btnStart = document.getElementById('startBtn');

// elementos de la segunda pantalla
const secondTitle = document.querySelector('.title');
const contador = document.getElementById('attemptsH2');

// elementos de la tercera pantalla
const congrats = document.getElementById('congrats');
const textFinal = document.getElementById('empty');

//VARIABLES GLOBALES
let firstCard = null; // null porque  el valor aún no esta asignado
let secondCard = null;
let attempts = 0;
let pairsDiscovered = 0;
let lockBoard = false; // teniamos un problema de que podiamos clicar dos veces a la primera carta, dandole así el valor de la primera carta a la segunda también y ya no seguia el juego. Tambien se podian clicar mas de dos cartas a la vez.

//---------------Theme-----------------

const themeElement = document.querySelector('#theme');

themeElement.addEventListener('click', (event) => {
  bodyElement.classList.toggle('day');
  resetBtn.classList.toggle('day');
  homeBtn.classList.toggle('day');
});

//-----------------------------------------------

resetBtn.addEventListener('click', reset);
score.textContent = attempts; //inicializamos el contador

//------------------------------------------------

//functions con export-import al main

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
    articleElement.classList.add('card');
    articleElement.innerHTML = `
      <section class="front" data-name=${objects.id}> ${objects.emoji} </section>
      <section class="back"></section>
      `;
    //(meterlo dentro del main) appendChild
    mainElement.appendChild(articleElement);
    articleElement.addEventListener('click', reveal);
  }
}

// Creamos una función para revelar la carta y aplicar flipped
function reveal(event) {
  if (lockBoard) return; //

  let card = event.currentTarget; // carta = click en el article
  card.classList.add('flipped'); //le añadimos la clase flipped si:
  if (card === firstCard) return;
  // comparamos las variables de las cartas
  if (!firstCard) {
    firstCard = card;
    return;
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
  pairsDiscovered = 0;
  resetValues();
  suffledArray(emojisArray);
  score.textContent = attempts;
  mainElement.innerHTML = ''; // borra la visualizacion de las cartas antes de generarlas de nuevo en el browser. Así lograremos tener siempre SOLO 16 cartas en el browser.
  generateCards();
}

// función para que las cartas se barajen. Es un función que se utiliza mucho. // de atrás hacia adelante va cambiando las posiciones de los elementos dentro del array aleatoriamente

//Esta función se encarga de quitarles el evento a las dos cartas que ya descubrimos siendo iguales
function disableCards() {
  pairsDiscovered++;
  firstCard.removeEventListener('click', reveal);
  secondCard.removeEventListener('click', reveal);
  resetValues();
}

//Se encarga de quitarle la clase flipped a las dos cartas giradas y que NO son iguales. Y devuelve los valores de las variables globales a su estado inicial: null.
function unReveal() {
  setTimeout(() => {
    firstCard.classList.remove('flipped');
    secondCard.classList.remove('flipped');
    resetValues();
  }, 1000);
}

//Se encarga de comparar los valores de dataset que le asignamos a las cartas y si no son iguales las vuelve a girar
function checkForMatch() {
  if (pairsDiscovered < 8) {
    let isMatch =
      firstCard.querySelector('.front').dataset.name ===
      secondCard.querySelector('.front').dataset.name;
    isMatch ? disableCards() : unReveal();
  }
  if (pairsDiscovered === 1) {
    setTimeout(() => {
      hideAllPanel();
      showEnd();
    }, 1500);
  }
}

// ---------------------------------------------------

function hideAllPanel() {
  start.classList.add('hidden');
  center.classList.add('hidden');
  end.classList.add('hidden');
}

function showEnd() {
  showPanel(end);
  const text = end.querySelector('#empty');
  const aTag = document.querySelector('.active');
  const attr = aTag.getAttribute('language');
  const finalMessage = languages[attr].textFinal;
  console.log(finalMessage);
  text.textContent = `${finalMessage} "${attempts}".`;
  const endButton = end.querySelector('.homeBtn');
  endButton.addEventListener('click', () => {
    hideAllPanel();
    main();
  });
}

function showCenter() {
  showPanel(center);
  reset();
}

function main() {
  showPanel(start);
  const startButton = start.querySelector('#startBtn');

  startButton.addEventListener('click', () => {
    hideAllPanel();
    showCenter();
  });
}

function showPanel(panel) {
  panel.classList.remove('hidden');
}
//-----------------------------------------------------

//Se encarga de reestablecer las variables globales a su estado inicial.
function resetValues() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

// ----------------------------------------------------
// función con evento click para poder modificar el idioma
link.forEach((event) => {
  event.addEventListener('click', () => {
    languagesElement.querySelector('.active').classList.remove('active');
    event.classList.add('active');

    const attr = event.getAttribute('language');

    // modificando el idioma de la primera pantalla
    title.textContent = languages[attr].firstTitle;
    goal.textContent = languages[attr].goal;
    btnStart.textContent = languages[attr].buttonStart;

    // modificando el idioma de la segunda pantalla
    secondTitle.textContent = languages[attr].secondTitle;
    contador.textContent = languages[attr].attempts;
    resetBtn.textContent = languages[attr].buttonReset;

    // modificando el idioma de la última pantalla
    congrats.textContent = languages[attr].thirdTitle;
    textFinal.textContent = languages[attr].textFinal;
    homeBtn.textContent = languages[attr].buttonHome;
  });
});

export { hideAllPanel, showCenter, showPanel };
