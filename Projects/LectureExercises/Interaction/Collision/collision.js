"use strict";
console.log("Hello :)");
let canvas = document.getElementsByTagName("canvas")[0];
let ctx = canvas.getContext("2d");
let boxCount = Math.random() * 20 + 5;
let boxes = [];
let clickCounter = 0;
createBoxes();
drawCounter();
canvas.addEventListener("click", hndlClick);
requestAnimationFrame(animationFrame);
function hndlClick(_event) {
    let x = _event.offsetX;
    let y = _event.offsetY;
    clickCounter = clickCounter + 1;
    for (let i = 0; i < boxes.length; i++) {
        let checkedBox = boxes[i];
        if (ctx.isPointInPath(checkedBox.path, x, y)) {
            boxTeleport(checkedBox);
        }
    }
}
function createBoxes() {
    for (let i = 0; i < boxCount; i++) {
        let newBox = {
            size: Math.random() * 150 + 20,
            color: getRandomColor(),
            posX: Math.random() * canvas.width - 170,
            posY: Math.random() * canvas.height - 170,
            speed: Math.random() * 3 + 1,
            path: new Path2D,
        };
        boxes.push(newBox);
        drawBox(newBox);
    }
}
function drawBox(_box) {
    let box = _box;
    let boxPath = box.path;
    ctx.fillStyle = box.color;
    boxPath.moveTo(box.posX, box.posY);
    boxPath.rect(box.posX, box.posY, box.size, box.size);
    ctx.fill(boxPath);
}
function boxTeleport(_box) {
    _box.size = Math.random() * 150 + 20;
    _box.posX = Math.random() * canvas.width - _box.size;
    _box.posY = Math.random() * canvas.height - _box.size;
    _box.color = getRandomColor();
}
function drawCounter() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(String(clickCounter), canvas.width - 150, canvas.height - 150);
}
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < boxes.length; i++) {
        let box = boxes[i];
        if (box.posX >= canvas.width - box.size) {
            box.speed = box.speed * -1;
        }
        else if (box.posX <= box.size / 2) {
            box.speed = box.speed * -1;
        }
        box.posX = box.posX + box.speed;
        box.path = new Path2D;
        drawBox(box);
    }
    drawCounter();
    requestAnimationFrame(animationFrame);
}
function getRandomColor() {
    let red = String(Math.floor(Math.random() * 256));
    let green = String(Math.floor(Math.random() * 256));
    let blue = String(Math.floor(Math.random() * 256));
    return "rgb(" + red + "," + green + "," + blue + ")";
}
//# sourceMappingURL=collision.js.map