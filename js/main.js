'use strict';

import { showCenter, hideAllPanel, showPanel } from './functions.js';

//MANIPULACIÓN DEL DOM
const start = document.querySelector('.start');

main();

function main() {
  showPanel(start);
  const startButton = start.querySelector('#startBtn');

  startButton.addEventListener('click', () => {
    hideAllPanel();
    showCenter();
  });
}
