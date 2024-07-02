
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
}

//initiiate canvas
const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;
let shelfOffset: number = 50;
let rowHeight: number = 300;

//drawing the shelf
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

//setting up some variables
let currentRow: number = 1;
let maxRows: number = 3;
let books: Book[] = [];
let spiders: Spider[] = [];

//main program
for (currentRow; currentRow <= maxRows; currentRow++) {
    generateBooks();
    ctx.translate(shelfOffset, rowHeight * currentRow + shelfOffset * currentRow);
    drawBooks(books);
    books.length = 0;
}
generateSpiders();
drawSpiders(spiders);

//generating the books
function generateBooks(): void {


    let bookCount: number = Math.floor(Math.random() * 10) + 2

    for (let i: number = 0; i < bookCount; i++) {

        let newBook: Book = {
            height: Math.floor(Math.random() * 90) + 200,
            width: Math.floor(Math.random() * 50) + 50,
            color: getRandomColor(),
            skew: false//randomBoolean(),
        }

        books.push(newBook);

    }
    console.log(books);

}


//drawing the books
function drawBooks(_books: Book[]): void {

    let combinedBookWidth: number = 0;

    for (let t: number = 0; t < _books.length; t++) {

        let book: Book = _books[t];
        let nextBook: Book = _books[t + 1];
        let path: Path2D = new Path2D();
        ctx.fillStyle = book.color;

        combinedBookWidth = combinedBookWidth + book.width;
        if (combinedBookWidth >= canvas.width - shelfOffset * 2) {
            break;
        }

        if (book.skew == true) {
            ctx.translate(book.width, 0);
            ctx.rotate(-1 / 8 * Math.PI);
            path.rect(0, 0, book.width, -book.height);
            ctx.fill(path);
            ctx.stroke(path);
            ctx.rotate(1 / 8 * Math.PI);


        }
        else {
            path.rect(0, 0, book.width, -book.height);
            ctx.fill(path);
            ctx.stroke(path);
        }


        ctx.translate(book.width, 0);





    }
    ctx.resetTransform();
}




function generateSpiders(): void {

    let spiderCount: number = Math.floor(Math.random() * 5) + 1;

    for (let s: number = 0; s < spiderCount; s++) {

        let newSpider: Spider = {

            positionX: Math.floor(Math.random() * canvas.width),
            positionY: Math.floor(Math.random() * canvas.height),
            size: Math.floor(Math.random() * 10) + 5,
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
        body.moveTo(0, spider.positionY + spider.size + spider.size / 2)
        body.arc(0, spider.positionY + spider.size + spider.size / 2, spider.size / 2, 0, 360);

        ctx.fill(body);

        ctx.resetTransform();

    }
}


function getRandomColor(): string {
    let red: string = String(Math.floor(Math.random() * 256));
    let green: string = String(Math.floor(Math.random() * 256));
    let blue: string = String(Math.floor(Math.random() * 256));

    return "rgb(" + red + "," + green + "," + blue + ")";
}

function randomBoolean(): boolean {
    return (Math.random() >= 0.9);
}