console.log("Hello!")

interface ConfettiPiece {

    positionX: number,
    positionY: number,
    speedX: number,
    speedY: number,
    size: number,
    color: string,
    circle: boolean,
}
const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

let confetti: ConfettiPiece[] = [];

canvas.addEventListener("click", spawnRandomConfettiPiece);

requestAnimationFrame(animationFrame);

function spawnRandomConfettiPiece(_event: MouseEvent): void {

    


    let newConfetti: ConfettiPiece = {

        positionX: _event.offsetX,
        positionY: _event.offsetY,
        speedX: Math.floor(Math.random() * 5) + 1,
        speedY: Math.floor(Math.random() * 5) + 1,
        size: Math.floor(Math.random() * 30) + 10,
        color: getRandomColor(),
        circle: getRandomBoolean(),
    }

    confetti.push(newConfetti);
    drawConfetti(newConfetti);

}

function drawConfetti(_confetti: ConfettiPiece): void {

    let path: Path2D = new Path2D;
    let x: number = _confetti.positionX;
    let y: number = _confetti.positionY;
    let size: number = _confetti.size;
    let color: string = _confetti.color;

    ctx.fillStyle = color;
    path.moveTo(x, y);

    if (_confetti.circle == true) {

        path.arc(x, y, size, 0, 360);
    }
    else {
        path.rect(x - size / 2, y - size / 2, size, size)

    }

    ctx.fill(path);

}

function animationFrame(): void {

    ctx.clearRect(0, 0, canvas.width, canvas.height);


    for (let i: number = 0; i < confetti.length; i++) {

        let piece: ConfettiPiece = confetti[i];
        let gravity: number = piece.size / 5;

        if (piece.circle == true) {
            if (piece.positionY >= canvas.height - piece.size) {
                piece.speedX = 0;
                piece.speedY = 0;
                
            }
            else {
                piece.positionX = piece.positionX + piece.speedX;
                piece.positionY = piece.positionY + piece.speedY + gravity;
            }
        }
        else {
            if (piece.positionY >= canvas.height - piece.size/2) {
                piece.speedX = 0;
                piece.speedY = 0;
            }
            else {
                piece.positionX = piece.positionX + piece.speedX;  
                piece.positionY = piece.positionY + piece.speedY + gravity;               
            }
        }
    


        drawConfetti(piece);

    }

    requestAnimationFrame(animationFrame);
}

function getRandomColor(): string {
    let red: string = String(Math.floor(Math.random() * 256));
    let green: string = String(Math.floor(Math.random() * 256));
    let blue: string = String(Math.floor(Math.random() * 256));

    return "rgb(" + red + "," + green + "," + blue + ")";
}

function getRandomBoolean(): boolean {

    return Math.random() >= 0.5;
}