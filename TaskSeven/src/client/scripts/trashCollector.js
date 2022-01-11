// classes for work
class TrashCan {
    background = new Image();
    posX = 0;
    posY = 0;
    width = 300;
    height = 300;
}

class TrashCover {
    background = new Image();
    posX = 0;
    posY = 0;
    width = 300;
    height = 300;
    isOpened = false;
}

class Trash {
    background = new Image();
    posX = 0;
    posY = 0;
    width = 50;
    height = 50;
}

// main part + logic
window.addEventListener("load", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.height = innerHeight - 1;
    canvas.width = innerWidth;
    draw(ctx);
});

// variables
let trashCan = new TrashCan();
let trashCover = new TrashCover();
let trash = new Trash();
let trashArr = [];
const trashCount = 15;

trashCan.background.src = "images/trash_can.png";
trashCover.background.src = "images/trash_cover.png";
trash.background.src = "images/trash.png";

for (let i = 0; i < trashCount; i++) {
    trashArr.push(trash)
}


function draw(ctx) {
    ctx.drawImage(trashCan.background, 0, 0, trashCan.width, trashCan.height);
    ctx.drawImage(trashCover.background, 0, 0, trashCover.width, trashCover.height);

    for (let i = 0; i < trashArr.length; i++) {
        trashArr[i].posX = Math.random() * innerWidth;
        trashArr[i].posY = Math.random() * innerHeight;
        ctx.drawImage(trashArr[i].background, trashArr[i].posX, trashArr[i].posY, trash.width, trash.height);

    }


}


