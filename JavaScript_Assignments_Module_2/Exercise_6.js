'use strict';

function rollDice() {
  return Math.floor(6*Math.random())+1;
}
let rollList = [];
while (true) {
  let diceRoll = parseInt(rollDice());
  rollList.push(diceRoll);
  if (diceRoll === 6) {
    break;
  }
}
for (let rolls of rollList) {
      document.querySelector('#lista').innerHTML += `<li>${rolls}</li>`;
}