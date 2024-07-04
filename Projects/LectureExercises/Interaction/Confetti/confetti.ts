console.log("Hello!")

interface ConfettiPiece {

    positionX: number,
    positionY: number,
    speedX: number,
    speedY: number,
    yBoost: number,
    size: number,
    color: string,
    circle: boolean,
    bounce: number,
    bounceCount: number,
}
const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

let confetti: ConfettiPiece[] = [];

canvas.addEventListener("click", handleClick);

requestAnimationFrame(animationFrame);

function handleClick(_event: MouseEvent): void {

    let x = _event.offsetX;
    let y = _event.offsetY;
    if( _event.shiftKey == true) {
        confettiExplosion(x,y);
    }
    else {
        spawnRandomConfettiPiece(x,y);
    }
}

function spawnRandomConfettiPiece(_x: number, _y: number): void {

    let direction: number = 1;
    if (getRandomBoolean() == true) {
        direction = -1;
    }

    let preSize: number = Math.floor(Math.random() * 30) + 10;

    let newConfetti: ConfettiPiece = {

        positionX: _x,
        positionY: _y,
        speedX: (Math.floor(Math.random() * 5) + 1) * direction,
        speedY: Math.floor(Math.random() * 5) + 1,
        yBoost: Math.floor(Math.random() * 20) + 10,
        size: preSize,
        color: getRandomColor(),
        circle: getRandomBoolean(),
        bounce: 20,
        bounceCount: 1,
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

function confettiExplosion(_x: number, _y: number) {

    for(let i: number = 0; i<100; i++)
        spawnRandomConfettiPiece(_x,_y);

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
                if (piece.bounceCount < 12) { 
                    piece.positionY = piece.positionY - 1;
                    piece.yBoost = piece.bounce/piece.bounceCount;
                    piece.bounceCount += 1;
                    }
                
            }
            else {
                piece.positionX = piece.positionX + piece.speedX;
                piece.positionY = piece.positionY + piece.speedY + gravity - piece.yBoost;
            }
        }
        else {
            if (piece.positionY >= canvas.height - piece.size/2) {
                piece.speedX = 0;
                piece.speedY = 0;
                if (piece.bounceCount < 5) { 
                piece.positionY = piece.positionY - 1;
                piece.yBoost = piece.bounce/piece.bounceCount;
                piece.bounceCount += 1;
                }

                
                
            }
            else {
                piece.positionX = piece.positionX + piece.speedX;  
                piece.positionY = piece.positionY + piece.speedY + gravity - piece.yBoost;               
            }
        }
    
        if (piece.yBoost != 0) {
        piece.yBoost = piece.yBoost - 1;
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