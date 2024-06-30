"use strict";
console.log("Hello There");
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
ctx.arc(200, 200, 50, 0, 360);
ctx.fillStyle = "rgb(0,150,250)";
ctx.fill();
let path = new Path2D();
path.rect(450, 520, 150, 50),
    ctx.fillStyle = "#C80D0D";
ctx.fill(path);
ctx.closePath;
ctx.rotate(10 * Math.PI / 180);
ctx.font = "100px Arial";
ctx.direction = "ltr";
ctx.fillStyle = "#8711C2";
ctx.fillText("Hello World", 400, 200);
let path1 = new Path2D();
path;
