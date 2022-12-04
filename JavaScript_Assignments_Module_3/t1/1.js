'use strict';
const olist= document.querySelector('#target')
const lista= `<li>First item</li><li>Second item</li><li>Third item</li>`;
olist.innerHTML = lista;
olist.classList.add('my-list')
