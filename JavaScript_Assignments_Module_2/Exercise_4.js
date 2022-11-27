'use strict';
const numeros = [];
const lista = document.querySelector("#names");
let part = parseFloat(prompt('Give a number: '));
while( part !== 0) {
    numeros.push(part)
    part = parseFloat(prompt('Give a number: '));
}
numeros.sort( function (a, b) {return b-a})
console.log(numeros)