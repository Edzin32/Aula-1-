var cor = 'blue';
var cont = 1;
var myGamePiece;
function startGame() {
myGamePiece = new component(30, 30, "red", 10, 120);
myGameArea.start();
}

function desenhandoimagens(){
canvas=document.getElementById("canv");
cntxt=canvas.getContext("2d");
img=new Image();
img.src="img/nave.png";
img.onload=function(){
    cntxt.drawImage(img,0,0,50,50);
    
}
};
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    }