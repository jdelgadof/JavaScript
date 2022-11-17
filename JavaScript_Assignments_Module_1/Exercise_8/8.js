'use strict';
let inicial = prompt('Type the initial year')
const last = prompt('Type the final year')
const lista = document.querySelector("#target8");
for (let j=inicial; j<=last; j++){
    if ((j % 4 == 0) && (j % 100 !=0) ||(j % 400 ==0)){
        lista.innerHTML += `<li>${j}</li>`;
        console.log(j)
    }
}
/*    document.querySelector('#target9').innerHTML = lista
let list = document.getElementById("UnList")
var fragList = document.createDocumentFragment();
for (i = 0; i < lista.length; ++i) {
    var li = document.createElement('li');
    li.textContent = lista[i];
    fragList.appendChild(li);
}
list.appendChild(fragList);

 */
