"use strict";
import { emojisArray } from "./data.js";

//VARIABLES GLOBALES
let firstCard = null; // null porque  el valor aún no esta asignado
let secondCard = null;
let attempts = 0;
let lockBoard = false; // 

// teniamos un problema de que podiamos clicar dos veces a la primera carta, dandole así el valor de la primera carta a la segunda también y ya no seguia el juego. Tambien se podian clicar mas de dos cartas a la vez.


//MANIPULACIÓN DEL DOM
const score = document.querySelector(".score");
const resetBtn = document.querySelector('#resetBtn');
const mainElement = document.querySelector("#container")

resetBtn.addEventListener("click", reset);

score.textContent = attempts; //inicializamos el contador


suffledArray(emojisArray);
generateCards();


