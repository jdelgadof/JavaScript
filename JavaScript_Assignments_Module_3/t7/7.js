'use strict';
function HoverEffectOn() {
    document.getElementById("target").src = "img/picB.jpg";
}
function HoverEffectOff() {
    document.getElementById("target").src = "img/picA.jpg";
}
document.getElementById("trigger").addEventListener("mouseover", HoverEffectOn);
document.getElementById("trigger").addEventListener("mouseout", HoverEffectOff);