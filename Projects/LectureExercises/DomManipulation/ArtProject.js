"use strict";
console.log("Hello There");
let i = 0;
let iLimit = Math.floor(Math.random() * 200 + 10);
let randomWords = ["Discovery", "Fullfilment", "Happiness", "Joy", "Balance"];
let randomColor = ["blue", "green", "pink", "purple", "orange", "yellow"];
//creating the random words (if more complex, e.g. adding shapes, break up into functions)
do {
    i++;
    let newWord = document.createElement("span");
    //pick random word from randomWords array
    let wordIndex = Math.floor(Math.random() * randomWords.length);
    newWord.textContent = randomWords[wordIndex];
    //generate random font size between 0 and 150, then add 20
    let fontSize = String(Math.floor(Math.random() * 150 + 20)) + "px"; //px as unit for css
    newWord.style.fontSize = fontSize;
    //chooses and applies random color to the text
    let colorIndex = Math.floor(Math.random() * randomColor.length);
    let color = randomColor[colorIndex];
    newWord.style.color = color;
    console.log(color);
    //positions the word
    let positionX = String(Math.floor(Math.random() * innerHeight)) + "px"; //px as unit for css
    let positionY = String(Math.floor(Math.random() * innerWidth)) + "px";
    newWord.style.position = "relative";
    newWord.style.top = positionX;
    newWord.style.left = positionY;
    newWord.addEventListener("click", hndClick);
    document.body.appendChild(newWord);
} while (i < iLimit);
document.body.addEventListener("click", hndClick);
function hndClick(_event) {
    let target = _event.currentTarget;
    if (target == document.body)
        return;
    target.textContent = "Ouch!";
    target.style.backgroundColor = "red";
}
;
