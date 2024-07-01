console.log("hello");

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

ctx.rect(10, 10, 100, 100);
ctx.fillStyle = "rgb(0,200,200)";
ctx.fill();

let path: Path2D = new Path2D();
path.rect(200,200,50,50);
ctx.fill(path);


