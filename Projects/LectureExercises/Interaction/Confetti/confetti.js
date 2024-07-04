"use strict";
console.log("Hello!");
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
let confetti = [];
canvas.addEventListener("click", handleClick);
requestAnimationFrame(animationFrame);
function handleClick(_event) {
    let x = _event.offsetX;
    let y = _event.offsetY;
    if (_event.shiftKey == true) {
        confettiExplosion(x, y);
    }
    else {
        spawnRandomConfettiPiece(x, y);
    }
}
function spawnRandomConfettiPiece(_x, _y) {
    let direction = 1;
    if (getRandomBoolean() == true) {
        direction = -1;
    }
    let preSize = Math.floor(Math.random() * 30) + 10;
    let newConfetti = {
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
function confettiExplosion(_x, _y) {
    for (let i = 0; i < 100; i++)
        spawnRandomConfettiPiece(_x, _y);
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
                if (piece.bounceCount < 12) {
                    piece.positionY = piece.positionY - 1;
                    piece.yBoost = piece.bounce / piece.bounceCount;
                    piece.bounceCount += 1;
                }
            }
            else {
                piece.positionX = piece.positionX + piece.speedX;
                piece.positionY = piece.positionY + piece.speedY + gravity - piece.yBoost;
            }
        }
        else {
            if (piece.positionY >= canvas.height - piece.size / 2) {
                piece.speedX = 0;
                piece.speedY = 0;
                if (piece.bounceCount < 5) {
                    piece.positionY = piece.positionY - 1;
                    piece.yBoost = piece.bounce / piece.bounceCount;
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