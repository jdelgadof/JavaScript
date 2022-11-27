'use strict';

let Array = ["Johnny", "DeeDee", "Joey", "Marky"];

function concat(stringArray) {
  let returnString = "";
  for (let string of stringArray) {
    returnString += string;
  }
  return returnString;
}

document.querySelector('#concat').innerHTML = concat(Array);