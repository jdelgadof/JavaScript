'use strict';
const dice = prompt('Type a number: ');
let sum = 0;
let roll;
for (let i = 1; i<=dice; i++){
    roll = Math.floor(Math.random() * 6)+1;
    console.log(roll);
    sum += roll;
}
document.querySelector('#target7').innerHTML = `The sum of the rolls are ${sum}`;
