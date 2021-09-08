let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;

function circle(x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

function rect(x, y, h, w){
    ctx.fillRect(x, y, w, h); 
}

function fillColor(color){
    ctx.fillStyle = color;
}

let isDown = true
let x = 10
let y = 15
let incrementor = 5
let downInterval = setInterval(move, 100)
let upInterval
let key
function move() {
    fillColor("White")
    rect(0, 0, ctx.canvas.width, ctx.canvas.height)
    fillColor("Green")
    rect(0, 100, 1, ctx.canvas.width)
    rect(0, 10, 1, ctx.canvas.width)
    $("body").keydown(function (event) {
        key = event.keyCode
    });
    if(y >= 90) {
        isDown = false
    } 
    if(y <= 25) {
        isDown = true
    }
    if(key == 38){
        if(isDown) {
            y += incrementor
            x++
            if(y == 100){
                clearInterval(downInterval)
                upInterval = setInterval(move, 100)
            }
        } else {
            y -= incrementor
            x++
            if(y == 10){
                clearInterval(upInterval)
                downInterval = setInterval(move, 100)
            }
        }
        fillColor("Red")
        circle(x, y, 10, true)
    } else {
        fillColor("Red")
        circle(x, 90, 10, true)
        x++
    }
    key = null
    y=15
    
}