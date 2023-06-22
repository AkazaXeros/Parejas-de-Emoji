"use strict";

import { emojisArray } from "./data.js";
import {  suffledArray, generateCards, reset } from "./functions.js"

let attempts = 0;


//MANIPULACIÓN DEL DOM
const score = document.querySelector(".score");
const resetBtn = document.querySelector('#resetBtn');

resetBtn.addEventListener("click", reset);

score.textContent = attempts; //inicializamos el contador


suffledArray(emojisArray);
generateCards();

