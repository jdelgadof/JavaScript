'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const olist = document.querySelector('#target');

for (let n=0; n<students.length; n++) {
  let a = document.createElement('option');
  a.value = (students[n]["id"])
  a.innerHTML = (students[n]["name"])
  olist.appendChild(a)
}

