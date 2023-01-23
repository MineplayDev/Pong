let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");

let winWidth = window.innerWidth;
let winHeight = window.innerHeight;

canvas.width = winWidth;
canvas.height = winHeight;

window.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

ctx.fillRect(0, 0, winWidth, winHeight);
