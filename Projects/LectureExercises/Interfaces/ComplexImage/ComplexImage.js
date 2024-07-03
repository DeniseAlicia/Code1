"use strict";
console.log("hello");
//initiiate canvas
const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");
let shelfOffset = 50;
let rowHeight = 300;
//setting up some variables
let currentRow = 1;
let maxRows = 3;
let shelf = [];
let spiders = [];
//main program
drawShelf();
for (currentRow; currentRow <= maxRows; currentRow++) {
    let bookRow = generateBooks();
    shelf.push(bookRow);
    ctx.translate(shelfOffset, rowHeight * currentRow + shelfOffset * currentRow);
    drawBooks(bookRow);
}
generateSpiders();
drawSpiders(spiders);
requestAnimationFrame(animationFrame);
function drawShelf() {
    let shelf = new Path2D();
    ctx.strokeStyle = "black";
    ctx.fillStyle = "#5b4319";
    ctx.lineWidth = 2;
    shelf.rect(0, 0, shelfOffset, canvas.height);
    shelf.rect(0, 0, canvas.width, shelfOffset);
    shelf.rect(0, canvas.height - shelfOffset, canvas.width, canvas.height);
    shelf.rect(canvas.width - shelfOffset, 0, shelfOffset, canvas.height);
    //drawing the shelf rows
    shelf.rect(0, rowHeight + shelfOffset, canvas.width, shelfOffset);
    shelf.rect(0, canvas.height - (rowHeight + 2 * shelfOffset), canvas.width, shelfOffset);
    ctx.stroke(shelf);
    ctx.fill(shelf);
}
//generating the books
function generateBooks() {
    let books = [];
    let bookCount = Math.floor(Math.random() * 10) + 10;
    for (let i = 0; i < bookCount; i++) {
        let newBook = {
            height: Math.floor(Math.random() * 90) + 200,
            width: Math.floor(Math.random() * 50) + 50,
            color: getRandomColor(),
            skew: randomBoolean(),
        };
        books.push(newBook);
    }
    console.log(books);
    return books;
}
//drawing the books
function drawBooks(_books) {
    let combinedBookWidth = 0;
    let previousBookSkewed = false;
    for (let book of _books) {
        let path = new Path2D();
        ctx.fillStyle = book.color;
        let skewOffset = 0;
        let moreBooks = true;
        combinedBookWidth += book.width + 3;
        if (combinedBookWidth >= canvas.width - shelfOffset * 2) {
            break;
        }
        if (book.skew == true) {
            skewOffset = Math.sin(1 / 8 * Math.PI) * book.height;
            console.log(skewOffset);
            if (rowLengthCheck(combinedBookWidth, skewOffset) == true) {
                break;
            }
            if (previousBookSkewed == false) {
                ctx.translate(skewOffset, 0);
            }
            ctx.rotate(-1 / 8 * Math.PI);
            path.rect(0, 0, book.width, -book.height);
            ctx.fill(path);
            ctx.stroke(path);
            ctx.rotate(1 / 8 * Math.PI);
            previousBookSkewed = true;
        }
        else {
            if (rowLengthCheck(combinedBookWidth, skewOffset) == true) {
                break;
            }
            path.rect(0, 0, book.width, -book.height);
            ctx.fill(path);
            ctx.stroke(path);
            previousBookSkewed = false;
        }
        ctx.translate(book.width + 3, 0);
    }
    ctx.resetTransform();
}
function generateSpiders() {
    let spiderCount = Math.floor(Math.random() * 5) + 2;
    for (let s = 0; s < spiderCount; s++) {
        let newSpider = {
            positionX: Math.floor(Math.random() * canvas.width),
            positionY: Math.floor(Math.random() * canvas.height),
            size: Math.floor(Math.random() * 10) + 5,
            speed: Math.random() * 0.5 + 0.1,
            paused: false,
        };
        spiders.push(newSpider);
    }
}
function drawSpiders(_spiders) {
    for (let j = 0; j < spiders.length; j++) {
        let spider = _spiders[j];
        let thread = new Path2D;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black";
        ctx.translate(spider.positionX, 0);
        thread.moveTo(0, 0);
        thread.lineTo(0, spider.positionY);
        ctx.stroke(thread);
        ctx.translate(0, spider.positionY + spider.size);
        let body = new Path2D;
        let legAngle = 1 / 5 * Math.PI;
        let legs = new Path2D;
        body.arc(0, 0, spider.size, 0, 360);
        body.moveTo(0, 0);
        for (let i = 0; i < 4; i++) {
            legs.moveTo(0, 0);
            ctx.rotate(legAngle);
            legs.lineTo(0, 2 * spider.size);
            ctx.stroke(legs);
        }
        ctx.resetTransform();
        ctx.translate(spider.positionX, spider.positionY + spider.size);
        for (let i = 0; i < 4; i++) {
            legs.moveTo(0, 0);
            ctx.rotate(-legAngle);
            legs.lineTo(0, 2 * spider.size);
            ctx.stroke(legs);
        }
        ctx.resetTransform();
        ctx.translate(spider.positionX, spider.positionY + spider.size);
        body.moveTo(0, spider.size / 2);
        body.arc(0, 1.5 * spider.size, spider.size / 2, 0, 360);
        ctx.stroke(legs);
        ctx.fill(body);
        ctx.resetTransform();
    }
}
function updateSpiders() {
    for (let i = 0; i < spiders.length; i++) {
        if (spiders[i].paused == false) {
            let speed = spiders[i].speed;
            spiders[i].positionY += speed;
            if (spiders[i].positionY >= canvas.height - spiders[i].size * 3) {
                spiders[i].speed = speed * -1;
            }
            else if (spiders[i].positionY < spiders[i].size * 3) {
                spiders[i].speed = speed * -1;
            }
        }
    }
}
function animationFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawShelf();
    for (let i = 0; i < shelf.length; i++) {
        ctx.translate(shelfOffset, rowHeight + rowHeight * i + shelfOffset + shelfOffset * i);
        drawBooks(shelf[i]);
    }
    updateSpiders();
    drawSpiders(spiders);
    requestAnimationFrame(animationFrame);
}
function rowLengthCheck(_currentLength, _skewOffset) {
    return _currentLength + _skewOffset >= canvas.width - shelfOffset * 2 + 250;
}
//function calculateOffset(): number {
function getRandomColor() {
    let red = String(Math.floor(Math.random() * 256));
    let green = String(Math.floor(Math.random() * 256));
    let blue = String(Math.floor(Math.random() * 256));
    return "rgb(" + red + "," + green + "," + blue + ")";
}
function randomBoolean() {
    return (Math.random() >= 0.9);
}
//# sourceMappingURL=ComplexImage.js.map