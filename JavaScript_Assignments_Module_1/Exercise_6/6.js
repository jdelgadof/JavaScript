'use strict';

const answer = confirm('Should I calculate the square root?');
let root;
if (answer == true){
    let numSQR = parseFloat(prompt('Type a number: '));
        if (numSQR <0){
            document.querySelector('#target6').innerHTML ='The square root of a negative number is not defined, Type a valid number, bigger or equal to zero: '
        }
        else if(numSQR >=0) {
            root = numSQR ** (1 / 2);
            document.querySelector('#target6').innerHTML = `The square root of ${numSQR} is ${root}`
        }
}
else {
    document.querySelector('#target6').innerHTML = `The square root is not calculated`
}