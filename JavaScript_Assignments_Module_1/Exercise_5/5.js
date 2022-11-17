'use strict';   
const year = parseInt(prompt('Type a year: '));
if ((year % 4 == 0) && (year % 100 !=0) ||(year % 400 ==0)){
    document.querySelector('#targe5').innerHTML = year + " IS a leap of the year"
} else {
    document.querySelector('#target5').innerHTML = year + " IS NOT a leap of the year"
}