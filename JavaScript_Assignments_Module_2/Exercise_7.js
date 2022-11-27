'use strict';

function rollDice(Sides) {
  return Math.floor(Sides*Math.random())+1;
}
let NumberSides = parseInt(prompt("How many sides does you dice have? "))
let rollList = [];
while (true) {
  let diceRoll = parseInt(rollDice(NumberSides));
  rollList.push(diceRoll);
  if (diceRoll === NumberSides) {
    break;
  }
}
document.querySelector('#sides').innerHTML += `Rolls until get a ${NumberSides}: `;
for (let rolls of rollList) {
      document.querySelector('#lista').innerHTML += `<li>${rolls}</li>`;
}