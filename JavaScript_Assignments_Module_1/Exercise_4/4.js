'use strict';
const name = prompt('What is your name: ');
let hat = Math.floor(Math.random() * 4)+1;
document.querySelector('#target3').innerHTML = hat;
switch (hat){
    case 1:
        document.querySelector('#target4').innerHTML = `${name}, You are a Griffindor`;
        break;
        case 2:
            document.querySelector('#target4').innerHTML = `${name}, You are a Slytherin`;
            break;
        case 3:
            document.querySelector('#target4').innerHTML = `${name}, You are a Hufflepuff`;
            break;
        case 4:
            document.querySelector('#target4').innerHTML = `${name}, You are a Ravenclaw`;
            break;
    }