'use strict';
function operation() {
    const op = document.getElementById('calculation').value;
    if (op.includes("+")){
        const nameList = op.split("+");
        let num1 = parseInt(nameList[0]);
        let num2 = parseInt(nameList[1])
        return document.getElementById('result').innerHTML=num1+num2;
    }
    else if (op.includes("-")){
        const nameList = op.split("-");
        let num1 = parseInt(nameList[0]);
        let num2 = parseInt(nameList[1])
        return document.getElementById('result').innerHTML=num1-num2;
    }
    else if (op.includes("/")){
        const nameList = op.split("/");
        let num1 = parseInt(nameList[0]);
        let num2 = parseInt(nameList[1])
        return document.getElementById('result').innerHTML=num1/num2;
    }
    else if (op.includes("*")){
        const nameList = op.split("*");
        let num1 = parseInt(nameList[0]);
        let num2 = parseInt(nameList[1])
        return document.getElementById('result').innerHTML=num1*num2;
    }
}
document.getElementById('start').addEventListener('click',operation);
