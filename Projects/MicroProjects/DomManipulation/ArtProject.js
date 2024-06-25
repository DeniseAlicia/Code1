"use strict";
console.log("Hello There");
let i = 0;
let iLimit = Math.floor(Math.random() * 50 + 5); //generate and round number between 20 and 0, then add 5
let randomWords = ["Discovery", "Discovery", "Fullfilment", "Happiness", "Joy", "Balance"];
let randomColor = ["red", "red", "blue", "green", "pink", "purple", "orange", "yellow"];
//creating the random words
do {
    i++;
    let newWord = document.createElement("span");
    //pick random word from randomWords array
    let wordIndex = Math.floor(Math.random() * randomWords.length);
    newWord.textContent = randomWords[wordIndex];
    //generate random font size between 0 and 150, then add 20
    let fontSize = String(Math.floor(Math.random() * 150 + 20)) + "px"; //px as unit for css
    newWord.style.fontSize = fontSize;
    console.log(fontSize);
    //chooses and applies random color to the text
    let colorIndex = Math.floor(Math.random() * randomColor.length);
    let color = randomColor[colorIndex];
    newWord.style.color = color;
    console.log(color);
    //positions the word randomly on the page
    let positionLeft = String(Math.floor(Math.random() * 5)) + "px"; //px as unit for css
    let positionTop = String(Math.floor(Math.random() * 500)) + "px";
    newWord.style.position = "relative";
    newWord.style.left = positionLeft;
    newWord.style.top = positionTop;
    document.body.appendChild(newWord);
} while (i < iLimit);
