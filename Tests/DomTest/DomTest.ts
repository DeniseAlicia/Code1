console.log("Hello There")

let spanElement: HTMLSpanElement = document.getElementById("idHello")!;
let element2: HTMLSpanElement = document.querySelector("span#idHello")!;

spanElement.textContent = "world";
console.log(element2);





let i: number = 0;
do {
    i++;
    console.log(i);
    
    let newSpan: HTMLSpanElement = document.createElement("span");
    newSpan.textContent = "hello";
    newSpan.style.backgroundColor = "purple";

    document.body.appendChild(newSpan);

    console.log("newSpan");
} while (i < 10);
