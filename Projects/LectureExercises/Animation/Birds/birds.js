"use strict";
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
let birds = createBirds(10);
drawBirds();
function createBirds(_amount) {
    for (let i = 0; i < _amount; i++) {
        let bird = {
            x: Math.floor(Math.random() * 600),
            y: Math.floor(Math.random() * 600),
            size: Math.floor(Math.random() * 50) + 10,
        };
        birds.push(bird);
    }
    return birds;
}
function drawBird(_bird) {
    let path = new Path2D();
    path.rect(_bird.x, _bird.y, _bird.size, _bird.size);
    ctx.fill(path);
}
function drawBirds() {
    for (let i = 0; i < birds.length; i++) {
        let bird = birds[i];
        drawBird(bird);
    }
}
const speed = 1;
function updateBirds() {
    for (let i = 0; i < birds.length; i++) {
        birds[i].x += speed;
    }
}
let previousFrame;
function animationFrame(_elapsedTime) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateBirds();
    drawBirds();
    requestAnimationFrame(animationFrame);
}
requestAnimationFrame(animationFrame);
