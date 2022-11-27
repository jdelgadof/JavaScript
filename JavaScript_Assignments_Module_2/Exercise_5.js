'use strict';

let numeros = [];

while (true) {
  let number = parseInt(prompt("Give me a number!"));
  if (numeros.includes(number)) {
    alert("This number has already been given.")
    break
  }
  numeros.push(number);
}
numeros.sort(function (a, b) {return a-b})
console.log(numeros)