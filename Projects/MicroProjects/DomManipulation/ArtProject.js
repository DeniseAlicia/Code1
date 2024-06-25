"use strict";
console.log("Hello There");
let i = 0;
let iLimit = Math.floor(Math.random() * 20);
let randomWords = ["Discovery", "Fullfilment", "Happiness", "Joy", "Balance"];
let randomColor = ["red", "blue", "green", "pink", "purple", "orange", "yellow"];
do {
    i++;
    let newWord = document.createElement("span");
    let wordIndex = Math.floor(Math.random() * randomWords.length - 1);
    newWord.textContent = randomWords[wordIndex];
    let fontSize = Math.floor(Math.random() * 500);
    newWord.style.fontSize = String(fontSize);
    let colorIndex = Math.floor(Math.random() * randomColor.length - 1);
    let color = randomColor[colorIndex];
    newWord.style.color = color;
    document.body.appendChild(newWord);
} while (i < iLimit);
