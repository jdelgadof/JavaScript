'use strict';
    const a = parseFloat(prompt('Type first number.'));
    const b = parseFloat(prompt('Type second number.'));
    const c = parseFloat(prompt('Type third number.'));
    let sum = a+b+c;
    let prod = a*b*c;
    let aver = sum/3;
    document.querySelector('#target2').innerHTML = `The sum of the number is: ${sum}, the product is: ${prod} and the average is ${aver}`;
