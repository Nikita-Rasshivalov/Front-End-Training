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
    posX;
    posY;
    width = 50;
    height = 50;
}

// variables
const canvas = document.querySelector("canvas");
let trashCan = new TrashCan();
let trashCover = new TrashCover();
trashCan.background.src = "images/trash_can.png";
trashCover.background.src = "images/trash_cover.png";

let trashArr = [];
const trashCount = 10;

//fill array of trash
for (let i = 0; i < trashCount; i++) {
    let trash = new Trash();
    trash.background.src = "images/trash.png";
    trash.posX = Math.random() * canvas.width;
    trash.posY = Math.random() * canvas.height;
    if (trash.posX + trash.width <= trashCan.width + trashCan.posX &&
        trash.posY + trash.height <= trashCan.height + trashCan.posY &&
        trash.posY + trash.height <= trashCover.height + trashCover.posY &&
        trash.posX + trash.width <= trashCover.width + trashCover.posX) {
        trash.posX = Math.random() * (1200 - 400) + 400;
        trash.posY = Math.random() * (500 - 200) + 200;
    }
    trashArr.push(trash)
}
// main part + logic
window.addEventListener("load", () => {
    const ctx = canvas.getContext("2d");
    canvas.height = innerHeight - 1;
    canvas.width = innerWidth;
    var currentObject;
    var canvasCoords = canvas.getBoundingClientRect();
    var canvasEndY = canvasCoords.bottom;
    var canvasEndX = canvasCoords.right;

    draw();

    //draw images
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(trashCan.background, trashCan.posX, trashCan.posY, trashCan.width, trashCan.height);
        ctx.drawImage(trashCover.background, trashCover.posX, trashCover.posY, trashCover.width, trashCover.height);
        for (let i = 0; i < trashArr.length; i++) {
            let handle = trashArr[i];
            ctx.drawImage(handle.background, handle.posX, handle.posY, handle.width, handle.height);
        }
        if (trashArr.length === 0 ) {
            setTimeout(() => alert('good job,everything is clear'), 100);
        }
    }

    canvas.onmousedown = function (event) {
        for (let i = 0; i < trashArr.length; i++) {
            if (trashArr[i].posX < event.clientX
                && (trashArr[i].width + trashArr[i].posX > event.clientX)
                && trashArr[i].posY < event.clientY
                && (trashArr[i].height + trashArr[i].posY > event.clientY)) {
                currentObject = trashArr[i];
                currentObject.zindex = 100;
                // Defining startY and startX prevent strange movement of the clicked object (anchor point) when dragging it
                startX = event.clientX - trashArr[i].posX;
                startY = event.clientY - trashArr[i].posY;
            }
        }
    }

    canvas.onmousemove = function (event) {
        if (currentObject != null) {
            // currentObject.x and currentObject.y prevent strange movement of the clicked object (anchor point) when dragging it
            currentObject.posX = event.clientX - startX;
            currentObject.posY = event.clientY - startY;
            trashArr = trashArr.sort(function (a, b) { return a.zindex - b.zindex });
            draw();
            checkTrash(currentObject);
        }

    }
    canvas.onmouseup = function (event) {
        if ((event.clientX > canvasEndX - 100) && (event.clientX < canvasEndX)
            && (event.clientY > canvasEndY - 100) && (event.clientY < canvasEndY)) {
            console.log("entered the remove area");
            let index = trashArr.indexOf(currentObject);
            trashArr.splice(index, 1);
            draw();
            currentObject = null;
        }
        removeTrash(currentObject)
        currentObject = null;
        for (let i = 0; i < trashArr.length; i++) {
            trashArr[i].zindex = 0;
        }

    }

    // checking the trash can
    function checkTrash(obj) {
        if (obj == null) return
        if (obj.posX < trashCover.width - obj.width &&
            obj.posY < trashCover.height - obj.height) {
            trashCover.posY = -50;
            draw();
        } else {
            trashCover.posY = 0;
            draw()
        }
    }
    //remove trash
    function removeTrash(obj) {
        if (obj == null) return
        if (obj.posX < trashCover.width - obj.width &&
            obj.posY < trashCover.height - obj.height) {
            let index = trashArr.indexOf(obj);
            trashArr.splice(index, 1);
            trashCover.posY = 0;
            draw();
        }
    }
});







