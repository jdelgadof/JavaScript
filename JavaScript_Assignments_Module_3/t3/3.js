'use strict';
const names = ['John', 'Paul', 'Jones'];
const olist= document.querySelector('#target')
for (let n=0; n<names.length; n++) {
    olist.innerHTML += `<li>${names[n]}</li>`;
}