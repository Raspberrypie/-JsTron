var canvas = document.createElement('canvas');
document.addEventListener("keydown",keyDownHandler, false);
canvas.id = "c";
canvas.width = 600;
canvas.height = 600;
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);
var c = document.getElementById("c");
var ctx = c.getContext("2d");
k = 0
ch = true
m = 1
p = {
    x: 270,
    y: 570,
    _x: -40,
    _y: -40,
    r: 7,
    s: 3
}
e = {
    x: 270,
    y: 0,
    _x: -40,
    _y: -40,
    r: 7,
    d: 0
}

function draw() {
    p.s = 3 + k / 20;
    num = Math.floor((Math.random() * 10) + 1);
    ctx.fillStyle = "#CCFFCC";
    ctx.fillRect(0,0,600,600);

    ctx.fillStyle = "blue";
    ctx.fillRect(p.x,p.y, 30, 30);

    ctx.fillStyle = "red";
    ctx.fillRect(e.x, e.y, 30, 30)
    ctx.fillStyle = "green";
    ctx.font = "100px sans";
    ctx.fillText(k, 250, 350);
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(p._x, p._y, p.r, 0, 6.28, false);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.arc(e._x, e._y, e.r, 0, 6.28, false);
    ctx.fill();


    p._y += -1 * p.s
    e._y += k
    if (p._y > 600) {
        p._x = p._y = -40
    }
    if (p._y < 0) {
        p._x = p._y = -40
    }
    if (e._y > 600) {
        e._x = e._y = -40
    }
    if (e._y < 0) {
        e._x = e._y = -40
    }
    if (p._x > e.x && p._x < e.x + 30 && p._y <= e.y + 30 && ch) {
        k++
        ch = false
        p._y = p._x = -40
    }
    if (p._y == -40) {
        ch = true
    }
    e.x += k * m
    if (e.x <= 0 || e.x >= 570) {
        m *= -1
    }
    if (e._y == -40 && (k % num == 0)) {
        e._y = 20
        e._x = e.x + 15
    }
    if (e._x >= p.x && e._x < p.x + 30 && e._y >= p.y) {
        k = 0
        e._y = e._x = -40
    }
}
function keyDownHandler(event) {
    var keyPressed = event.keyCode;
    if (keyPressed == 32) {
        if (p._y == -40) {
            p._x = p.x + 15
            p._y = p.y - 3
        }
    }
    if (keyPressed == 68) {
        if (p.x < 570) {
            p.x += p.s;
        }
    }
    if (keyPressed == 65) {
        if (p.x > 0) {
            p.x -= p.s;
        }
    }
}

setInterval(draw, 16);