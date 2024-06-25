"use strict";
console.log("Hello There");
let spanElement = document.getElementById("idHello");
let element2 = document.querySelector("span#idHello");
spanElement.textContent = "world";
console.log(element2);
let i = 0;
do {
    i++;
    console.log(i);
    let newSpan = document.createElement("span");
    newSpan.textContent = "hello";
    newSpan.style.backgroundColor = "purple";
    document.body.appendChild(newSpan);
    console.log("newSpan");
} while (i < 10);
