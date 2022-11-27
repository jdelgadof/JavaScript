'use strict';

let exampleNumberArray = [2, 7, 4, 9, 8];

function even(numberArray) {
  let returnArray = [];
  for (let number of numberArray) {
    if (number % 2 === 0) {
      returnArray.push(number);
    }
  }
  return returnArray;
}

console.log(exampleNumberArray);
console.log(even(exampleNumberArray));