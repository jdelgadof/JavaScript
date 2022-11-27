'use strict';
const part = prompt('number of participants');
const names = [];
const lista = document.querySelector("#names");
for (let i = 0; i <part; i++) {
    let name = prompt('name of participant? ');
    names.push(name);
    console.log(`name: ${name}`); // To check the names in the console
}
names.sort();
for (let n=0; n<names.length; n++){
    lista.innerHTML += `<ol>${names[n]}</ol>`;
}

//document.querySelector('#names').innerHTML = 'your number of participants are ' + part + '!';
//document.querySelector('#names2').innerHTML = 'list of names: '+ names ;
