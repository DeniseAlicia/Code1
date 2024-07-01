"use strict";
console.log("hello");
//initiiate canvas
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
let shelfOffset = 50;
let rowHeight = 300;
//drawing the shelf
let shelf = new Path2D();
ctx.fillStyle = "#5b4319";
shelf.rect(0, 0, shelfOffset, canvas.height);
shelf.rect(0, 0, canvas.width, shelfOffset);
shelf.rect(0, canvas.height - shelfOffset, canvas.width, canvas.height);
shelf.rect(canvas.width - shelfOffset, 0, shelfOffset, canvas.height);
//drawing the shelf rows
shelf.rect(0, rowHeight + shelfOffset, canvas.width, shelfOffset);
shelf.rect(0, canvas.height - (rowHeight + 2 * shelfOffset), canvas.width, shelfOffset);
ctx.fill(shelf);
let currentRow = 1;
let maxRows = 3;
let books = [];
for (currentRow; currentRow < maxRows; currentRow++) {
    generateBooks();
    ctx.translate(shelfOffset, rowHeight * currentRow + shelfOffset * currentRow);
    drawBooks(books);
}
//generating the books
function generateBooks() {
    let bookCount = Math.floor(Math.random() * 10) + 2;
    for (let i = 0; i < bookCount; i++) {
        let newBook = {
            height: Math.floor(Math.random() * 140) + 150,
            width: Math.floor(Math.random() * 50) + 50,
            color: getRandomColor(),
            skew: randomBoolean(),
        };
        books.push(newBook);
    }
    return books;
}
//drawing the books
function drawBooks(_books) {
    for (let t = 0; t < _books.length; t++) {
        let book = _books[t];
        let path = new Path2D();
        ctx.fillStyle = book.color;
        ctx.strokeStyle = "black";
        path.rect(0, 0, book.width, -book.height);
        ctx.fill(path);
        ctx.stroke(path);
        ctx.translate(book.width, 0);
    }
    ctx.resetTransform();
}
function getRandomColor() {
    let red = String(Math.floor(Math.random() * 256));
    let green = String(Math.floor(Math.random() * 256));
    let blue = String(Math.floor(Math.random() * 256));
    return "rgb(" + red + "," + green + "," + blue + ")";
}
function randomBoolean() {
    return (Math.floor(Math.random()) >= 0.9);
}
//# sourceMappingURL=ComplexImage.js.map