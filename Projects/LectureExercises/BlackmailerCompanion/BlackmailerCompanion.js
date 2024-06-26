"use strict";
console.log("Hello There");
let chosenCharacter;
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    let mail = document.querySelector("div#mail");
    mail.addEventListener("click", placeLetter);
    document.addEventListener("keydown", chooseCharacter);
}
function placeLetter(_event) {
    //console.log(_event);
    let x = _event.offsetX;
    let y = _event.offsetY;
    let mail = _event.target;
    let letter = document.createElement("span");
    mail.appendChild(letter);
    letter.textContent = chosenCharacter;
    letter.style.left = x + "px";
    letter.style.top = y + "px";
}
function chooseCharacter(_event) {
    //console.log(_event);
    chosenCharacter = _event.key;
}
