'use strict';
const numbers = [prompt('first number'),prompt('Second number'),prompt('Third number'),prompt('fourth number'),prompt('Five number')];
document.querySelector('#array').innerHTML = 'your numbers are ' + numbers + '! Check the console for the reversed ones ---->';
for (let i = numbers.length; i >0; i--) {
    console.log(`Number: ${numbers[i-1]}`);
}