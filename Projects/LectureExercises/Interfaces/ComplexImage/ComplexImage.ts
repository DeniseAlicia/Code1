
console.log("hello");
interface Book {
    height: number,
    width: number,
    color: string,
    skew: boolean,
}

interface Spider {
    positionX: number,
    positionY: number,
    size: number,
    speed: number,
    timer: number,
}

//initiiate canvas
const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
let shelfOffset: number = 50;
let rowHeight: number = 300;



//setting up some variables
let currentRow: number = 1;
let maxRows: number = 3;
let shelf: Book[][] = [];
let spiders: Spider[] = [];

//main program
drawShelf();
for (currentRow; currentRow <= maxRows; currentRow++) {
    let bookRow: Book[] = generateBooks();
    shelf.push(bookRow);
    ctx.translate(shelfOffset, rowHeight * currentRow + shelfOffset * currentRow);
    drawBooks(bookRow);

}

generateSpiders();
drawSpiders(spiders);

requestAnimationFrame(animationFrame);
//setInterval(animationFrame, 40);


function drawShelf(): void {
    let shelf: Path2D = new Path2D();
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
function generateBooks(): Book[] {

    let books: Book[] = [];
    let bookCount: number = Math.floor(Math.random() * 10) + 10

    for (let i: number = 0; i < bookCount; i++) {

        let newBook: Book = {
            height: Math.floor(Math.random() * 90) + 200,
            width: Math.floor(Math.random() * 50) + 50,
            color: getRandomColor(),
            skew:  false //randomBoolean(),
        }

        books.push(newBook);

    }
    console.log(books);
    return books

}


//drawing the books
function drawBooks(_books: Book[]): void {

    let combinedBookWidth: number = 0;
    let previousBookSkewed: boolean = false;

    for (let book of _books) {

        let path: Path2D = new Path2D();
        ctx.fillStyle = book.color;
        let skewOffset: number = 0;
        let moreBooks: boolean = true;


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




function generateSpiders(): void {

    let spiderCount: number = Math.floor(Math.random() * 5) + 2;

    for (let s: number = 0; s < spiderCount; s++) {

        let newSpider: Spider = {

            positionX: Math.floor(Math.random() * canvas.width),
            positionY: Math.floor(Math.random() * canvas.height),
            size: Math.floor(Math.random() * 10) + 5,
            speed: Math.random() * 0.5 + 0.1,
            timer: 0,
        }

        spiders.push(newSpider);
    }
}

function drawSpiders(_spiders: Spider[]): void {

    for (let j: number = 0; j < spiders.length; j++) {

        let spider: Spider = _spiders[j];
        let thread: Path2D = new Path2D;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "black"

        ctx.translate(spider.positionX, 0);
        thread.moveTo(0, 0);
        thread.lineTo(0, spider.positionY);
        ctx.stroke(thread);

        let body: Path2D = new Path2D
        body.arc(0, spider.positionY, spider.size, 0, 360)
        body.moveTo(0, spider.positionY + spider.size);
        body.lineTo



        body.moveTo(0, spider.positionY + spider.size + spider.size / 2)
        body.arc(0, spider.positionY + spider.size + spider.size / 2, spider.size / 2, 0, 360);

        ctx.fill(body);

        ctx.resetTransform();

    }
}


function updateSpiders() {
    for (let i: number = 0; i < spiders.length; i++) {

        if (spiders[i].timer == 0) {
            let speed: number = spiders[i].speed
            spiders[i].positionY += speed;
            if (spiders[i].positionY >= canvas.height - spiders[i].size * 3) {
                spiders[i].speed = speed * -1;
            }
            else if (spiders[i].positionY < spiders[i].size * 3) {
                spiders[i].speed = speed * -1;
            }
        }

        //spiders[i].timer = spiderPauseTimer(spiders[i].size, spiders[i].timer);

    }
}


function spiderPauseTimer(_size: number, _timer: number): number {

    if (_timer == 0) {
        _timer = Math.floor(Math.random() * _size);
    }
    else {
        _timer = _timer - 1;
    }

    return _timer;
}

function animationFrame() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawShelf();
    for (let i: number = 0; i < shelf.length; i++) {

        ctx.translate(shelfOffset, rowHeight + rowHeight * i + shelfOffset + shelfOffset * i);
        drawBooks(shelf[i]);

    }

    updateSpiders();
    drawSpiders(spiders);
    requestAnimationFrame(animationFrame);
}


function rowLengthCheck(_currentLength: number, _skewOffset: number): boolean {

    return _currentLength + _skewOffset >= canvas.width - shelfOffset * 2 + 250;

}

//function calculateOffset(): number {




function getRandomColor(): string {
    let red: string = String(Math.floor(Math.random() * 256));
    let green: string = String(Math.floor(Math.random() * 256));
    let blue: string = String(Math.floor(Math.random() * 256));

    return "rgb(" + red + "," + green + "," + blue + ")";
}

function randomBoolean(): boolean {
    return (Math.random() >= 0.9);
}