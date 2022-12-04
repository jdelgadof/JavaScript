'use strict';
function clickAlert() {
    alert("Button Clicked");
}
let btn = document.querySelector("button");
btn.addEventListener('click', clickAlert);
