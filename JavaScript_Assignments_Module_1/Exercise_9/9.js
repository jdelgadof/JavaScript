'use strict';
const primo = prompt('Type a positive number to check if it is a prime number: ');
let isPrime = true;
if (primo == 1){
    document.querySelector('#target9').innerHTML = `1 is neither prime or composite number.`;
}
else if (primo > 1){
    for (let i = 2; i<primo; i++) {
        console.log(primo % i)
        if (primo % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime){
        document.querySelector('#target9').innerHTML = `${primo} is a prime number.`;
    }else {
        document.querySelector('#target9').innerHTML = `${primo} is NOT a prime number.`;
    }
}