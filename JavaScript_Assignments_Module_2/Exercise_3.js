'use strict';
const dogs = [prompt('first dog'),prompt('Second dog'),prompt('Third dog'),prompt('fourth dog'),prompt('Five dog'),prompt('Sixth dog')];
const lista = document.querySelector("#names");
dogs.sort();
dogs.reverse()
for (let n=0; n<dogs.length; n++){
    lista.innerHTML += `<ol>${dogs[n]}</ol>`;
}