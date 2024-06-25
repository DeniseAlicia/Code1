console.log("Hello There");

let i: number = 0;
let iLimit: number = Math.floor(Math.random()*20 + 5);

let randomWords = ["Discovery", "Discovery", "Fullfilment", "Happiness", "Joy", "Balance"];
let randomColor = ["red", "red", "blue", "green", "pink", "purple", "orange", "yellow"]


do{
    i++
    let newWord: HTMLSpanElement = document.createElement("span");

    let wordIndex: number = Math.floor(Math.random()*randomWords.length);
    newWord.textContent = randomWords[wordIndex];

    let fontSize: string = String(Math.floor(Math.random()*500 + 20));
    newWord.style.fontSize = fontSize;

    let colorIndex: number = Math.floor(Math.random()*randomColor.length);
    let color: string = randomColor[colorIndex];
    newWord.style.color = color;
    console.log(color);

    document.body.appendChild(newWord);

} while (i < iLimit);