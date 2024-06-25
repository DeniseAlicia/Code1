console.log("Hello There");

let i: number = 0;
let iLimit: number = Math.floor(Math.random()*20);

let randomWords = ["Discovery", "Fullfilment", "Happiness", "Joy", "Balance"];
let randomColor = ["red", "blue", "green", "pink", "purple", "orange", "yellow"]


do{
    i++
    let newWord: HTMLSpanElement = document.createElement("span");

    let wordIndex: number = Math.floor(Math.random()*randomWords.length -1);
    newWord.textContent = randomWords[wordIndex];

    let fontSize: number = Math.floor(Math.random()*500);
    newWord.style.fontSize = String(fontSize);

    let colorIndex: number = Math.floor(Math.random()*randomColor.length -1);
    let color: string = randomColor[colorIndex];
    newWord.style.color = color;

    document.body.appendChild(newWord);

} while (i < iLimit);