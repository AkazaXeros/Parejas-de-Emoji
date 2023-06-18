'use strict';

let card1;
let card2;
let cardValues = [];
const cards = document.querySelectorAll('.card');

// function reveal(e) {
//   const currentCard = e.currentTarget;
//   console.log(currentCard);
//   console.log(e);
//   currentCard.classList.add('flipped');

// *Here goes the conditional expression.

//  1- If equal textContent, don't apply the setTimeOut function.

// 1.1--find out the textContent of the tag element over which we are iterating.

//   setTimeout(() => {
//     currentCard.classList.remove('flipped');
//   }, 1000);
// }

function reveal1(e) {
  const currentCard = e.currentTarget;
  let currentCardBack = currentCard.querySelector('.back');
  console.log(currentCardBack);
  cardValues.push(currentCardBack.textContent);

  // console.log(card1);
  console.log(cardValues);

  faceUp(currentCard);
  console.log(cardValues.length === 2);
  if (cardValues.length === 2) {
    if (!compareValues(cardValues)) {
      setTimeout(() => {
        faceDown(currentCard);
        console.log(currentCard);
        faceDown(card1);
        console.log(card1);
        cardValues = [];
      }, 1000);
    }
  }
  card1 = currentCard;

  // removeClickListener(cards, reveal);
  // addClickListener(cards, comparationAndReveal);
}
// randomizeCards();
// reveal1();

for (const card of cards) {
  card.addEventListener('click', reveal1);
}

// console.log(cards);

// *Function to shuffle cards. We have to provide and array with the emojis and the textContent will be applied to the cards randomly every time a game is played.

const numbers = [1, 2, 3, 4];
function shuffle(array) {
  //  1            1>0     1--
  for (let i = array.length - 1; i > 0; i--) {
    //    j  =            0-0.999(0.4)     1+1 = 2                 Math.floor( 0.4*2 = 0.8)= 0
    const j = Math.floor(Math.random() * (i + 1));
    // arr[1]=3    arr[0]=1  =   [3, 1, 4, 2]
    [array[i], array[j]] = [array[j], array[i]];
    console.log(array);
  }
  return array;
}

// shuffle(numbers);

const emojis = [
  '💻',
  '💻',
  '🦁',
  '🦁',
  '💩',
  '💩',
  '🤖',
  '🤖',
  '🤓',
  '🤓',
  '🥶',
  '🥶',
  '😃',
  '😃',
  '👹',
  '👹',
];

function randomizeCards() {
  const emojis = [
    '💻',
    '💻',
    '🦁',
    '🦁',
    '💩',
    '💩',
    '🤖',
    '🤖',
    '🤓',
    '🤓',
    '🥶',
    '🥶',
    '😃',
    '😃',
    '👹',
    '👹',
  ];

  const playBoard = document.querySelector('#playboard');
  const frontDivs = playBoard.getElementsByClassName('front');
  console.log(frontDivs);
  const shuffledEmojis = shuffle(emojis);
  console.log(shuffledEmojis);

  for (let i = 0; i < shuffledEmojis.length; i++) {
    frontDivs[i].textContent = shuffledEmojis[i];
  }
}

function faceUp(card) {
  card.classList.add('flipped');
}

function faceDown(card) {
  card.classList.remove('flipped');
}

// export const removeClickListener = (arrayWithListener, clickEvent) => {
//   for (const card of arrayWithListener) {
//     card.removeEventListener('click', clickEvent);
//   }
// };
// export const addClickListener = (arrayWithListener, clickEvent) => {
//   for (const card of arrayWithListener) {
//     card.addEventListener('click', clickEvent);
//   }
// };

// *Revealing and Comparing functions

function compareValues(array) {
  return array[0] === array[1];
}
