'use strict';
const olist= document.querySelector('#target')

const a = document.createTextNode(`First item` );
const b = document.createTextNode(`Second item`);
const c = document.createTextNode(`Third item`);

const p = document.createElement('li');
const q = document.createElement('li');
const r = document.createElement('li');
p.appendChild(a);
q.appendChild(b);
r.appendChild(c);

olist.appendChild(p)
olist.appendChild(q)
olist.appendChild(r)
q.classList.add('my-item')