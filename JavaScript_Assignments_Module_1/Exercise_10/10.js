'use strict';
const dice = prompt('Type a number of dices: ');
const sum = prompt('what sum do you want? ');
const simulations = 100000;

let hit = 0;
for (let j=0; j<simulations; j++){
    let roll=0;
    for (let i = 0; i<dice; i++) {

        const rollo = Math.floor(Math.random() * 6) + 1;
        roll += rollo;
    }
    if (roll == sum) hit++;
}
const probability = (hit/simulations)*100
document.querySelector('#target10').innerHTML = `The probability of get ${sum} with ${dice} dices is ${probability.toFixed(2)}%`;
