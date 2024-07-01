
interface Tree {
    size: Size,
    width: number,
    positionX: number,
    positionY: number,
    type: string,
    infested: boolean,
}

interface Size {
    trunkSize: number,
    foliageSize: number,
}

let tree1: Tree = {
    size: {
        trunkSize: 30,
        foliageSize: 50,
    },
    width: 20,
    positionX: 50,
    positionY: 400,
    type: "leafy",
    infested: false,
}

let tree2: Tree = {
    size: {
        trunkSize: 75,
        foliageSize: 150,
    },
    width: 50,
    positionX: 850,
    positionY: 250,
    type: "needle",
    infested: false,
}

let tree3: Tree = {
    size: {
        trunkSize: 120,
        foliageSize: 300,
    },
    width: 35,
    positionX: 540,
    positionY: 260,
    type: "leafy",
    infested: true,
}

let tree4: Tree = {
    size: {
        trunkSize: 100,
        foliageSize: 130,
    },
    width: 25,
    positionX: 1000,
    positionY: 550,
    type: "needle",
    infested: false,

}
let trees: Tree[] = [tree1, tree2, tree3, tree4]

const canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
const ctx: CanvasRenderingContext2D = canvas.getContext("2d")!;

for (let i: number = 0; i < trees.length; i++) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    let path: Path2D = new Path2D();
    path.moveTo(0, 0);

    let tree: Tree = trees[i]
    let x: number = tree.positionX;
    let y: number = tree.positionY;
    let trunkWidth: number = tree.width;
    let trunkHeight: number = tree.size.trunkSize;
    let leafHeight: number = tree.size.foliageSize;
    let halfLeafHeight: number = leafHeight / 2;
    let halfWidth: number = trunkWidth / 2;
    let infested: boolean = tree.infested;

    ctx.translate(x, y);

    ctx.fillStyle = "#5f3721";
    ctx.fillRect(0, 0, trunkWidth, trunkHeight);

    if (tree.type == "needle") {



        if (infested == true) {
            ctx.fillStyle = "#efecb7";
            let pathI: Path2D = path;

            pathI.moveTo(halfWidth, -leafHeight);
            pathI.lineTo(-halfWidth, 0);
            pathI.lineTo(trunkWidth + halfWidth, 0);
            pathI.closePath();
            ctx.stroke(path);
            ctx.fill(path);


        }
        else {
            ctx.fillStyle = "#11750a";
            

            path.moveTo(halfWidth, -leafHeight);
            path.lineTo(-halfWidth, 0);
            path.lineTo(trunkWidth + halfWidth, 0);
            path.closePath();
            ctx.stroke(path);
            ctx.fill(path);
        }


        path.moveTo(halfWidth, -leafHeight);
        path.lineTo(-halfWidth, 0);
        path.lineTo(trunkWidth + halfWidth, 0);
        path.closePath();
        ctx.stroke(path);
        ctx.fill(path);



    }
    else {

        let path: Path2D = new Path2D();
        path.moveTo(0, 0);

        if (infested == true) {
            ctx.fillStyle = "#efecb7";

        }
        else {
            ctx.fillStyle = "#1acd0e";
        }

        path.moveTo(halfWidth, -halfLeafHeight);
        path.arc(halfWidth, -halfLeafHeight, halfLeafHeight, 0, 360);
        ctx.fill(path);



    }








}

