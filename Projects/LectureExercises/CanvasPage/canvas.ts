console.log("Hello There");

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

ctx.arc(200,200,50,0,360);
ctx.fillStyle = "rgb(0,150,250)";
ctx.fill();

let path: Path2D = new Path2D();
path.rect(450, 520, 150, 50), //alternative: fillrect to fill directly
ctx.fillStyle = "#C80D0D";
ctx.fill(path);
ctx.closePath;

ctx.rotate(10*Math.PI/180);
ctx.font = "100px Arial";
ctx.direction = "ltr";
ctx.fillStyle = "#8711C2";
ctx.fillText("Hello World", 400, 200);


ctx.setTransform(1,0,0,1,0,0);

for(let t: number = 0; t<20; t++) {

let path1: Path2D = new Path2D();
ctx.strokeStyle = "2";
ctx.lineWidth = 2;
path1.moveTo(400, 550);
path1.lineTo(425, 500);
path1.lineTo(375, 500);
ctx.strokeStyle = "blue";
path1.closePath();
ctx.stroke(path1);

ctx.translate(50,50);
}

let pathCoord: Path2D = new Path2D();
let x:number = 1;
let y: number = 1;

ctx.setTransform(1,0,0,1,0,0);

pathCoord.moveTo(0,0);

//draw all vertical lines
for (x;  x<15; x++) {

    let randomColor: string = "#" + String(Math.floor(Math.random()*16777215));

    let newX: number = x*10;
    let pathX: Path2D = new Path2D();
    ctx.translate(newX, 0);

    ctx.strokeStyle = randomColor;
    ctx.lineWidth = 1;
    pathX.lineTo(0, 200);
    ctx.stroke(pathX);
    
}

ctx.setTransform(1,0,0,1,0,0);







