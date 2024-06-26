console.log("Hello There");

let chosenCharacter: string;
window.addEventListener("load", handleLoad);

function handleLoad(_event: Event): void{
    let mail: HTMLElement = document.querySelector("div#mail")!;
    mail.addEventListener("click", placeLetter);
    document.addEventListener("keydown", chooseCharacter);
}

function placeLetter(_event: MouseEvent): void {
    //console.log(_event);
    let x: number = _event.offsetX;
    let y: number = _event.offsetY;

    let mail: HTMLElement = <HTMLElement> _event.target;
    let letter: HTMLSpanElement = document.createElement("span");

    mail.appendChild(letter);
    letter.textContent = chosenCharacter;
    letter.style.left = x + "px";
    letter.style.top = y + "px";

}

function chooseCharacter(_event: KeyboardEvent): void {
    //console.log(_event);
    chosenCharacter = _event.key;
}