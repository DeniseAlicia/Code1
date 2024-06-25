"use strict";
console.log("Hello There");
let i = 0;
let iLimit = Math.floor(Math.random() * 20 + 5);
let randomWords = ["Discovery", "Discovery", "Fullfilment", "Happiness", "Joy", "Balance"];
let randomColor = ["red", "red", "blue", "green", "pink", "purple", "orange", "yellow"];
do {
    i++;
    let newWord = document.createElement("span");
    let wordIndex = Math.floor(Math.random() * randomWords.length);
    newWord.textContent = randomWords[wordIndex];
    let fontSize = String(Math.floor(Math.random() * 500 + 20));
    newWord.style.fontSize = fontSize;
    let colorIndex = Math.floor(Math.random() * randomColor.length);
    let color = randomColor[colorIndex];
    newWord.style.color = color;
    console.log(color);
    document.body.appendChild(newWord);
} while (i < iLimit);
