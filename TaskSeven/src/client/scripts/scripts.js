window.addEventListener("load", () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.height = innerHeight - 1;
    canvas.width = innerWidth;
    drawHouse(ctx);
    drawBike(ctx);
    drawFace(ctx);
});

//create house
let drawHouse = function (ctx) {
    //прямоугольник и контур
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 7;
    ctx.strokeRect(50, 200, 330, 300);
    ctx.fillStyle = "#975b5b";
    ctx.fillRect(50, 200, 330, 300);

    //треугольник и контур
    ctx.beginPath();
    ctx.moveTo(210, 20);
    ctx.lineTo(54, 194);
    ctx.lineTo(376, 194);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(210, 20);
    ctx.lineTo(50, 198);
    ctx.lineTo(380, 198);
    ctx.closePath();
    ctx.fill();

    //Труба
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(310, 67);
    ctx.lineTo(310, 160);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(280, 67);
    ctx.lineTo(280, 160);
    ctx.stroke();

    ctx.fillRect(280, 67, 30, 93);

    ctx.beginPath();
    ctx.moveTo(280, 68);
    ctx.quadraticCurveTo(295, 55, 310, 68);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(280, 68);
    ctx.quadraticCurveTo(295, 80, 310, 68);
    ctx.stroke();

    //окна
    ctx.fillStyle = "black";
    ctx.fillRect(237, 370, 60, 40);
    ctx.fillRect(237, 413, 60, 40);
    ctx.fillRect(300, 370, 60, 40);
    ctx.fillRect(300, 413, 60, 40);

    ctx.fillRect(237, 250, 60, 40);
    ctx.fillRect(237, 293, 60, 40);
    ctx.fillRect(300, 250, 60, 40);
    ctx.fillRect(300, 293, 60, 40);

    ctx.fillRect(70, 250, 60, 40);
    ctx.fillRect(70, 293, 60, 40);
    ctx.fillRect(133, 250, 60, 40);
    ctx.fillRect(133, 293, 60, 40);

    //Двери
    ctx.beginPath();
    ctx.moveTo(70, 400);
    ctx.lineTo(70, 500);
    ctx.arcTo(70, 350, 120, 350, 60);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(190, 400);
    ctx.lineTo(190, 500);
    ctx.arcTo(190, 350, 120, 350, 60);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(130, 350);
    ctx.lineTo(130, 500);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(110, 450, 7, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(150, 450, 7, 0, 2 * Math.PI);
    ctx.stroke();

}

//create bike
let drawBike = function (ctx) {
    ctx.strokeStyle = "#548387";
    ctx.fillStyle = "#91cbd7";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(750, 450, 60, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(1010, 450, 60, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(860, 450, 20, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(860, 450);
    ctx.lineTo(810, 370);
    ctx.lineTo(990, 370);
    ctx.lineTo(860, 450);
    ctx.lineTo(750, 450);
    ctx.lineTo(810, 370);
    ctx.lineTo(800, 350);
    ctx.lineTo(775, 350);
    ctx.lineTo(825, 350);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1010, 450);
    ctx.lineTo(980, 310);
    ctx.lineTo(1030, 280);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(980, 310);
    ctx.lineTo(930, 310);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(843, 440);
    ctx.lineTo(830, 430);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(876, 463);
    ctx.lineTo(888, 472);
    ctx.stroke();


}

//create face
let drawFace = function (ctx) {
    ctx.strokeStyle = "#3f6268";
    ctx.fillStyle = "#91cbd7";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.arc(1300, 400, 100, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(1275, 450, 35, 14, 11 * Math.PI / 180, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1270, 380);
    ctx.lineTo(1255, 420);
    ctx.lineTo(1275, 420);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(1242, 355, 16, 10, Math.PI / 180, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(1296, 355, 16, 10, Math.PI / 180, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillStyle = "#3f6268";
    ctx.beginPath();
    ctx.ellipse(1235, 355, 6, 3, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(1290, 355, 6, 3, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.strokeStyle = "#2b3940";
    ctx.fillStyle = "#3a6693";
    ctx.beginPath();
    ctx.ellipse(1300, 300, 25, 100, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(1300, 300, 15, 65, Math.PI / 2, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.fillRect(1236, 170, 128, 130);

    ctx.beginPath();
    ctx.ellipse(1300, 170, 15, 65, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1235, 170);
    ctx.lineTo(1235, 300);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(1365, 170);
    ctx.lineTo(1365, 300);
    ctx.fill();
    ctx.stroke();
}
