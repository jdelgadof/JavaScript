'use strict';

function operation() {
    const op = document.getElementById('operation').value;
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    if (op === "add"){
        return document.getElementById('result').innerHTML= num1 + num2;
    }
    else if (op === "sub"){
        return document.getElementById('result').innerHTML= num1 - num2;
    }
    else if (op === "multi"){
        return document.getElementById('result').innerHTML= num1 * num2;
    }
    else if (op === "div"){
        return document.getElementById('result').innerHTML= num1 / num2;
    }
}
document.getElementById('start').addEventListener('click',operation);