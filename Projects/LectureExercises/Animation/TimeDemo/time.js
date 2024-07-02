"use strict";
function runLater() {
    console.log("run me now!");
    //setTimeout(runLater, 1000);
}
setTimeout(runLater, 1000); //unit millisecond
let IntervalId = setInterval(runEverySecond, 40);
let runs = 0;
function runEverySecond() {
    runs++;
    console.log("Im running every second", runs);
    if (runs >= 5) {
        clearInterval(IntervalId);
    }
}
function frame() {
    console.log("frame");
    requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
