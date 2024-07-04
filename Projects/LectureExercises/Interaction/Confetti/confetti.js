"use strict";
console.log("Hello!");
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
let confetti = [];
canvas.addEventListener("click", spawnRandomConfettiPiece);
requestAnimationFrame(animationFrame);
function spawnRandomConfettiPiece(_event) {
    let newConfetti = {
        positionX: _event.offsetX,
        positionY: _event.offsetY,
        speedX: Math.floor(Math.random() * 5) + 1,
        speedY: Math.floor(Math.random() * 5) + 1,
        size: Math.floor(Math.random() * 30) + 10,
        color: getRandomColor(),
        circle: getRandomBoolean(),
    };
    confetti.push(newConfetti);
    drawConfetti(newConfetti);
}
function drawConfetti(_confetti) {
    let path = new Path2D;
    let x = _confetti.positionX;
    let y = _confetti.positionY;
    let size = _confetti.size;
    let color = _confetti.color;
    ctx.fillStyle = color;
    path.moveTo(x, y);
    if (_confetti.circle == true) {
        path.arc(x, y, size, 0, 360);
    }
    else {
        path.rect(x - size / 2, y - size / 2, size, size);
    }
    ctx.fill(path);
}
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < confetti.length; i++) {
        let piece = confetti[i];
        let gravity = piece.size / 5;
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
            if (piece.positionY >= canvas.height - piece.size / 2) {
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
function getRandomColor() {
    let red = String(Math.floor(Math.random() * 256));
    let green = String(Math.floor(Math.random() * 256));
    let blue = String(Math.floor(Math.random() * 256));
    return "rgb(" + red + "," + green + "," + blue + ")";
}
function getRandomBoolean() {
    return Math.random() >= 0.5;
}
//# sourceMappingURL=confetti.js.map